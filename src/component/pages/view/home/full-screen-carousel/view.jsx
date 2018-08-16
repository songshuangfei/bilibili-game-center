import React,{Component} from "react"
import { Carousel } from 'antd';

import "./style.less"

//轮播图尺寸配置在style.less

//轮播图的请求接口
// const CARLAPI = ""

const CarlItem = (props)=>{
    return(
        <div className="carl-item">
            <a href={props.to}>
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
                { img:"img/1.jpg",to:"img/1.jpg"},//链接都为http完整url
                { img:"img/2.jpg",to:"img/2.jpg"},
                { img:"img/3.jpg",to:"img/3.jpg"}
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
                {cdata.map((v,i)=>(
                    <CarlItem key={i} img={v.img} to={v.to}/>
                ))}
            </Carousel>
        )
    }
}

export default FullScreenCarl;
