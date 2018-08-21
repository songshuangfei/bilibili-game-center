import React from "react"
import {loadingIcon} from "../../icons"
import './style.less';

function failedAction(action){

}
const LoadingBoard = (props)=>{
    var action = props.action;
    var msg = props.msg;
    var show;
    console.log(msg)
    switch (msg) {
        case 'loading':
            show = <div className="loading-icon"> 
                    <img className="loading-rotate" src={loadingIcon} alt=""/>
                </div>
            break;
        case 'nomore':
            show = <div className="nomore">_(:зゝ∠)_世界的尽头~ </div>
            break;
        case 'failed':
            show = <div className="failed" onTouchEnd={()=>action()}>服务器离家出走中_(:зゝ∠)<br/>点击重试</div>
            break;
        default:
            break;
    }
    return(
        <div className="loaing-board">
            {show}
        </div>
    )
}

export default LoadingBoard;