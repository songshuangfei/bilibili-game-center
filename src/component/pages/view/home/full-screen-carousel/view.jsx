import React,{Component} from "react"
import { Carousel } from 'antd-mobile';

import "./style.less"

//轮播图尺寸配置在style.less

//轮播图的请求接口
// const CARLAPI = ""
var newData = {//模拟轮播图数据
    data:[
        { img:"/activityimg/1.jpg",activityId:"001"},
        { img:"/activityimg/2.jpg",activityId:"002"},
        { img:"/activityimg/3.jpg",activityId:"003"}
    ]
}

const CarlItem = (props)=>{
    var data = props.data;
    return(
        <a className="carl-item" href={`/activity/${data.activityId}`}>
            <img src={data.img} alt="img"/>
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
        var resData = newData;
        //axios get
        // console.log("Carousel，无缓存,请求数据")

        window.appDataCache.home.carousel = resData.data//设置缓存
        //callback
        this.setState({data:resData.data})
        
    }
    componentDidMount(){
        if(this.state.data.length!==0){
            // console.log("Carousel，缓存数据已经给state，不请求数据")
            return;
        }
        this.getData()
    }

    render(){
        var data = this.state.data;
        return(
            <Carousel
                autoplay={true}
                infinite
            >
                {data.map(v=>(
                    <CarlItem key={v.activityId} data={v}/>
                ))}
            </Carousel>
        )
    }
}

export default FullScreenCarl;
