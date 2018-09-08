import React,{Component} from "react"
import { Carousel } from 'antd-mobile';
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


class FullScreenCarl extends Component{
    constructor(){
        super();
        var cacheData = window.appDataCache.home.carousel
        this.state = {
            data:cacheData?cacheData:[]//缓存数据如果存在，就给给state
        }
        this.getData = this.getData.bind(this);
    }


    getData(){
        console.log("<Carousel/>,无缓存,请求数据")
        var that =this;
        var CancelToken = axios.CancelToken;
        axios.get('/api/carousel', {
            cancelToken: new CancelToken(function executor(c) {
                // executor 函数接收一个 cancel 函数作为参数
                that.requestCancel = c;
            })
        })
        .then((res)=>{
            that.setState({data:res.data.carousel})
        })
        .catch((error)=>{
            console.log(error);
        });
    }
    
    componentDidMount(){
        if(this.state.data.length!==0){
            console.log("<Carousel/>,已经加载缓存数据,不请求数据")
            return;
        }
        this.getData();
    }

    componentWillUnmount(){
        if(this.requestCancel){//如果没执行过this.getData就不会有this。requestCancel。所以要判断
            this.requestCancel("<Carousel>,组件卸载拦截请求数据");
        }
        window.appDataCache.home.carousel = this.state.data//设置缓存
    }

    render(){
        var data = this.state.data;
        return(
            <div className="carousel-out">
                <Carousel
                    autoplay={true}
                    infinite
                >
                    {data.map(v=>(
                        <CarlItem key={v.activityId} data={v}/>
                    ))}
                </Carousel>
            </div>
            
        )
    }
}

export default FullScreenCarl;
