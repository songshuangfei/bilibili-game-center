import React,{ Component } from "react"
import axios from 'axios';

import {ScrollMonitor} from "../commonFunction"
import {LoadingBoard} from "../commonJsx"
import "./style.less"

/*前端单条数据
{
    icon：'',
    name:'',
    type:'',
    size:'',
    score:'',
    gameId:''
}
*/


const GameItem =(props)=>{
    var data =props.data
    return(
        <div className="rank-item">
        {data.gameId}
        </div>
    )
}

class RankingList extends Component {
    constructor(){
        super();
        var cacheData = window.appDataCache.rank.allData;//获取缓存(包含四个数组的对象)
        var tab = window.appDataCache.rank.tab;//保存离开时的tab
        var blank = {//初次挂载时会使用这个空数据
            BestSelling:[],
            GoodTrend:[],
            MorePraise:[],
            Hot:[],
        }
        this.state = {
            pageSize:10,
            sortType:['BestSelling','GoodTrend','MorePraise','Hot'],
            tabNow:tab?tab:'BestSelling',
            data:cacheData?cacheData:blank,
            haveAnyMore:{//每个分页是否还有数据的标识
                BestSelling:true,
                GoodTrend:true,
                MorePraise:true,
                Hot:true
            }
        }
        this.getData = this.getData.bind(this);
        this.touchTab = this.touchTab.bind(this)
    }

    getData(){
        console.log("get",this)
        console.log(`<RankingList/>,无缓存或请求新的数据,请求tab:${this.state.tabNow}数据`);
        var that = this;
        var tabDataNow = that.state.data[that.state.tabNow];//当前tab数据（array）
        if(tabDataNow.length%that.state.pageSize !==0){
            //有余数说明上次服务器最后传了个不足pagesize的数据，说明后台无数据了，直接return
            //这里设置无内容的提示
            console.log(`tab:${that.state.tabNow}没有更多了`)
            return;
        }

        var CancelToken = axios.CancelToken;
        axios.post('/api/rank',{
            sort:that.state.tabNow,//传给后台的排序方式
            page:tabDataNow.length/that.state.pageSize,
            pageSize:that.state.pageSize
        },{
            cancelToken: new CancelToken(function executor(c) {
                that.requestCancel = c;
            })
        })
        .then(res=>{
            console.log(res.data)
            var newData = {...that.state.data}
            newData[that.state.tabNow] = [...newData[that.state.tabNow],...res.data.rankList];
            this.setState({data:newData});
            this.scrollMonitor.StartMonitor();

        })
        .catch(error=>{
            if(error.response){
                // 请求已发出，但服务器响应的状态码不在 2xx 范围内
                //设置请求失败，改变页面展示
            }else{
                //非服务器响应错误的error
                console.log(error.message);
            }
        })
    }

    touchTab(num){
        var toTab = this.state.sortType[num];//将前往的tab
        if(toTab !== this.state.tabNow){//点击的不是当前tab
            this.setState({
                tabNow:toTab
            })
        }
    }

    componentDidMount(){
        this.scrollMonitor = new ScrollMonitor(this.getData);//创建监听器
        var data = this.state.data,
            tabNow = this.state.tabNow
        if(data){//存在缓存数据
            if(data[tabNow].length!==0){//存在当前tab缓存数据
                console.log(`<RankingList/>,已经加载tab:${tabNow}缓存数据,暂时不请求数据`);
                this.scrollMonitor.StartMonitor();//监听器开始监听，用户滑动到底就加载数据
                return;
            }
        }
        this.getData();
    }

    componentWillUnmount(){
        if(this.requestCancel){//如果没执行过this.getData就不会有this.requestCancel。所以要判断
            this.requestCancel("<RankingList/>，组件卸载拦截请求数据");
        }
        this.scrollMonitor.StopMonitor();//停止监听
        window.appDataCache.rank.tab = this.state.tabNow;//缓存tab分页所在标签
        window.appDataCache.rank.allData = this.state.data;//缓存数据
    }
    render(){
        var tabLib = this.state.sortType
        var tabNow = this.state.tabNow;
        var data = this.state.data[tabNow];
        return(
            <div className="rank">
                <div className="rank-type-tab">
                    <div className="tab" onTouchEnd={()=>this.touchTab(0)}>畅销榜</div>
                    <div className="tab" onTouchEnd={()=>this.touchTab(1)}>期待帮</div>
                    <div className="tab" onTouchEnd={()=>this.touchTab(2)}>口碑榜</div>
                    <div className="tab" onTouchEnd={()=>this.touchTab(3)}>上升最快</div>
                    <div className="tab-target" style={{left:tabLib.indexOf(tabNow)*25+'%'}}></div>
                </div>
                <div className="list">
                    {
                        data.map(v=>(
                            <GameItem key={v.gameId} data={v}/>
                        ))
                    }
                </div>
                <LoadingBoard                />
            </div>
        )
    }
}

export { RankingList }
