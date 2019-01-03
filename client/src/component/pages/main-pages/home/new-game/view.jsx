import React,{ Component } from "react"
import { rightIcon } from "../../../icons"
import { Link } from "react-router-dom"
import { HorizontalScroll } from "../../../commonJsx"
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
            <Link to={`/game/${data.gameId}`}>
                <img src={data.icon} alt=""/>
            </Link>
            <p className="g-name">{data.name}</p>
        </li>
    )
}


class NewGame extends Component {
    constructor(){
        super();
        var cacheData = window.appDataCache.home.newGame
        this.state = {
            data:cacheData?cacheData:[]
        }
        this.getData = this.getData.bind(this);
    }
    getData(){
        var that =this;
        var CancelToken = axios.CancelToken;
        axios.get('/api/newgame', {
            cancelToken: new CancelToken(function executor(c) {
                // executor 函数接收一个 cancel 函数作为参数
                that.requestCancel = c;
            })
        })
        .then((res)=>{
            that.setState({data:res.data.newGame})
        })
        .catch((error)=>{
            console.log(error);
        });
    }

    componentDidMount(){
        if(this.state.data.length!==0){
            return;
        }
        this.getData();
    }

    componentWillUnmount(){
        if(this.requestCancel){
            this.requestCancel("<NewGame/>,组件卸载拦截请求数据");
        }
        window.appDataCache.home.newGame = this.state.newGame//设置缓存
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
                    <HorizontalScroll>
                        {data.map(v=>(
                            <GameItem key={v.gameId} data = {v}/>
                        ))}
                    </HorizontalScroll>
                </div>
                
            </div>
        )
    }
}

export default NewGame;