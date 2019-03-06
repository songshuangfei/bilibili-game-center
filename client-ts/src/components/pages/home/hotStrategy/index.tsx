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
                    <div className="summary">{props.summary}</div>
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
            {coverSrc:"http://192.168.1.101:8000/videocover/1.jpg",look:1032,good:20,summary:"【角色测评】爱就爱房价很贵的计划，嘎达",gameName:"崩坏三",strategyId:1},
            {coverSrc:"http://192.168.1.101:8000/videocover/2.jpg",look:10,good:20,summary:"【角色测评】爱就爱房价很贵的计划，嘎达",gameName:"崩坏三",strategyId:2},
            {coverSrc:"http://192.168.1.101:8000/videocover/3.jpg",look:12,good:20,summary:"【角色测评】爱就爱房价很贵的计划，嘎达",gameName:"崩坏三",strategyId:3},
            {coverSrc:"http://192.168.1.101:8000/videocover/4.jpg",look:120,good:20,summary:"【角色测评】爱就爱房价很贵的计划，嘎达",gameName:"崩坏三",strategyId:4},
            {coverSrc:"http://192.168.1.101:8000/videocover/1.jpg",look:130,good:20,summary:"【角色测评】爱就爱房价很贵的计划，嘎达",gameName:"崩坏三",strategyId:5},
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
