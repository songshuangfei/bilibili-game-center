import React,{ Component } from "react"
import { Icon } from "antd"

import "./style.less"

// const moreUrl = "234234"//更多热门游戏api

var gameData = {//热门游戏需求数据
    data:[
        {name:"game11423423",icon:"/img/1.jpg",DlLink:"213",pageLink:"213"},
        {name:"game2",icon:"/img/2.jpg",DlLink:"213",pageLink:"213"},
        {name:"game3",icon:"/img/3.jpg",DlLink:"213",pageLink:"213"},
        {name:"game4",icon:"/img/1.jpg",DlLink:"213",pageLink:"213"},
        {name:"game5",icon:"/img/2.jpg",DlLink:"213",pageLink:"213"},
    ]
}

const GameItem = (props) => {
    return(
        <li>
            <a href={props.pageLink}>
                <img src={props.img} alt="img"/>
            </a>
            <p className="g-name">{props.name}</p>
            <div className="d-btn">
                <a href={props.DlLink}>下载</a>
            </div>
        </li>
    )
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
        console.log(data)
        return(
            <div className="hot-game">
                <div className="hot-game-title">
                    <div>精品推荐</div>
                    <Icon type="right"/>
                </div>
                <div className="hot-game-list">
                    <ul>
                        <li className="item-cont">
                            {
                                data.map((v,i)=>(
                                    <GameItem 
                                        key={i}
                                        img={v.icon} 
                                        to={v.pageLink} 
                                        name={v.name}
                                        DlLink={v.DlLink}
                                    />
                                ))
                            }
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default HotGame;