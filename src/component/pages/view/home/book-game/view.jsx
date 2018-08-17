import React,{ Component } from "react"
import { rightIcon } from "../icons"

import "./style.less"
//列表最大长度在style.less配置，默认最长为12个

const gameData = {
    data:[
        {img:"/gamecover/1.jpg",game:"公主连接Re:Dive",gameId:"001",bookNum:"123123"},
        {img:"/gamecover/2.jpg",game:"魔法记录 魔法少女小圆",gameId:"002",bookNum:"872364"},
        {img:"/gamecover/3.jpg",game:"FGO",gameId:"003",bookNum:"784574"},
        {img:"/gamecover/4.jpg",game:"第五人格",gameId:"004",bookNum:"234234"},
    ]
}
const GameItem = (props)=>{
    var data = props.data
    return(
        <li>
            <a href={`/game/${data.gameId}`}>
                <img src={data.img} alt=""/>
            </a>
            <div className="info">
                <div className="game-name">{data.game}</div>
                <div className="book-num">{`${data.bookNum}人已经预约`}</div>
            </div>
            <div className="b-btn">预约</div>            
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
        this.setState({data:gameData.data})
    }

    componentDidMount(){
        this.getStrategyData();
    }

    render(){
        var data = this.state.data;
        return(
            <div className="book-game">
                <div className="book-game-title">
                    <span>预约中心</span>
                    <a href="/rank"><img src={rightIcon} alt=""/></a>
                </div>
                <div className="book-game-list">
                    <div className="item-cont">
                        <ul>
                            {data.map(v=>(
                               <GameItem key={v.gameId} data={v}/>
                            ))}

                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default HotStrategy;