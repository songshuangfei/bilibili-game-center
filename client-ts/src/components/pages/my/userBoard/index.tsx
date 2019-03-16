import * as React from "react";
import {rightWhiteIcon, sexIcon, lvIcon,UidIcon,YellowGood} from "src/components/icons";
import {Link} from "react-router-dom"
import "./my-user-board.css"

class UserBoard extends React.Component {
    public render(){
        return(
            <div className="my-user-board">
                <div className="cover">
                    <img className="cover-img" src={"//file.suafe.cn/blgc/userback/default.jpg"} alt=""/>
                    <div className="bottom-linear-gradient"/>
                    <div className="user-info">
                        <div className="head-pic">
                            <img src={"//file.suafe.cn/blgc/userhead/2.jpg"} alt=""/>
                        </div>
                        <div className="info">
                            <div className="info-top">
                                <span className="user-name">{"町玖"}</span>
                                <img className="user-sex" src={sexIcon.female} alt=""/>
                                <img className="user-lv" src={lvIcon[4]} alt=""/>
                                <Link to={`/user/${"001"}`} className="user-detailed-btn">
                                    <img  src={rightWhiteIcon} alt=""/>
                                </Link>
                            </div>
                            <div className="info-bottom">
                                <img className="uid-icon" src={UidIcon} alt=""/>
                                <span className="uid">{"4325120"}</span>
                                <img className="good-num-icon" src={YellowGood} alt=""/>
                                <span className="good-num">{"120"}</span>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className="follow">
                    <div className="following">
                        <span className="title">关注</span><span className="num">{55}</span>
                    </div>
                    <div className="v-line"/>
                    <div className="follower">
                        <span className="title">粉丝</span><span className="num">{20}</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserBoard;