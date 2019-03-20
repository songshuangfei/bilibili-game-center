import * as React from 'react';
import HorizontalScroll from "src/components/commonComponent/horizontal-scroll";
import LinkTitle from "src/components/commonComponent/link-title";
import {ImgLoadingIcon, eyeIcon, goodIcon} from "src/components/icons";
import {Link} from "react-router-dom"
import "./home-hot-strategy.css";

const HotStrategyItem = (props:{
    coverImgSrc:string,
    look:number,
    good:number,
    summary:string,
    gameName:string,
    strategyId:number,
})=>{
    return(
        <li className="home-hot-strategy-item">
            <div className="content">
                <div className="cover" style={{
                    backgroundImage:`url(${ImgLoadingIcon})`,
                }}>
                    <img className="cover-img" src={props.coverImgSrc} alt=""/>
                    <div className="hot-info">
                        <img src={eyeIcon} alt=""/>{props.look}
                        <img src={goodIcon} alt=""/>{props.good}
                    </div>
                </div>
                <div className="strategy-summary">
                    <p className="summary">{props.summary}</p>
                    <div className="game-name">{props.gameName}</div>
                </div>
                <Link to={`/strategy/${props.strategyId}`}/>
            </div>            
        </li>
    )
}

class HotStrategy extends React.Component {
    public render(){
        const games:Array<{coverSrc:string,look:number, good:number,summary:string,gameName:string,strategyId:number}> =[
            {coverSrc:"//file.suafe.cn/blgc/videocover/1.jpg",look:1032,good:20,summary:"【角色测评】这是一条攻略的摘要，这是一条攻略的摘要，",gameName:"崩坏三",strategyId:1},
            {coverSrc:"//file.suafe.cn/blgc/videocover/2.jpg",look:10,good:20,summary:"【角色测评】这是一条攻略的摘要，这是一条攻略的摘要，",gameName:"崩坏三",strategyId:2},
            {coverSrc:"//file.suafe.cn/blgc/videocover/3.jpg",look:12,good:20,summary:"【角色测评】这是一条攻略的摘要，这是一条攻略的摘要，",gameName:"崩坏三",strategyId:3},
            {coverSrc:"//file.suafe.cn/blgc/videocover/4.jpg",look:120,good:20,summary:"这是一条攻略的摘要，这是一条攻略的摘要，",gameName:"崩坏三",strategyId:4},
            {coverSrc:"//file.suafe.cn/blgc/videocover/1.jpg",look:130,good:20,summary:"这是一条攻略的摘要，这是一条攻略的摘要，",gameName:"崩坏三",strategyId:5},
            {coverSrc:"//file.suafe.cn/blgc/videocover/1.jpg",look:130,good:20,summary:"这是一条攻略的摘要。。。",gameName:"崩坏三",strategyId:6},
        ]
        return(
            <div>
				<LinkTitle title='热门攻略' link="/strategy" backgroundColor="none"/>
                <HorizontalScroll backgroundColor="none">
                    {
                        games.map(v=>(
                            <HotStrategyItem 
                                key={v.strategyId} 
                                coverImgSrc={v.coverSrc}
                                look={v.look} 
                                good={v.good}
                                summary={v.summary}
                                gameName={v.gameName}
                                strategyId = {v.strategyId}
                            />
                        ))
                    }
                    {/* {
                        [1,2,3,4,5,6,7,8,9].map((v)=>(
                            // <HotStrategyItem 
                            //     key={v} 
                            //     coverImgSrc="" 
                            //     look={0} 
                            //     good={0}
                            //     summary="bilibili"
                            //     gameName="bili"
                            // />
                        ))
                    } */}
                </HorizontalScroll>
            </div>
            
        )
    }
}

export default HotStrategy;
