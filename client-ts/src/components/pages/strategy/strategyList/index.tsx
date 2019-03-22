import * as React from "react";
import {ImgLoadingIcon, eyeGrayIcon, goodGrayIcon} from"src/components/icons"
import "./strategy-list.css";
import { Link } from 'react-router-dom';
const StrategyItem = (props:{
    publisherHeadSrc:string,
    publisherName:string,
    strategyTitle:string,
    coverSrc:string,
    abstract:string,
    gameName:string,
    strategyType:string,
    readNum:string,
    goodNum:string,
    strategyId:string
})=>{
    return(
        <div className="strategy-item">
            <div className="publisher-info">
                <div className="head-pic" style={{backgroundImage:`url(${ImgLoadingIcon})`}}>
                    <img src={props.publisherHeadSrc} alt=""/>
                </div>
                <div className="publisher-name"><span>{props.publisherName}</span></div>
            </div>
            <div className="strategy-title">
                <span>{props.strategyTitle}</span>
            </div>
            <div className="strategy-cover" style={{backgroundImage:`url(${ImgLoadingIcon})`}}>
                <img src={props.coverSrc} alt=""/>
            </div>
            <p className="strategy-abstract">{props.abstract}</p>
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
            <Link to={`/strategyid/${props.strategyId}`}/>
        </div>
    )
}
class StrategyList extends React.Component {
    public render(){
        const data = [
            {
                publisherHeadSrc:"//file.suafe.cn/blgc/userhead/1.jpg",
                publisherName:"夏池萤",
                strategyTitle:"这是一个攻略标题",
                coverSrc:"//file.suafe.cn/blgc/strategy/cover/1.png",
                abstract:"这是一条攻略摘要，这是一条攻略摘要，这是一条攻略摘要，这是一条攻略摘要这是一条攻略摘要这是一条攻略摘要这是一条攻略摘要",
                gameName:"阴阳师",
                strategyType:"角色测评",
                readNum:"12.3k",
                goodNum:"876",
                strategyId:"11"
            },{
                publisherHeadSrc:"//file.suafe.cn/blgc/userhead/2.jpg",
                publisherName:"夏池萤",
                strategyTitle:"这是一个攻略标题",
                coverSrc:"//file.suafe.cn/blgc/strategy/cover/2.png",
                abstract:"这是一条攻略摘要，这是一条攻略摘要，这是一条攻略摘要，这是一条攻略摘要这是一条攻略摘要这是一条攻略摘要这是一条攻略摘要",
                gameName:"阴阳师",
                strategyType:"角色测评",
                readNum:"12.3k",
                goodNum:"876",
                strategyId:"12"
            },{
                publisherHeadSrc:"//file.suafe.cn/blgc/userhead/3.jpg",
                publisherName:"夏池萤",
                strategyTitle:"这是一个攻略标题",
                coverSrc:"//file.suafe.cn/blgc/strategy/cover/3.png",
                abstract:"这是一条攻略摘要，这是一条攻略摘要，这是一条攻略摘要，这是一条攻略摘要这是一条攻略摘要这是一条攻略摘要这是一条攻略摘要",
                gameName:"阴阳师",
                strategyType:"角色测评",
                readNum:"12.3k",
                goodNum:"876",
                strategyId:"13"
            },{
                publisherHeadSrc:"//file.suafe.cn/blgc/userhead/4.jpg",
                publisherName:"夏池萤",
                strategyTitle:"这是一个攻略标题",
                coverSrc:"//file.suafe.cn/blgc/strategy/cover/4.png",
                abstract:"这是一条攻略摘要，这是一条攻略摘要，这是一条攻略摘要，这是一条攻略摘要这是一条攻略摘要这是一条攻略摘要这是一条攻略摘要",
                gameName:"阴阳师",
                strategyType:"角色测评",
                readNum:"12.3k",
                goodNum:"876",
                strategyId:"14"
            },
        ]
        return(
            <div className="strategy-list">
                <div className="strategy-list-title">最新攻略</div>
                    {
                        data.map(v=>(
                            <StrategyItem
                                key={v.strategyId}
                                publisherHeadSrc={v.publisherHeadSrc}
                                publisherName={v.publisherName}
                                strategyTitle={v.strategyTitle}
                                coverSrc={v.coverSrc}
                                abstract={v.abstract}
                                gameName={v.gameName}
                                strategyType={v.strategyType}
                                readNum={v.readNum}
                                goodNum={v.goodNum}
                                strategyId={v.strategyId}
                            />
                        ))
                    }
               
            </div>
        )
    }
}

export default StrategyList;