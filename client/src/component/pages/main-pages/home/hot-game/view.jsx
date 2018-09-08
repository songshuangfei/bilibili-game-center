import React,{ Component } from "react"
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
        console.log("<HotGame/>,无缓存,请求数据")
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
            console.log("<HotGame/>,已经加载缓存数据,不请求数据")
            return;
        }
        this.getData()
    }

    componentWillUnmount(){
        if(this.requestCancel){//如果没执行过this.getData就不会有this。requestCancel。所以要判断
            this.requestCancel("<HotGame/>,组件卸载拦截请求数据");
        }
        window.appDataCache.home.hotGame = this.state.data//设置缓存

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