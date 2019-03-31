import * as React from "react";
import { Link } from "react-router-dom";
import {ImgLoadingIcon} from "src/components/icons";
import "./game-icon.css";
import ImgOnlineSrc from '../img-online-src';

const GameIcon = (props:gameIconItemI)=> {
    const gameLink = (!props.gameId)?"#":`/game?id=${props.gameId}`;
    return (
        <div className="common-game-icon">
            <div className="icon" style={{backgroundImage:`url(${ImgLoadingIcon})`}}>
                <ImgOnlineSrc src={props.gameIconSrc} alt=""/>
                <Link to={gameLink} />
            </div>
            <div className="common-game-icon-name">{props.gameName}</div>
        </div>
    )
}

export default GameIcon;