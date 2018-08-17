import React,{ Component } from "react"
import Carousel from "./full-screen-carousel" 
import HotGame from "./hot-game" 
import HotStrategy from "./hot-strategy" 
import BookGame from "./book-game"
import NewGame from "./new-game"
import GameAdver from "./game-adver"

import "./style.less"

class Home extends Component {
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