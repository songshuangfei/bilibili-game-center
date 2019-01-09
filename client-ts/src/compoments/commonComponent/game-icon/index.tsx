import * as React from "react";
import { Link } from "react-router-dom";
import "./game-icon.css";

const GameIcon = (props:{gameIconUrl:string,gameName:string,gameId:string})=> {
    return (
        <div className="game-icon">
            <Link to={`/game/${props.gameId}`}>
                <img src={props.gameIconUrl} alt=""/>
            </Link>
            <div className="game-icon-name">{props.gameName}</div>
        </div>
    )
}

export default GameIcon;