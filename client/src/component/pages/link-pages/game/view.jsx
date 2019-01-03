import React,{Component} from "react"
import {playIcon} from "../../icons"
import "./style.less"

class GamePage extends Component {
    render(){
        return(
            <div className="game-page">
                <div className="game-cover-out">
                    <img className="game-cover" src="/gamecover/3.jpg" alt=""/>
                    <div className="play">
                        <img src={playIcon} alt="play"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default GamePage;