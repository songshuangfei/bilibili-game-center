import React from "react";
import {fiveStarIcon} from "../../../icons" 
import './style.less';
const GameItem =(props)=>{
    var data =props.data;
    var index = props.index+1;
    var iconStar = [];
    for (let i = 0, bluenum = Math.floor(data.score/2 ) ;i < 5; i++){
        if(i<bluenum){
            iconStar.push(fiveStarIcon.blue);
        }
        if(i > bluenum)
            iconStar.push(fiveStarIcon.gray)
        if(i===bluenum){
            var halfValue = data.score%2; 
            if(halfValue === 0)
                iconStar.push(fiveStarIcon.gray)
            else 
                iconStar.push(fiveStarIcon.half)
        }
        
    }

    
    return(
        <div className="rank-item">
            <div className="rank-item-index" style={{color:index<=3?'#22ade5':'#959595'}}>
                {index}
            </div>
            <div className="rank-item-icon">
                <img src={data.icon} alt=""/>
            </div>
            <div className="rank-item-info">
                <div className="game-name">{data.name}</div>
                <div className="type-size">
                    {`${data.type}/${data.size}`}
                    <div className="btn">{props.isDownload?"下载":"预约"}</div>
                </div>
                <div className="score">
                    {iconStar.map((v,i)=>(<img src={v} key={i}alt="star"/>))}
                    <span>{data.score}</span>
                </div>
            </div>
        </div>
    )
}

export default GameItem