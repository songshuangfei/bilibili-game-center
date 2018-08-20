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
        var cacheData = window.appDataCache.rank.state;//获取缓存
        var blank = {//初次挂载时会使用这个空数据
            BestSelling:[],
            GoodTrend:[],
            MorePraise:[],
            Hot:[],
        }
        this.state = cacheData?cacheData:{
            tabNow:'BestSelling',
            data:blank,
            haveAnyMore:{//每个分页是否还有数据的标识
                BestSelling:true,
                GoodTrend:true,
                MorePraise:true,
                Hot:true
            }
        }
        this.pageSize=10;
        this.sortType=['BestSelling','GoodTrend','MorePraise','Hot'];
        this.getData = this.getData.bind(this);
        this.touchTab = this.touchTab.bind(this);
    }

    getData(toTab){
        var that = this;
        var tabNow;
        if(toTab){//如果是点击tab而请求数据
            tabNow = toTab;
            if(that.state.data[tabNow].length!==0){//点击换页过来但是有数据，不请求数据（return）
                console.log(`tab:${tabNow}有数据`)
                return;
            }
        }else{//初始化加载和滚动加载没有toTab参数，就会执行这里
            tabNow = that.state.tabNow;
        }


        if(!this.state.haveAnyMore[tabNow]){//当前tab没有更多数据时数据
            console.log(`tab:${tabNow}下没有更多了`)
            return;
        }

        var tabDataNow = that.state.data[tabNow];//当前tab数据（array）

        console.log(`<RankingList/>,无缓存或请求新的数据,请求tab:${tabNow}数据`);
        var CancelToken = axios.CancelToken;
        axios.post('/api/rank',{
            sort:tabNow,//传给后台的排序方式
            page:tabDataNow.length/that.pageSize,
            pageSize:that.pageSize
        },{
            cancelToken: new CancelToken(function executor(c) {
                that.requestCancel = c;
            })
        })
        .then(res=>{
            console.log(res.data)
            var newData = {...that.state.data}
            var newHaveAnyMore = {...that.state.haveAnyMore};

            if(res.data.rankList.length < that.pageSize){
               newHaveAnyMore[tabNow] = false
            }
            newData[tabNow] = [...newData[tabNow],...res.data.rankList];
            this.setState({
                data:newData,
                haveAnyMore:newHaveAnyMore
            });
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
        document.documentElement.scrollTop = document.body.scrollTop = 0;
        //打开其他tab无论有没有数据都将页面滚动回最顶出出
        var toTab = this.sortType[num];//将前往的tab
        if(toTab !== this.state.tabNow){//点击的不是当前tab
            this.setState({
                tabNow:toTab
            })
            this.getData(toTab)
        }
    }

    componentDidMount(){

        this.scrollMonitor = new ScrollMonitor(this.getData);//创建监听器
        var data = this.state.data,
            tabNow = this.state.tabNow;
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
        window.appDataCache.rank.state = this.state;//缓存数据
    }
    render(){
        var tabLib = this.sortType
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
                <LoadingBoard />
            </div>
        )
    }
}

export { RankingList }
