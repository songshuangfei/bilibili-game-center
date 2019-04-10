import * as React from "react";
import {ImgLoadingIcon, eyeGrayIcon, goodGrayIcon} from"src/components/icons"
import "./strategy-item.css";
import { Link } from 'react-router-dom';
import ImgOnlineSrc from '../img-online-src';

const StrategyItem = (props:strategyListItemI)=>{
    return(
        <div className="common-strategy-item">
            <div className="publisher-info">
                <div className="head-pic" style={{backgroundImage:`url(${ImgLoadingIcon})`}}>
                    <ImgOnlineSrc src={props.publisherHeadSrc} alt=""/>
                </div>
                <div className="publisher-name"><span>{props.publisherName}</span></div>
            </div>
            <div className="strategy-title">
                <span>{props.strategyTitle}</span>
            </div>
            <div className="strategy-cover" style={{backgroundImage:`url(${ImgLoadingIcon})`}}>
                <ImgOnlineSrc src={props.coverSrc} alt=""/>
            </div>
            <p className="strategy-abstract">
                <span>
                    {props.abstract}
                </span>
            </p>
            <div className="strategy-info">
                <div className="game-and-type">
                    <span>{props.strategyType}·{props.gameName}</span>
                </div>
                <div className="strategy-hot-info">
                    <img src={eyeGrayIcon} alt=""/>
                    <span>{props.readNum}</span>
                    <img className="good-icon" src={goodGrayIcon} alt=""/>
                    <span>{props.goodNum}</span>
                </div>
            </div>
            <Link to={props.strategyId===""?"#":`/strategyid?id=${props.strategyId}`}/>
        </div>
    )
}

export default StrategyItem;