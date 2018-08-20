import React from "react"
import './style.less'
const GameItem =(props)=>{
    var data =props.data;
    var index = props.index+1;
    return(
        <div className="rank-item">
            <div className="rank-item-index" style={{color:index<=3?'#22ade5':'#959595'}}>
                {index}
            </div>
            <div className="rank-item-icon">
                <img src={data.icon} alt=""/>
            </div>
            <div class="rank-item-info">
                <div className="game-name">{data.name}</div>
                <div className="type-size">{`${data.type}/${data.size}`}</div>
            
            </div>

        </div>
    )
}

export default GameItem