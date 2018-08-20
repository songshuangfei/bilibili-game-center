import React,{ Component } from "react"
import { rightIcon } from "../icons"
import axios from 'axios';
import "./style.less"

//前端单条数据要求
/*
        {name:"梦幻模拟战",icon:"/gameicon//mhmnz.png",gameId:"004"}
*/

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
        console.log("<NewGame/>,无缓存,请求数据")
        var that =this;
        var CancelToken = axios.CancelToken;
        axios.get('/api/newgame', {
            cancelToken: new CancelToken(function executor(c) {
                // executor 函数接收一个 cancel 函数作为参数
                that.requestCancel = c;
            })
        })
        .then((res)=>{
            window.appDataCache.home.newGame = res.data.newGame//设置缓存
            that.setState({data:res.data.newGame})
        })
        .catch((error)=>{
            console.log(error);
        });
    }

    componentDidMount(){
        if(this.state.data.length!==0){
            console.log("<NewGame/>,已经加载缓存数据,不请求数据")
            return;
        }
        this.getDate();
    }

    componentWillUnmount(){
        if(this.requestCancel){//如果没执行过this.getData就不会有this.requestCancel。所以要判断
            this.requestCancel("<NewGame/>,组件卸载拦截请求数据");
        }
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