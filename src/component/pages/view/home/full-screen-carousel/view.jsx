import React,{Component} from "react"
import { Carousel } from 'antd';

import "./style.less"

//轮播图尺寸配置在style.less

//轮播图的请求接口
// const CARLAPI = ""

const CarlItem = (props)=>{
    return(
        <div className="carl-item">
            <a href={`/activity/${props.activityId}`}>
                <img src={props.img} alt="img"/>
            </a>
        </div>
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
                { img:"/activtyimg/1.jpg",activityId:"001"},
                { img:"/activtyimg/2.jpg",activityId:"002"},
                { img:"/activtyimg/3.jpg",activityId:"003"}
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
        var cdata = this.state.carlData;
        return(
            <Carousel autoplay={true}>
                {cdata.map((v)=>(
                    <CarlItem key={v.activityId} img={v.img} activityId={v.activityId}/>
                ))}
            </Carousel>
        )
    }
}

export default FullScreenCarl;
