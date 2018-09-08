import React,{ Component } from "react"
import { rightIcon,eyeIcon,goodIcon } from "../../../icons"
import { HorizontalScroll } from "../../../commonJsx"
import axios from 'axios'

import "./style.less"
//列表最大长度在style.less配置，默认最长为12个

/*
前端单条数据要求
{
    img:"/videocover/1.jpg",
    eye:"2074",
    good:"101",
    title:"【角色测评】[处刑装·紫苑]全新改版",
    game:"崩坏3",
    vedioId:"001"
}
*/
const StrategyItem = (props)=>{
    var data = props.data
    return(
        <li>
            <div className="cover">
                <img src={data.img} alt=""/>
                <div className="video-hot">
                    <img src={eyeIcon} alt="i"/><div>{data.eye}</div>
                    <img src={goodIcon} alt="i"/><div>{data.good}</div>
                </div>
            </div>
            <div className="info">
                <div className="title">{data.title}</div>
                <span>{data.game}</span>
            </div>
            <a href={`/video/${data.vedioId}`}> </a>
        </li>
    )
}

class HotStrategy extends Component {
    constructor(){
        super();
        var cacheData = window.appDataCache.home.hotStrategy
        this.state = {
            data:cacheData?cacheData:[]//缓存数据如果存在，就给给state
        }
        this.getData = this.getData.bind(this);
    }

    getData(){
        console.log("<HotStrategy/>,无缓存,请求数据")
        var that = this;
        var CancelToken = axios.CancelToken;
        axios.get('/api/hotstrategy',{
            cancelToken: new CancelToken(function executor(c) {
                that.requestCancel = c;
            })
        })
        .then(res=>{
            that.setState({data:res.data.hotStrategy})
        })
        .catch(error=>{
            console.log(error)
        })
    }

    componentDidMount(){
        if(this.state.data.length!==0){
            console.log("<HotStrategy/>,已经加载缓存数据,不请求数据")
            return;
        }
        this.getData();
    }

    componentWillUnmount(){
        if(this.requestCancel){//如果没执行过this.getData就不会有this.requestCancel。所以要判断
            this.requestCancel("<HotStrategy/>，组件卸载拦截请求数据");
        }
        window.appDataCache.home.hotStrategy = this.state.data

    }

    render(){
        var data = this.state.data;
        return(
            <div className="hot-strategy">
                <div className="hot-strategy-title">
                    热门攻略
                    <a href="/rank"><img src={rightIcon} alt=""/></a>
                </div>
                <div className="hot-strategy-list">
                    <HorizontalScroll>
                        {data.map(v=>(
                            <StrategyItem key={v.vedioId} data={v}/>
                        ))}
                    </HorizontalScroll>
                </div>
            </div>
        )
    }
}

export default HotStrategy;