import React,{ Component } from "react"
import { rightIcon,eyeIcon,goodIcon } from "../icons"

import "./style.less"
//列表最大长度在style.less配置，默认最长为12个

const strgData = {
    data:[
        {img:"/videocover/1.jpg",eye:"2074",good:"101",title:"【角色测评】[处刑装·紫苑]全新改版",game:"崩坏3",vedioId:"001"},
        {img:"/videocover/2.jpg",eye:"1478",good:"341",title:"《崩坏三》120水隐藏福利，永久有效，你们发现了吗？",game:"崩坏3",vedioId:"002"},
        {img:"/videocover/3.jpg",eye:"896",good:"99",title:"【FGO】满破・泳装·谜之女主角XX（CV：川澄绫子）宝具+EX+2技能",game:"FGO",vedioId:"003"},
        {img:"/videocover/4.jpg",eye:"136",good:"49",title:"【第五人格】双监管者模式流出，监管者竟然可以使用道具",game:"第五人格",vedioId:"004"},
    ]
}
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
        this.state = {
            data:[]
        }
    }

    getStrategyData(){
        this.setState({data:strgData.data})
    }

    componentDidMount(){
        this.getStrategyData();
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
                    <div className="item-cont">
                        <ul>
                            {data.map(v=>(
                                <StrategyItem key={v.vedioId} data={v}/>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default HotStrategy;