import * as React from "react";
import {rightWhiteIcon, sexIcon, lvIcon, UidIcon, YellowGood, ImgLoadingIcon} from "src/components/icons";
import {Link} from "react-router-dom"
import "./my-user-board.css"

class UserBoard extends React.Component {
    public render(){
        const userData = {
            coverSrc:"//file.suafe.cn/blgc/userback/default.jpg",
            follower:"21",
            following:"56",
            goodNum:"1423",
            headImgSrc:"//file.suafe.cn/blgc/userhead/2.jpg",
            lv:5,
            sex:"female",
            uid:"2537832",
            userName:"町玖",
        }

        const sexi = userData.sex==="female"?sexIcon.female:sexIcon.male;
        
        return(
            <div className="my-user-board">
                <div className="cover">
                    <img className="cover-img" src={userData.coverSrc} alt=""/>
                    <div className="bottom-linear-gradient"/>
                    <div className="user-info">
                        <div className="head-pic">
                            <div style={{backgroundImage:`url(${ImgLoadingIcon})`}}>
                                <img src={userData.headImgSrc} alt=""/>
                            </div>
                        </div>
                        <div className="info">
                            <div className="info-top">
                                <span className="user-name">{userData.userName}</span>
                                <img className="user-sex" src={sexi} alt=""/>
                                <img className="user-lv" src={lvIcon[userData.lv-1]} alt=""/>
                                <Link to={`/user/${userData.uid}`} className="user-detailed-btn">
                                    <img  src={rightWhiteIcon} alt=""/>
                                </Link>
                            </div>
                            <div className="info-bottom">
                                <img className="uid-icon" src={UidIcon} alt=""/>
                                <span className="uid">{userData.uid}</span>
                                <img className="good-num-icon" src={YellowGood} alt=""/>
                                <span className="good-num">{userData.goodNum}</span>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className="follow">
                    <div className="following">
                        <span className="title">关注</span><span className="num">{userData.following}</span>
                        <Link to={`/userfollowing/${userData.uid}`}/>
                    </div>
                    <div className="v-line"/>
                    <div className="follower">
                        <span className="title">粉丝</span><span className="num">{userData.follower}</span>
                        <Link to={`/userfollower/${userData.uid}`}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserBoard;