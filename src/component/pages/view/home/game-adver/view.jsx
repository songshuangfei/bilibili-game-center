import React,{ Component } from "react"
import { starIcon } from "../icons"

import "./style.less"

const adverData = {
    data:[
        {name:"大王不高兴",activityimg:"/gamenews/1.png",gameIcon:"/gameicon/dwbgx.png",gameId:"010",score:"9.8",info:"全新回合概念制手游《大王不高兴》换了启程",isNewGame:true},
        {name:"崩坏3",activityimg:"/gamenews/2.png",gameIcon:"/gameicon/bh3.png",gameId:"008",score:"8.8",info:"\"空之律者\"女王降临",isNewGame:false},
        {name:"天天躲猫猫",activityimg:"/gamenews/3.png",gameIcon:"/gameicon/ttdmm.png",gameId:"067",score:"9.8",info:"寻找调皮可爱的小猫咪,一起来云吸猫吧~",isNewGame:false},
        {name:"妈妈把我的游戏藏起来了3",activityimg:"/gamenews/4.png",gameIcon:"/gameicon/mmbwyxcqll.png",gameId:"108",score:"9.5",info:"妈妈又把你游戏藏起来了",isNewGame:true},
        {name:"艾比",activityimg:"/gamenews/5.png",gameIcon:"/gameicon/ab.png",gameId:"0028",score:"8.3",info:"AI,传递内心的语言",isNewGame:false},
    ]
}

const AdverItem= (props)=>{
    var data = props.data;
    return(
       <div className="adver-item">
            <img src={data.activityimg} alt=""/>
            <div className="info">
                <div className="top">
                    {data.name}
                    <div className="t-right">
                        <div className="score">
                            <img src={starIcon} alt=""/>
                            {data.score}
                        </div>
                        <div className="v-line"></div>
                        <img className="icon" src={data.gameIcon} alt=""/>
                    </div>
                </div>
                <div className="bottom">
                <div className="b-left">
                    {data.info}
                    <span>
                        {data.isNewGame?"新游预约":" "}
                    </span>
                </div>
                </div>
            </div>
       </div> 
    )
}

class GameAdver extends Component {
    constructor(){
        super();
        this.state = {
            page:1,
            pageSize:5,
            data:[],
        }
        this.getData = this.getData.bind(this);
    }

    getData(){
        var oldData = this.state.data;
        //ajax
        //callback
        var getedData = adverData.data;
        var newData = [...oldData,...getedData] 
        this.setState({data:newData})
    }

    componentDidMount(){
        this.getData();
    }

    render(){
        var data = this.state.data
        return(
            <div className="game-adver">
                {data.map(v=>(
                    <AdverItem key={v.gameId} data={v} />
                ))}
                <div></div>
            </div>
        )
    }
}

export default GameAdver;