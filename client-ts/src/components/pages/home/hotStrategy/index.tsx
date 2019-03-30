import * as React from 'react';
import HorizontalScroll from "src/components/commonComponent/horizontal-scroll";
import LinkTitle from "src/components/commonComponent/link-title";
import {ImgLoadingIcon, eyeIcon, goodIcon} from "src/components/icons";
import {Link} from "react-router-dom";
import "./home-hot-strategy.css";
import { setHomeHotStrategy } from "src/action/actions";
import { connect } from 'react-redux';
import ImgOnlineSrc from 'src/components/commonComponent/img-online-src';

const HotStrategyItem = (props:homeStrategyItemI)=>{
    return(
        <li className="home-hot-strategy-item">
            <div className="content">
                <div className="cover" style={{
                    backgroundImage:`url(${ImgLoadingIcon})`,
                }}>
                    <ImgOnlineSrc className="cover-img" src={props.coverImgSrc} alt=""/>
                    <div className="hot-info">
                        <div><img src={eyeIcon} alt=""/></div>
                        <div><span>{props.look}</span></div>
                        <div><img src={goodIcon} alt=""/></div>
                        <div><span>{props.good}</span></div>
                    </div>
                </div>
                <div className="strategy-summary">
                    <p className="summary">
                        <span>
                            {props.summary}
                        </span>
                    </p>
                    <div className="game-name">{props.gameName}</div>
                </div>
                <Link to={`/strategy/${props.strategyId}`}/>
            </div>            
        </li>
    )
}

class HotStrategy extends React.Component {
    public props: {items:homeStrategyItemI[],setHomeHotStrategy:(items:homeStrategyItemI[]) =>any};

    public componentDidMount(){
        if(this.props.items.length!==0){
            return;
        }
        console.log("get home hot startegy")

        const strategys:homeStrategyItemI[] =[
            {coverImgSrc:"//file.suafe.cn/blgc/videocover/1.jpg",look:1032,good:20,summary:"【角色测评】这是一条攻略的摘要，这是一条攻略的摘要，",gameName:"崩坏三",strategyId:1},
            {coverImgSrc:"//file.suafe.cn/blgc/videocover/2.jpg",look:10,good:20,summary:"【角色测评】这是一条攻略的摘要，这是一条攻略的摘要，",gameName:"崩坏三",strategyId:2},
            {coverImgSrc:"//file.suafe.cn/blgc/videocover/3.jpg",look:12,good:20,summary:"【角色测评】这是一条攻略的摘要，这是一条攻略的摘要，",gameName:"崩坏三",strategyId:3},
            {coverImgSrc:"//file.suafe.cn/blgc/videocover/4.jpg",look:120,good:20,summary:"这是一条攻略的摘要，这是一条攻略的摘要，",gameName:"崩坏三",strategyId:4},
            {coverImgSrc:"//file.suafe.cn/blgc/videocover/1.jpg",look:130,good:20,summary:"这是一条攻略的摘要，这是一条攻略的摘要，",gameName:"崩坏三",strategyId:5},
            {coverImgSrc:"//file.suafe.cn/blgc/videocover/1.jpg",look:130,good:20,summary:"这是一条攻略的摘要。。。",gameName:"崩坏三",strategyId:6},
        ]
        const that =this;
        setTimeout(() => {
            that.props.setHomeHotStrategy(strategys);
        }, 3000);
    }
    public render(){
        
        return(
            <div>
				<LinkTitle title='热门攻略' link="/strategy" backgroundColor="none"/>
                <HorizontalScroll backgroundColor="none">
                    {
                        this.props.items.length === 0?
                        [1,2,3,4,5,6,7,8,9].map((v)=>(
                            <HotStrategyItem 
                                key={v} 
                                coverImgSrc="" 
                                look={0} 
                                good={0}
                                summary="bilibili"
                                gameName="bili"
                                strategyId={v}
                            />
                        )):
                        this.props.items.map(v=>(
                            <HotStrategyItem 
                                key={v.strategyId} 
                                coverImgSrc={v.coverImgSrc}
                                look={v.look} 
                                good={v.good}
                                summary={v.summary}
                                gameName={v.gameName}
                                strategyId = {v.strategyId}
                            />
                        ))
                    }
                </HorizontalScroll>
            </div>
            
        )
    }
}

export default connect(
    (state:any)=>({
        items:state.homeHotStrategy
    }),(dispatch:any)=>({
        setHomeHotStrategy:(items:homeStrategyItemI[]) => dispatch(setHomeHotStrategy(items))
    })
)(HotStrategy);
