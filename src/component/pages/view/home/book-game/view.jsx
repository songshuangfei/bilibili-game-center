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

class BookGame extends Component {
    constructor(){
        super();
        var cacheData = window.appDataCache.home.bookGame
        this.state = {
            data:cacheData?cacheData:[] //缓存数据如果存在，就给给state
        }
        this.getData = this.getData.bind(this)
    }

    getData(){
        // console.log("BookGame 无缓存请求数据")
        var resData = gameData;
        window.appDataCache.home.bookGame = resData.data;//获取缓存数据后将其储存
        this.setState({data:resData.data})
    }

    componentDidMount(){
        if(this.state.data.length!==0){
            // console.log("BookGame缓存数据已经给state，不请求数据")
            return;
        }
        this.getData();//第一次挂载，不存在缓存数据，下载数据，并设置到全局缓存
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

export default BookGame;