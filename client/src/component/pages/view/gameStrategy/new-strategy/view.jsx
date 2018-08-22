import React,{Component} from "react";

import axios from "axios";

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
                <div className="strg-hot"></div>
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
        }
        this.pageSize = 5;
    }

    getData(){
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
        })
    }

    componentDidMount(){
        if(this.state.data.length !==0){
            return;
        }
        this.getData();
    }
    componentWillUnmount(){
        if(this.requestCancel){
            this.requestCancel("<NewStragety/>组件卸载拦截请求数据")
        }
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
            </div>
        )
    }
}

export default NewStrategy;