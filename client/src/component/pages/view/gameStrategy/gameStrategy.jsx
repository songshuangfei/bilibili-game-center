import React,{ Component } from "react"
import HotGameStrg from "./hot-game-strg"
import NewStrategy from "./new-strategy"
import "./style.less"

class GameStrategy extends Component {
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