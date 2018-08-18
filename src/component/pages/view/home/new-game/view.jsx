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
        var cacheData = window.appDataCache.home.newGame
        this.state = {
            data:cacheData?cacheData:[]//缓存数据如果存在，就给给state
        }
        this.getDate = this.getDate.bind(this);
    }
    getDate(){
        // console.log("NewGame，无缓存,请求数据")

        var resData = gameData;
        window.appDataCache.home.newGame = resData.data
        //callback
        this.setState({data:gameData.data})
    }
    componentDidMount(){
        if(this.state.data.length!==0){
            // console.log("NewGame，缓存数据已经给state，不请求数据")
            return;
        }
        this.getDate();
    }
    render(){
        var data = this.state.data;
        return(
            <div className="new-game">
                <div className="new-game-title">
                    <span>新游推荐</span>
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