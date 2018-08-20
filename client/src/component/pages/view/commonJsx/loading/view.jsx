import React,{ Component } from "react"
import './style.less';

const LoadingBoard = (props)=>{
    return(
        <div className="loaing-board">
        loading
            {/* {
                isRequestFalied?
                <div className="rq-failed" onTouchEnd={this.touchToRefresh}>
                    服务器离家出走中_(:зゝ∠)<br/>点击刷新
                </div>:
                <div className="loading">{
                    this.state.HaveAnyMore?
                    <img src={loadingIcon} alt="loading"/>:
                    "_(:зゝ∠)_世界的尽头~ " }
                </div>
            } */}
        </div>
    )
}

export default LoadingBoard;