import React,{ Component } from "react"
import { rightIcon } from "../icons"

import "./style.less"

class HotStrategy extends Component {
    render(){
        return(
            <div className="hot-strategy">
                <div className="hot-strategy-title">
                    热门攻略
                    <a href="/rank"><img src={rightIcon} alt=""/></a>
                </div>
                <div className="hot-strategy-list">
                    <ul>
                        <div className="item-cont">
                            
                        </div>
                    </ul>
                </div>
            </div>
        )
    }
}

export default HotStrategy;