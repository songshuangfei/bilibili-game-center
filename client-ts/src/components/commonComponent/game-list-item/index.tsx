import * as React from 'react';
import {Link} from "react-router-dom";
import BlueBtn from "src/components/commonComponent/blue-btn";
import {ImgLoadingIcon,fiveStarIcon} from "src/components/icons" ;
import "./game-list-item.css";
import ImgOnlineSrc from '../img-online-src';

const GameScore =(props:{score:number})=>{
    const keys = [1,2,3,4,5];
    const fullStarNum = Math.floor(props.score/2);
    const half = props.score/2 - fullStarNum;
    return(
        <div className="game-score">
            <div>
                {
                    keys.map((v)=>{
                        if(v <= fullStarNum){
                            return <img key={v} src={fiveStarIcon.blue} alt=""/>
                        }
                        if(v === fullStarNum + 1 && half >= 0.5) {
                            return <img key={v} src={fiveStarIcon.half} alt=""/>
                        }
                        return <img key={v} src={fiveStarIcon.gray} alt=""/>
                    })
                }
            </div>
            <div>
                <span>{props.score}</span>
            </div>
        </div>
    )
}

const GameOrderNum =(props:{ordernum:number})=>{
    return(
        <div className="game-order-num">
            <span className="num">{props.ordernum}</span><span>人已预约</span>
        </div>
    )
}

const GameListItem = (props:{
    gameId:string,
    gameName:string,
    gameIconSrc:string,
    gameType:string,
    gameSize:string,
    ranking:number,
    score?:number,
    orderNum?:number,
    showIndex:boolean
})=>{
    const rankingColor = props.ranking<=3?"#22ade5":"#959595";
    return(
        <div className="common-game-list-item">
            <div className="content">
                {
                    props.showIndex?
                    <div className="ranking" style={{color:rankingColor}}>{props.ranking}</div>:
                    ""
                }
                <div className="icon-pic">
                    <div style={{backgroundImage:`url(${ImgLoadingIcon})`}}>
                        <ImgOnlineSrc src={props.gameIconSrc} alt=""/>
                    </div>
                    <Link to={props.gameId===""?"#":`/game?id=${props.gameId}`}/>
                </div>
                <div className="info">
                    <div className="game-name">{props.gameName}</div>
                    <div className="game-type-size">{props.gameType}/{props.gameSize}</div>
                    <div className="game-score-or-other">
                        {
                            props.score?<GameScore score={props.score}/>
                            :props.orderNum?<GameOrderNum ordernum={props.orderNum}/>:""
                        }
                    </div>
                    <Link to={props.gameId===""?"#":`/game?id=${props.gameId}`}/>
                </div>
                <div className="download-btn">
                    <div>
                        <BlueBtn width="4.2rem" height="2rem" name="下载" link="#"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GameListItem;