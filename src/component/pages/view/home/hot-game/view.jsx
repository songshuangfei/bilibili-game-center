import React,{ Component } from "react"
import { rightIcon } from "../icons"

import "./style.less"

// const moreUrl = "234234"//更多热门游戏api
//hot-game可装游戏个数配置在style.less,默认最大为12个

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
    // console.log(this.props.gameId)

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
        var cacheData = window.appDataCache.home.hotGame
        this.state={
            data:cacheData?cacheData:[]//缓存数据如果存在，就给给state
        }
        this.getData = this.getData.bind(this)
    }

    getData(){
        //axios
        // console.log("HotGame，无缓存,请求数据")
        var resData = gameData;
        window.appDataCache.home.hotGame = resData.data//设置缓存
        // callback
        this.setState({data:resData.data})
    }
    componentDidMount(){
        if(this.state.data.length!==0){
            // console.log("HotGame，缓存数据已经给state，不请求数据")
            return;
        }
        this.getData()
    }

    render(){
        var data = this.state.data
        // console.log(data)
        return(
            <div className="hot-game">
                <div className="hot-game-title">
                    精品推荐
                    <a href="/rank"><img src={rightIcon} alt=""/></a>
                </div>
                <div className="hot-game-list">
                    <div className="item-cont">
                        <ul>
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
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default HotGame;