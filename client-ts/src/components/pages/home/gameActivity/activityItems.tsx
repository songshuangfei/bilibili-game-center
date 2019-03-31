import * as React from 'react';
import BlueBtn from "src/components/commonComponent/blue-btn";
import {starIcon} from "src/components/icons";
import {ImgLoadingIcon} from "src/components/icons";
import {Link} from "react-router-dom";
import "./home-game-activity.css";
import ImgOnlineSrc from 'src/components/commonComponent/img-online-src';

const ActivityItem = (props:homeActivityItemI)=>{
    const gameLink = props.gameId===""?"#":`/game/${props.gameId}`;
    return(
        <div className="home-activity-item">
            <div className="activity-cover" style={{backgroundImage:`url(${ImgLoadingIcon})`}}>
                <ImgOnlineSrc src={props.coverSrc} alt=""/>
                <Link to={gameLink}/>
            </div>
            <div className="game-download">
                <div className="game-name">
                    <div className="icon" style={{backgroundImage:`url(${ImgLoadingIcon})`}}>
                        <ImgOnlineSrc src={props.gameIconSrc} alt=""/>
                    </div>
                    <div>
                        <span>{props.gameName}</span>
                    </div>
                </div>
                <div className="d-btn">
                    <BlueBtn width="5rem" height="2rem" name="下载" link="#"/>
                </div>
            </div>
            <div className="game-info">
                <div className="activity-intro">
                    <span>{props.activityIntro}</span>
                </div>
                <div className="game-score">
                    <img src={starIcon} alt=""/>
                    <span>{props.gameScore}</span>
                </div>
            </div>
        </div>
    )
}

export default ActivityItem;