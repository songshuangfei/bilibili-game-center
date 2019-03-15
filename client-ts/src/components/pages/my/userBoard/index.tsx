import * as React from "react";
import "./my-user-board.css"

class UserBoard extends React.Component {
    public render(){
        return(
            <div className="my-user-board">
                <div className="cover">
                    <img src="//file.suafe.cn/blgc/userback/default.jpg" alt=""/>
                    <div className="bottom-linear-gradient"/>
                    <div className="user-info">
                        <div className="head-pic">
                            <img src="//file.suafe.cn/blgc/userhead/2.jpg" alt=""/>
                        </div>
                        <div className="info">12</div>
                    </div>
                </div>
                <div className="follow">
                    <div className="following">1</div>
                    <div className="v-line"/>
                    <div className="follower">2</div>
                </div>
            </div>
        )
    }
}

export default UserBoard;