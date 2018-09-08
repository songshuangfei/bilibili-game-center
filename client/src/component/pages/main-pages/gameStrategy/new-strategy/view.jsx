import React,{Component} from "react";
import axios from "axios";
import {eyeGrayIcon,goodGrayIcon} from "../../../icons"
import {ScrollMonitor} from ".././../../commonFunction"
import {LoadingBoard} from "../../../commonJsx"

import "./style.less";

/*
前端单条数据
{
    authorName:'咸鱼5号',
    authorHead:"dasasd",
    title:"《崩坏3》新剧情攻略",
    cover:"",
    strategyInfo:"非常好玩的游戏啊啊啊啊啊啊啊啊啊啊啊sssssssssssssssssssss啊啊啊~太好玩了~",
    eye:"22",
    good:"12",
    gameName:"崩坏3",
    stragetyId:"12312",
}*/

const StrategyItem = (props) => {
    var data =props.data;
    return(
        <div className="strg-item">
            <div className="author">
                <img className="head" src={data.authorHead} alt=""/>
                <div className="uesr-name">{data.authorName}</div>
            </div>
            <div className="str-title">{data.title}</div>
            <img className="cover" src={data.cover} alt=""/>
            <div className="strg-info">{data.strategyInfo}</div>
            <div className="info">
                <div className="game-name">{data.gameName}</div>
                <div className="strg-hot">
                    <img src={eyeGrayIcon} alt=""/>{data.eye}
                    <img src={goodGrayIcon} alt=""/>{data.good}
                </div>
            </div>
        </div>
    )
}



class NewStrategy extends Component {
    constructor(){
        super();
        var cacheData =window.appDataCache.strategy.newStrategy;
        this.state = {
            data:cacheData?cacheData:[],
            haveAnyMore:true,
            isRequestFailed:false,
        }
        this.pageSize = 5;
        this.getData = this.getData.bind(this);
    }

    getData(_,laodingToRetry){
        var that =this;
        if(!this.state.haveAnyMore){
            return;
        }
        var CancelToken = axios.CancelToken;
        axios.post('/api/strategy/newstrategy',{
            page:that.state.data.length/that.pageSize,
            pageSize:this.pageSize,
        },{
            cancelToken: new CancelToken(function executor(c) {
                // executor 函数接收一个 cancel 函数作为参数
                that.requestCancel = c;
            })
        })
        .then(res=>{
            var data = res.data.strategy;
            that.setState(prevState=>{
                return{
                   data: [...prevState.data,...data],
                   haveAnyMore: data.length < this.pageSize?false:true
                }
            })
            this.scrollMonitor.StartMonitor();
        })
        .catch(error=>{
            if (error.response) {
                //请求失败
                if(this.state.isRequestFailed){
                    console.log('ssss')
                    if(laodingToRetry)
                        laodingToRetry();
                    return;
                }
                that.setState({isRequestFailed:true});
                console.log("服务器出错，点击刷新")
            } else {
                console.log(error)
            }
        })
    }

    componentDidMount(){
        this.scrollMonitor = new ScrollMonitor(this.getData)
        if(this.state.data.length !==0){
            console.log("<NewStragety>,加载缓存，暂不请求数据");
            this.scrollMonitor.StartMonitor();
            return;
        }
        this.getData();
    }

    componentWillUnmount(){
        if(this.requestCancel){
            this.requestCancel("<NewStragety/>组件卸载拦截请求数据")
        }
        this.scrollMonitor.StopMonitor();//取消监听
        window.appDataCache.strategy.newStrategy = this.state.data;
    }

    render(){
        var data = this.state.data;
        return(
            <div className="strategy-new-list">
                <div className="title">
                    最新攻略
                </div>
                {data.map(v=>(
                    <StrategyItem data={v} key={v.stragetyId}/>
                ))}
                <LoadingBoard msg={this.state.isRequestFailed?'failed':
                    this.state.haveAnyMore?'loading':"nomore"} action={this.getData}
                />
            </div>
        )
    }
}

export default NewStrategy;