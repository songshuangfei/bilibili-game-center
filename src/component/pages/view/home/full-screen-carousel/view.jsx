import React,{Component} from "react"
import { Carousel } from 'antd-mobile';

import "./style.less"

//轮播图尺寸配置在style.less

//轮播图的请求接口
// const CARLAPI = ""

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
        this.state = {
            carlData:[]
        }

        this.getCarouselCnt = this.getCarouselCnt.bind(this);
    }

    getCarouselCnt(){
        var newData = {//模拟轮播图数据
            data:[
                { img:"/activityimg/1.jpg",activityId:"001"},
                { img:"/activityimg/2.jpg",activityId:"002"},
                { img:"/activityimg/3.jpg",activityId:"003"}
            ]
        }
        //axios get

        //callback
        this.setState({carlData:newData.data})
        
    }
    componentDidMount(){
        this.getCarouselCnt()
    }

    render(){
        var data = this.state.carlData;
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
