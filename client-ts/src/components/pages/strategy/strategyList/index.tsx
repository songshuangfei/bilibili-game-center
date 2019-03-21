import * as React from "react";
// import {eyeGrayIcon,goodGrayIcon} from "../../../icons"
import "./strategy-list.css";
const StrategyItem = (props:{
    publisherHeadSrc:string,
    publisherName:string,
})=>{
    return(
        <div className="strategy-item">
            <div className="publisher-info">2</div>
            <div className="strategy-titlr">2</div>
            <div className="strategy-cover">2</div>
            <div className="strategy-abstract">2</div>
            <div className="strategy-info">2</div>
        </div>
    )
}
class StrategyList extends React.Component {
    public render(){
        return(
            <div className="strategy-list">
                <div className="strategy-list-title">最新攻略</div>
                <StrategyItem
                    publisherHeadSrc="21"
                    publisherName="ss"
                />
                <StrategyItem
                    publisherHeadSrc="21"
                    publisherName="ss"
                />
            </div>
        )
    }
}

export default StrategyList;