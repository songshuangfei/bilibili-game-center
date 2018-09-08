import React,{Component} from "react"
import {HorizontalScroll } from "../../../commonJsx"
import axios from 'axios';

import "./style.less"

//轮播图尺寸配置在style.less

//前端单条数据要求
/*
    { img:"/activityimg/3.jpg",activityId:"003"}
*/

const SpecialItem = (props)=>{
    return(
        <li className="special-item">
            <a  href={`/special/${props.specialId}`}>
                <img src={props.specialImg} alt="img" />
            </a>
        </li>
        
    )
}


class Special extends Component{
    constructor(){
        super();
        var cacheData = window.appDataCache.find.Special;
        this.state = {
            data:cacheData?cacheData:[]//缓存数据如果存在，就给给state
        }
        this.getData = this.getData.bind(this);
    }


    getData(){
        console.log("<Special/>,无缓存,请求数据")
        var that =this;
        var CancelToken = axios.CancelToken;
        axios.get('/api/find/special', {
            cancelToken: new CancelToken(function executor(c) {
                // executor 函数接收一个 cancel 函数作为参数
                that.requestCancel = c;
            })
        })
        .then((res)=>{
            that.setState({data:res.data.special})
        })
        .catch((error)=>{
            console.log(error.message);
        });
    }
    
    componentDidMount(){
        if(this.state.data.length!==0){
            console.log("<Special/>,已经加载缓存数据,不请求数据")
            return;
        }
        this.getData();
    }

    componentWillUnmount(){
        if(this.requestCancel){//如果没执行过this.getData就不会有this。requestCancel。所以要判断
            this.requestCancel("<Special>,组件卸载拦截请求数据");
        }
        window.appDataCache.find.Special = this.state.data;//设置缓存
    }

    render(){
        var data = this.state.data;
        return(
            <div className="find-special">
                <div className="title"><span> 精选专栏</span></div>
                <HorizontalScroll>
                    {
                        data.map((v,i)=>(
                            <SpecialItem key={i} 
                                specialId={v.specialId} 
                                specialImg={v.specialImg}
                            />
                        ))
                    }
                </HorizontalScroll>
            </div>
            
            
        )
    }
}

export default Special;
