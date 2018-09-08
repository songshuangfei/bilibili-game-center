import React,{ Component } from "react"
import { starIcon } from "../../../icons"
import {ScrollMonitor} from "../../../commonFunction"
import {LoadingBoard} from "../../../commonJsx"


import axios from 'axios';


import "./style.less"

//前端单条数据要求
/*{
    gameId:"1",
    name:"大王不高兴",
    activityimg:"/gamenews/1.png",
    gameIcon:"/gameicon/dwbgx.png",
    score:"9.8",
    info:"全新回合概念制手游《大王不高兴》换了启程",
    isNewGame:true
}*/


const AdverItem= (props)=>{
    var data = props.data;
    return(
       <div className="adver-item">
            <img className="game-cover" src={data.activityimg} alt=""/>
            <div className="info">
                <div className="top">
                    {data.name}
                    <div className="t-right">
                        <div className="score">
                            <img src={starIcon} alt=""/>
                            {data.score}
                        </div>
                        <div className="v-line"></div>
                        <img className="icon" src={data.gameIcon} alt=""/>
                    </div>
                </div>
                <div className="bottom">
                <div className="b-left">
                    {data.info}
                    <span>
                        {data.isNewGame?"新游预约":" "}
                    </span>
                </div>
                </div>
            </div>
            <a href={`/game/${data.gameId}`}> </a>
       </div> 
    )
}


class GameAdver extends Component {
    constructor(){
        super();
        var cacheData = window.appDataCache.home.gameAdver;
        this.state = {
            page:cacheData?cacheData.length/5:0,
            HaveAnyMore:true,
            data:cacheData?cacheData:[],
            isRequestFailed:false,
        }
        this.pageSize = 5;
        this.getData = this.getData.bind(this);
    }

    getData(_,laodingToRetry){
        console.log("<GameAdver/>,无缓存或加载新数据，请求数据")
        var that =this;
        if(this.state.HaveAnyMore){//服务端还有数据时才加载
            var CancelToken = axios.CancelToken;
            axios.post('/api/gameadver', {
                page:that.state.page,
                pageSize:that.pageSize,
            },{
                cancelToken: new CancelToken(function executor(c) {
                    // executor 函数接收一个 cancel 函数作为参数
                    that.requestCancel = c;
                })
            })
            .then((res)=>{
                var resData = res.data.gameAdver;
                that.setState((prevstate)=>{
                    let l = resData.length;
                    return{
                        page:prevstate.page+1,
                        data:[...prevstate.data,...resData],
                        HaveAnyMore: l < that.pageSize?false:true,//如果传回数据个数小于size，说明服务器没有更多数据了，设值为false，下次就不用发送无用的请求了
                        isRequestFalied:false
                    }
                })
                this.scrollMonitor.StartMonitor();//数据结束后重新设置监听

            })
            .catch((error)=>{
                if(error.response){
                    // 请求已发出，但服务器响应的状态码不在 2xx 范围内
                    if(that.state.isRequestFailed){//如果就是true，就不必再执行setState，引起不必要的更新循环
                        if(laodingToRetry)
                            laodingToRetry();
                        return;
                    }
                    that.setState({isRequestFailed:true})
                    //设置请求失败，改变页面展示
                }else{
                    //非服务器响应错误的error
                    console.log(error.message);
                    //这里error.message就是requestCancel里设置的消息
                }
            });
        }
    }

    componentDidMount(){
        this.scrollMonitor = new ScrollMonitor(this.getData);
        if(this.state.data.length!==0){
            console.log("<GameAdver/>,已经加载缓存数据,不请求数据");
            this.scrollMonitor.StartMonitor();
            return;
        }
        this.getData();//包含绑定监听事件
        //组件挂在后首先请求以此数据，在请求回调函数中绑定滚动监听。
    }

    componentWillUnmount(){
        if(this.requestCancel){//如果没执行过this.getData就不会有this。requestCancel。所以要判断
            this.requestCancel("<GameAdver/>,组件卸载拦截请求数据");
        }
        this.scrollMonitor.StopMonitor()
        window.appDataCache.home.gameAdver = this.state.data;//设置缓存
    }

    render(){
        var data = this.state.data,
            isRequestFailed = this.state.isRequestFailed;
        return(
            <div className="game-adver">
                {data.map(v=>(
                    <AdverItem key={v.gameId} data={v} />
                ))}
                <div>
                    <div>
                        <LoadingBoard msg={isRequestFailed?'failed':
                        this.state.HaveAnyMore?'loading':"nomore"} action={this.getData}/>
                    </div>
                </div>
            </div>
        )
    }
}



export default GameAdver;