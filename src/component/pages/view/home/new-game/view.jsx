import React,{ Component } from "react"
import { rightIcon } from "../icons"

import "./style.less"

const gameData = {
    data:[
        {name:"梦幻模拟战",icon:"/gameicon//mhmnz.png",gameId:"004"},
        {name:"食梦计划",icon:"/gameicon//smjh.png",gameId:"005"},
        {name:"站双：帕弥什",icon:"/gameicon//zs.png",gameId:"006"},
        {name:"辐射：避难所Online",icon:"/gameicon//fs.png",gameId:"007"},
        {name:"命运-冠位指定",icon:"/gameicon/fgo.png",gameId:"001"},
        {name:"崩坏3",icon:"/gameicon/bh3.png",gameId:"002"},
        {name:"碧蓝航线",icon:"/gameicon/blhx.png",gameId:"003"},
    ]
}


const GameItem = (props)=>{
    var data = props.data;
    return(
        <li>
            <a href={`/game/${data.gameId}`}>
                <img src={data.icon} alt=""/>
            </a>
            <p className="g-name">{data.name}</p>
        </li>
    )
}


class NewGame extends Component {
    constructor(){
        super();
        this.state = {
            data:[]
        }
        this.getDate = this.getDate.bind(this);
    }
    getDate(){
        //callback
        this.setState({data:gameData.data})
    }
    componentDidMount(){
        this.getDate();
    }
    render(){
        var data = this.state.data;
        return(
            <div className="new-game">
                <div className="new-game-title">
                    新游推荐
                    <a href="/"><img src={rightIcon} alt=""/></a>
                </div>
                <div className="new-game-list">
                    <div className="game-cont">
                        <ul>
                            {data.map(v=>(
                                <GameItem key={v.gameId} data = {v}/>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewGame;