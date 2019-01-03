import React,{ Component } from "react"
import { Link } from "react-router-dom"
import { rightIcon } from "../../../icons"
import { HorizontalScroll } from "../../../commonJsx"
import axios from 'axios';

import "./style.less"

//hot-game可装游戏个数配置在style.less,默认最大为12个


//前端单条数据要求
/*
    {name:"命运-冠位指定",icon:"/gameicon/fgo.png",gameId:"001"}
*/

class GameItem extends Component {
    render(){
        return(
            <li>
                <Link to={`/game/${this.props.gameId}`}>
                    <img src={this.props.img} alt="img"/>
                </Link>
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
        var cacheData = window.appDataCache.home.hotGame;
        this.state={
            data: cacheData?cacheData:[]    
        }
        this.getData = this.getData.bind(this);
    }

    getData(){
        var that = this;
        var CancelToken = axios.CancelToken;
        axios.get('/api/hotgame',{
            cancelToken: new CancelToken(function executor(c) {
                // executor 函数接收一个 cancel 函数作为参数
                that.requestCancel = c;
            })
        })
        .then((res)=>{
            that.setState({data:res.data.hotGame})
        })
        .catch((error)=>{
            console.log(error);
        });
    }
    componentDidMount(){
        if(this.state.data.length!==0){
            return;
        }
        this.getData()
    }

    componentWillUnmount(){
        if(this.requestCancel){
            this.requestCancel("<HotGame/>,组件卸载拦截请求数据");
        }
        window.appDataCache.home.hotGame = this.state.data;
    }

    render(){
        var data = this.state.data;
        return(
            <div className="hot-game">
                <div className="hot-game-title">
                    精品推荐
                    <Link to="/rank"><img src={rightIcon} alt=""/></Link>
                </div>
                <div className="hot-game-list">
                    <HorizontalScroll>
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
                    </HorizontalScroll>
                </div>
            </div>
        )
    }
}

export default HotGame;