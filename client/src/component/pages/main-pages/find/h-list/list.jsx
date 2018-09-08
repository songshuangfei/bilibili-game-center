import React from "react"
import { rightIcon } from "../../../icons"
import { HorizontalScroll } from "../../../commonJsx"
import "./style.less"

//前端单条数据要求
/*
        {name:"梦幻模拟战",icon:"/gameicon//mhmnz.png",gameId:"004"}
*/

const GameItem = (props)=>{
    var data = props.data;
    return(
        <li>
            <a href={`/game/${data.gameId}`}>
                <img src={data.icon} alt=""/>
            </a>
            <p className="g-name">{data.name}</p>
        </li>
    )
}


const HList = (props)=> {
    var data = props.data;
    return(
        <div className="h-list">
            <div className="h-list-title">
                <span>{props.name}</span>
                <a href="/"><img src={rightIcon} alt=""/></a>
            </div>
            <div className="game-list">
                <HorizontalScroll>
                    {data.map(v=>(
                        <GameItem key={v.gameId} data = {v}/>
                    ))}
                </HorizontalScroll>
            </div>
            
        </div>
    )
}

export default HList;