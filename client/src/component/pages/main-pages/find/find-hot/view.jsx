import React,{Component} from "react"
import { Carousel } from 'antd-mobile';
import { findGift,findRank,findKinds } from "../../../icons"
import axios from 'axios';

import "./style.less"

//轮播图尺寸配置在style.less

//前端单条数据要求
/*
    { img:"/activityimg/3.jpg",activityId:"003"}
*/

const CarlItem = (props)=>{
    var data = props.data;
    return(
        <a className="carl-item" href={`/activity/${data.activityId}`}>
            <img src={data.img} alt="img" 
                onLoad={() => {
                    window.dispatchEvent(new Event('resize'));
                  }}
            />
        </a>
    )
}


class FindHot extends Component{
    constructor(){
        super();
        var cacheData = window.appDataCache.find.hot
        this.state = {
            data:cacheData?cacheData:[]//缓存数据如果存在，就给给state
        }
        this.getData = this.getData.bind(this);
    }


    getData(){
        console.log("<FindHot/>,无缓存,请求数据")
        var that =this;
        var CancelToken = axios.CancelToken;
        axios.get('/api/find/hot', {
            cancelToken: new CancelToken(function executor(c) {
                // executor 函数接收一个 cancel 函数作为参数
                that.requestCancel = c;
            })
        })
        .then((res)=>{
            that.setState({data:res.data.hot})
        })
        .catch((error)=>{
            console.log(error.message);
        });
    }
    
    componentDidMount(){
        if(this.state.data.length!==0){
            console.log("<FindHot/>,已经加载缓存数据,不请求数据")
            return;
        }
        this.getData();
    }

    componentWillUnmount(){
        if(this.requestCancel){//如果没执行过this.getData就不会有this。requestCancel。所以要判断
            this.requestCancel("<FindHot>,组件卸载拦截请求数据");
        }
        window.appDataCache.find.hot = this.state.data//设置缓存
    }

    render(){
        var data = this.state.data;
        return(
            <div className="find-hot">
                <div className="find-carousel-out">
                    <Carousel
                        autoplay={true}
                        infinite
                    >
                        {data.map(v=>(
                            <CarlItem key={v.activityId} data={v}/>
                        ))}
                    </Carousel>
                </div>
                <div className="hot-kinds">
                    <div className="kind">
                        <img src={findRank} alt=""/><span>排行</span>
                    </div>
                    <div className="v-line"></div>
                    <div className="kind">
                        <img src={findKinds} alt=""/><span>分类</span>
                    </div>
                    <div className="v-line"></div>
                    <div className="kind">
                        <img src={findGift} alt=""/><span>礼包</span>
                    </div>
                </div>
            </div>
            
            
        )
    }
}

export default FindHot;
