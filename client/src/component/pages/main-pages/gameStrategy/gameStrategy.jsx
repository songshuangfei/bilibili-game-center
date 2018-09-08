import React,{ Component } from "react"
import HotGameStrg from "./hot-game-strg"
import NewStrategy from "./new-strategy"
import "./style.less"

class GameStrategy extends Component {
    componentDidMount(){
    var st = window.appDataCache.strategy.st
        if(st) {
            document.documentElement.scrollTop = document.body.scrollTop = st//设置页面位置
        }
    }

    componentWillUnmount(){
        var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
        window.appDataCache.strategy.st = scrollTop;//保存页面位置
        document.documentElement.scrollTop = document.body.scrollTop = 0;//设置为0，防止切换到其他页面后不在顶端
    }
    render(){
        return(
            <div className="strategy">
                <HotGameStrg />
                <NewStrategy/>
            </div>
        )
    }
}

export { GameStrategy }