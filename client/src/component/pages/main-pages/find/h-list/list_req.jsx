import React,{ Component } from "react"
import { rightIcon } from "../../../icons"
import { HorizontalScroll } from "../../../commonJsx"
import axios from 'axios';
import "./style.less"

//前端单条数据要求
/*
        {name:"梦幻模拟战",icon:"/gameicon//mhmnz.png",gameId:"004"}
*/

const GameItem = (props)=>{
    var data = props.data;
    return(
        <li>
            <a href={`/game/${data.gameId}`}>
                <img src={data.icon} alt=""/>
            </a>
            <p className="g-name">{data.name}</p>
        </li>
    )
}


class HListReq extends Component {
    constructor(props){
        super(props);
        var cacheData = window.appDataCache.find[this.props.tag];
        this.state = {
            data:cacheData?cacheData:[]//缓存数据如果存在，就给给state
        }
        this.getData = this.getData.bind(this);
        this.url = this.props.url;
        this.name = this.props.name ;
    }
    getData(){
        console.log(`<HList/>tag: ${this.props.tag},无缓存,请求数据`)
        var that =this;
        var CancelToken = axios.CancelToken;
        axios.get(that.url, {
            cancelToken: new CancelToken(function executor(c) {
                // executor 函数接收一个 cancel 函数作为参数
                that.requestCancel = c;
            })
        })
        .then((res)=>{
            that.setState({data:res.data[this.props.tag]})
        })
        .catch((error)=>{
            console.log(error.message);
        });
    }

    componentDidMount(){
        if(this.state.data.length!==0){
            console.log(`<HList/>tag: ${this.props.tag},已经加载缓存数据,不请求数据`)
            return;
        }
        this.getData();
    }

    componentWillUnmount(){
        if(this.requestCancel){//如果没执行过this.getData就不会有this.requestCancel。所以要判断
            this.requestCancel(`<HList/>tag: ${this.props.tag},组件卸载拦截请求数据`);
        }
        window.appDataCache.find[this.props.tag]=this.state.data;
    }

    render(){
        var data = this.state.data;
        return(
            <div className="h-list">
                <div className="h-list-title">
                    <span>{this.name}</span>
                    <a href="/"><img src={rightIcon} alt=""/></a>
                </div>
                <div className="game-list">
                    <HorizontalScroll>
                        {data.map(v=>(
                            <GameItem key={v.gameId} data = {v}/>
                        ))}
                    </HorizontalScroll>
                </div>
                
            </div>
        )
    }
}

export default HListReq;