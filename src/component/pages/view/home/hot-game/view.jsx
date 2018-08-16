import React,{ Component } from "react"
import { rightIcon } from "../icons"

import "./style.less"

// const moreUrl = "234234"//更多热门游戏api
//hot-game可装游戏个数配置在style.less

var gameData = {//热门游戏需求数据
    data:[
        {name:"命运-冠位指定",icon:"/gameicon/fgo.png",gameId:"001"},
        {name:"崩坏3",icon:"/gameicon/bh3.png",gameId:"002"},
        {name:"碧蓝航线",icon:"/gameicon/blhx.png",gameId:"003"},
        {name:"梦幻模拟战",icon:"/gameicon//mhmnz.png",gameId:"004"},
        {name:"食梦计划",icon:"/gameicon//smjh.png",gameId:"005"},
        {name:"站双：帕弥什",icon:"/gameicon//zs.png",gameId:"006"},
        {name:"辐射：避难所Online",icon:"/gameicon//fs.png",gameId:"007"},
    ]
}

class GameItem extends Component {
    render(){
        return(
            <li>
                <a href={`/game/${this.props.gameId}`}>
                    <img src={this.props.img} alt="img"/>
                </a>
                <p className="g-name">{this.props.name}</p>
                <div className="d-btn">
                    <a href={this.props.DlLink}>下载</a>
                </div>
            </li>
        )
    }
}

class HotGame extends Component {
    constructor(){
        super();
        this.state={
            gameListData:[]
        }
        this.getGameListData = this.getGameListData.bind(this)
    }

    getGameListData(){
        //axios
        // callback
        this.setState({gameListData:gameData.data})
    }
    componentDidMount(){
        this.getGameListData()
    }

    render(){
        var data = this.state.gameListData
        // console.log(data)
        return(
            <div className="hot-game">
                <div className="hot-game-title">
                    精品推荐
                    <a href="/rank"><img src={rightIcon} alt=""/></a>
                </div>
                <div className="hot-game-list">
                    <ul>
                        <div className="item-cont">
                            {
                                data.map((v)=>(
                                    <GameItem 
                                        key={v.gameId}
                                        img={v.icon} 
                                        name={v.name}
                                        gameId={v.gameId}
                                    />
                                ))
                            }
                        </div>
                    </ul>
                </div>
            </div>
        )
    }
}

export default HotGame;