import * as React from "react";
import {rightWhiteIcon, sexIcon, lvIcon, UidIcon, YellowGood, ImgLoadingIcon} from "src/components/icons";
import {Link} from "react-router-dom"
import "./my-user-board.css"
import ImgOnlineSrc from 'src/components/commonComponent/img-online-src';
import { connect } from "react-redux";
import { setMyUserBoard } from "src/action/actions";

class UserBoard extends React.Component {
    public props:{item:userPageInfoI, setMyUserBoard:(item: userPageInfoI)=>void}

    public componentDidMount(){
        if(JSON.stringify(this.props.item) !== "{}"){
            return;
        }
        console.log("get home my user board")

        const that =this;
        setTimeout(() => {
            const userData:userPageInfoI = {
                coverSrc:"//file.suafe.cn/blgc/userback/default.jpg",
                follower:21,
                following:56,
                goodNum:1423,
                headImgSrc:"//file.suafe.cn/blgc/userhead/2.jpg",
                lv:5,
                sex:"female",
                uid:"2537832",
                userName:"夏池萤",
            }
            that.props.setMyUserBoard(userData);
        }, 3000);
    }

    public render(){
        return(
            <div className="my-user-board">
                <div className="cover">
                    <ImgOnlineSrc className="cover-img" src={this.props.item.coverSrc} alt=""/>
                    <div className="bottom-linear-gradient"/>
                    <div className="user-info">
                        <div className="head-pic">
                            <div style={{backgroundImage:`url(${ImgLoadingIcon})`}}>
                                <ImgOnlineSrc src={this.props.item.headImgSrc} alt=""/>
                            </div>
                        </div>
                        <div className="info">
                            <div className="info-top">
                                <span className="user-name">
                                    {this.props.item.userName?this.props.item.userName:"bilibili"}
                                </span>
                                <img className="user-sex" src={this.props.item.sex==="female"?sexIcon.female:sexIcon.male} alt=""/>
                                <img className="user-lv" src={ this.props.item.lv?lvIcon[this.props.item.lv-1]:lvIcon[0]} alt=""/>
                                <Link to={this.props.item.uid === ""?"#":`/user?id=${this.props.item.uid}`} className="user-detailed-btn">
                                    <img  src={rightWhiteIcon} alt=""/>
                                </Link>
                            </div>
                            <div className="info-bottom">
                                <img className="uid-icon" src={UidIcon} alt=""/>
                                <span className="uid">
                                    {this.props.item.uid?this.props.item.uid:"bilibili"}
                                </span>
                                <img className="good-num-icon" src={YellowGood} alt=""/>
                                <span className="good-num">
                                    {this.props.item.goodNum?this.props.item.goodNum:0}
                                </span>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className="follow">
                    <div className="following">
                        <span className="title">关注</span>
                        <span className="num">
                            {this.props.item.following?this.props.item.following:0}
                        </span>
                        <Link to={this.props.item.uid === ""?"#":`/following?id=${this.props.item.uid}`}/>
                    </div>
                    <div className="v-line"/>
                    <div className="follower">
                        <span className="title">粉丝</span>
                        <span className="num">
                            {this.props.item.follower?this.props.item.follower:0}
                        </span>
                        <Link to={this.props.item.uid === ""?"#":`/userfollower?id=${this.props.item.uid}`}/>
                    </div>
                </div>
            </div>
        )
    }
}


export default connect(
    (state:any) => ({
        item: state.myUserBoard
    }),(dispatch:any) => ({
        setMyUserBoard: (item:userPageInfoI) => dispatch(setMyUserBoard(item))
    })
)(UserBoard)