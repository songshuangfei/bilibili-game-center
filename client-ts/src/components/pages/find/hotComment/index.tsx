import * as React from "react";
import LinkTitle from "src/components/commonComponent/link-title";
import HorizontalScroll from "src/components/commonComponent/horizontal-scroll";
import {CommaIcon, starIcon, starGrayIcon, ImgLoadingIcon} from "src/components/icons";
import {Link} from "react-router-dom"
import "./find-hot-comment.css";
import ImgOnlineSrc from 'src/components/commonComponent/img-online-src';
import { connect } from "react-redux";
import { setFindHotComment } from "src/action/actions"

const Stars =(props:{num:number})=>{
    const p = [1,2,3,4,5];
    return(
        <span>
            {p.map(v=>{
                if(v <= props.num){
                    return <img key={v} src={starIcon} alt=""/>

                } else {
                    return <img key={v} src={starGrayIcon} alt=""/>
                }
            })}
        </span>
    )
}

const CommentItem = (props:findHotCommentItemI)=>{
    return(
        <li className="comment-item">
            <div className="item-content">
                <div className="comma">
                    <img src={CommaIcon} alt=""/>
                </div>
                <p className="abstract">
                    <span>
                        {props.commentAbstract}
                    </span>
                </p>
                <div className="div-line"/>
                <div className="comment-info">
                    <div className="user-game">
                        <div className="user-score">
                            <div className="head" style={{backgroundImage:`url(${ImgLoadingIcon})`}}>
                                <ImgOnlineSrc src={props.commenterHeadSrc} alt=""/>
                            </div>
                            <div className="user-name"><span>{props.commenterName}</span></div>
                            <div className="score-star">
                                <Stars num={props.commentStarNum}/>
                            </div>
                        </div>
                        <div className="game-name">
                            <div><span>评价：{props.gameName}</span></div>
                        </div>
                    </div>
                    <div className="game-icon" style={{backgroundImage:`url(${ImgLoadingIcon})`}}>
                        <ImgOnlineSrc src={props.gameIconSrc} alt=""/>
                    </div>
                </div>
                <Link to={props.commentId === ""?"#":`/comment?id=${props.commentId}`}/>
            </div>
        </li>
    )
}

class HotComments extends React.Component {
    public props:{items:findHotCommentItemI[], setFindHotComment:(items: findHotCommentItemI[])=>void}
    public componentDidMount(){
        if(this.props.items.length !== 0){
            return;
        }
        // console.log("get home find hot comments")

        const that =this;
        setTimeout(() => {
            const data:findHotCommentItemI[] =[
                {
                    gameIconSrc:"//file.suafe.cn/blgc/gameicon/bh3.png",
                    commentAbstract:"这是一条评论的摘要，这是一条评论的摘要，这是一条评论的摘要，这是一条评论的摘要，这是一条评论的摘要，这是一条评论的摘要这是一条评论的摘要，这是一条评论的摘要",
                    commentId:"001",
                    commentStarNum:5,
                    commenterHeadSrc:"//file.suafe.cn/blgc/userhead/1.jpg",
                    commenterName:"夏池萤",
                    gameName:"崩坏三"
                },{
                    commentAbstract:"这是一条评论的摘要，这是一条评论的摘要，这是一条评论的摘要，这是一条评论的摘要",
                    commentId:"002",
                    commentStarNum:5,
                    commenterHeadSrc:"//file.suafe.cn/blgc/userhead/2.jpg",
                    commenterName:"跨越时空的思念",
                    gameIconSrc:"//file.suafe.cn/blgc/gameicon/fgo.png",
                    gameName:"FGO"
                },{
                    commentAbstract:"这是一条评论的摘要，这是一条评论的摘要，这是一条评论的摘要，这是一条评论的摘要",
                    commentId:"003",
                    commentStarNum:3,
                    commenterHeadSrc:"//file.suafe.cn/blgc/userhead/3.jpg",
                    commenterName:"子欲何",
                    gameIconSrc:"//file.suafe.cn/blgc/gameicon/mhmnz.png",
                    gameName:"梦幻模拟战"
                },{
                    commentAbstract:"这是一条评论的摘要，这是一条评论的摘要，这是一条评论的摘要，这是一条评论的摘要",
                    commentId:"004",
                    commentStarNum:3,
                    commenterHeadSrc:"//file.suafe.cn/blgc/userhead/3.jpg",
                    commenterName:"子欲何",
                    gameIconSrc:"//file.suafe.cn/blgc/gameicon/mhmnz.png",
                    gameName:"梦幻模拟战"
                },
            ]
            that.props.setFindHotComment(data);
        }, 3000);
    }
    public render(){
        return(
            <div className="find-hot-comment">
                <LinkTitle title="热门评论" link="/hotcomment" backgroundColor="none"/>
                <HorizontalScroll backgroundColor="none">
                    {
                        this.props.items.length === 0?
                        [1,2,3,4,5,6].map(v=>(
                            <CommentItem 
                                key={v}
                                commentId=""
                                commentAbstract="bilibili"
                                commenterHeadSrc=""
                                commenterName="bilibili"
                                commentStarNum={0}
                                gameIconSrc=""
                                gameName="bilibili"
                            />
                        )):
                        this.props.items.map(v=>(
                            <CommentItem 
                                key={v.commentId}
                                commentId={v.commentId}
                                commentAbstract={v.commentAbstract}
                                commenterHeadSrc={v.commenterHeadSrc}
                                commenterName={v.commenterName}
                                commentStarNum={v.commentStarNum}
                                gameIconSrc={v.gameIconSrc}
                                gameName={v.gameName}
                            />
                        ))
                    }
                </HorizontalScroll>
            </div>
        )
    }
}

export default connect(
    (state:any) => ({
        items: state.findHotComment
    }),(dispatch:any) => ({
        setFindHotComment: (items:findHotCommentItemI[]) => dispatch(setFindHotComment(items))
    })
)(HotComments)