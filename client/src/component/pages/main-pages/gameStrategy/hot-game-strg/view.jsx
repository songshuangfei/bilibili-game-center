import React,{ Component } from "react"
import { HorizontalScroll } from "../../../commonJsx"
import axios from "axios"
import "./style.less"


class HotGameStrg extends Component {
    constructor(){
        super();
        var cacheData = window.appDataCache.strategy.hotgame;
        this.state={
            data:cacheData?cacheData:[],
        }
    }
    
    getData(){
        var that =this;
        var CancelToken = axios.CancelToken;
        axios.get('/api/strategy/hotgame', {
            cancelToken: new CancelToken(function executor(c) {
                // executor 函数接收一个 cancel 函数作为参数
                that.requestCancel = c;
            })
        })
        .then((res)=>{
            that.setState({data:res.data.hotgame})
            // console.log(res)
        })
        .catch((error)=>{
            console.log(error);
        });
    }
    componentDidMount(){
        if(this.state.data.length !== 0){
            console.log("<HotGameStrg/>加载缓存");
            return;
        }
        this.getData();

       
    }

    componentWillUnmount(){
        if(this.requestCancel){//如果没执行过this.getData就不会有this。requestCancel。所以要判断
            this.requestCancel("<HotGameStrg/>组件卸载拦截请求数据");
        }
        window.appDataCache.strategy.hotgame = this.state.data//设置缓存
    }
    
    render(){
        var data = this.state.data;
        return(
            <HorizontalScroll>
                {data.map((v,i)=>(
                    <li className="strg-hot-game-item" key={v.gameId}>
                        <img src={v.img} alt=""/>
                    </li>
                ))}
            </HorizontalScroll>
        )
    }
}

export default HotGameStrg;
