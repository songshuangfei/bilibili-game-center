import React,{ Component } from "react"
import GameItem from "./game-item/view"
import axios from 'axios';

import {ScrollMonitor} from "../../commonFunction"
import {LoadingBoard} from "../../commonJsx"


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


class GameList extends Component {
    constructor(props){
        super(props);
        var tab = this.props.tab;
        var cache = window.appDataCache.rank[tab];//获取缓存
        this.state = {
            data:cache?cache.data:[],
            haveAnyMore:true,
            tab:this.props.tab,
            isRequestFailed:false,
        }
        this.pageSize = 6;
        this.getData = this.getData.bind(this);
    }
    
    getData(toTab,laodingToRetry){//tab切换时才会有这个toTab参数，否则就是页面滚动加载数据
        var that = this;
        var tabNow;
        toTab?tabNow=toTab:tabNow = this.state.tab;
        if(!this.state.haveAnyMore){//如果后台没有数据就不请求
            return;
        }
        
        var CancelToken = axios.CancelToken;
        axios.post('/api/rank',{
            sort:tabNow,//传给后台的排序方式
            page:that.state.data.length/that.pageSize,
            pageSize:that.pageSize
        },{
            cancelToken: new CancelToken(function executor(c) {
                that.requestCancel = c;
            })
        })
        .then(res=>{
            var newData = res.data.rankList;
            that.setState(prevState=>{
                return{
                    data:[...prevState.data,...newData],
                    haveAnyMore:newData.length<that.pageSize?false:true,//设置是否还有数据的标识
                    isRequestFailed:false
                }
            })
            that.scrollMonitor.StartMonitor();
        })
        .catch(error=>{
            if(error.response){
                // 请求已发出，但服务器响应的状态码不在 2xx 范围内
                if(that.state.isRequestFailed){//如果就是true，就不必再执行setState，引起不必要的更新循环
                    console.log("不必提交state更新,不会引起第二次请求,设置<LoadingBoard/>点击重试");
                    if(laodingToRetry)//让loadingBoard变为可点击重新加载的状态
                        laodingToRetry();
                    return;
                }
                that.setState({isRequestFailed:true});
                console.log("服务器出错，点击刷新")
            }else{
                console.log(error.message);
            }
        })
    }

    componentDidMount(){
        this.scrollMonitor = new ScrollMonitor(this.getData);//创建监听器
        if(this.state.data.length!==0){
            console.log(`<RankingList/>,已经加载tab:${this.state.tab}缓存数据,暂时不请求数据`);
            this.scrollMonitor.StartMonitor();//监听器开始监听，用户滑动到底就加载数据并自动取消监听，在加载完数据后再次调用开启监听
            return;
        }
        this.getData();//没有数据就获取数据
    }

    componentWillReceiveProps(nextProps){
        if(nextProps===this.props){
            return;
        }
        window.appDataCache.rank[this.state.tab]={//切换tab先保存数据
            haveAnyMore:this.state.haveAnyMore,
            data:this.state.data
        }
        window.appDataCache.rank.haveAnyMore = this.state.haveAnyMore;

        if(this.requestCancel){//切换tab有可能还有axios，取消请求
            this.requestCancel("<RankingList/>，tab已切换，请求数据被拦截");
        }

        var newTab = nextProps.tab;//新tab下页面初始化
        var newData = window.appDataCache.rank[newTab]?window.appDataCache.rank[newTab]:{data:[],haveAnyMore:true};
        this.setState({
            tab:newTab,
            data:newData.data,
            haveAnyMore:newData.haveAnyMore,
        });
    }

    componentDidUpdate(){
        if(this.state.data.length===0){
            this.getData();
            console.log("更新组件，如果是切换tab而没有数据就请求数据");
            return;
        }

    }

    componentWillUnmount(){
        if(this.requestCancel){
            this.requestCancel("<RankingList/>，组件卸载拦截请求数据");
        }
        this.scrollMonitor.StopMonitor();
        window.appDataCache.rank[this.state.tab]={
            data:this.state.data
        }
    }

    render(){
        var data = this.state.data;
        return(
            <div className="rank-list">
                {
                    data.map((v,i)=>(
                        <GameItem  key={v.gameId} data={v} index={i} isDownload={this.state.tab==='GoodTrend'?false:true}/>
                    ))
                }
                <div>
                    <LoadingBoard msg={this.state.isRequestFailed?'failed':
                        this.state.haveAnyMore?'loading':"nomore"} action={this.getData}/>
                </div>
            </div>
        )
    }
}

export default GameList;