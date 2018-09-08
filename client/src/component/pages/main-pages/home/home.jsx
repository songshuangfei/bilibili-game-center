import React,{ Component } from "react"
import Carousel from "./full-screen-carousel" 
import HotGame from "./hot-game" 
import HotStrategy from "./hot-strategy" 
import BookGame from "./book-game"
import NewGame from "./new-game"
import GameAdver from "./game-adver"

import "./style.less"



class Home extends Component {
    componentWillUnmount(){
        var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
        window.appDataCache.home.st = scrollTop;//保存页面位置
        document.documentElement.scrollTop = document.body.scrollTop = 0;//设置为0，防止切换到其他页面后不在顶端
    }

    componentDidMount(){
        var st = window.appDataCache.home.st
        if(st){
            document.documentElement.scrollTop = document.body.scrollTop = st//设置页面位置
        }
    }
   
    render(){
        return(
            <div className="home">
                <Carousel/>
                <HotGame/>
                <HotStrategy/>
                <BookGame/>
                <NewGame/>
                <GameAdver/>
            </div>
        )
    }
}

export { Home }