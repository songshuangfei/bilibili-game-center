import * as React from "react";
import { Link } from "react-router-dom";
import "./game-icon.css";

const GameIcon = (props:{gameIconSrc:string,gameName:string,gameId:string})=> {
    const gameLink = (!props.gameId)?"#":`/game/${props.gameId}`;
    return (
        <div className="game-icon">
            <Link to={gameLink}>
                <img src={props.gameIconSrc} alt=""/>
            </Link>
            <div className="game-icon-name">{props.gameName}</div>
        </div>
    )
}

export default GameIcon;