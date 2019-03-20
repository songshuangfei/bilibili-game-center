import * as React from "react";
import LinkTitle from "src/components/commonComponent/link-title";
import HorizontalScroll from "src/components/commonComponent/horizontal-scroll";
import {CommaIcon, starIcon, starGrayIcon} from "src/components/icons";
import {Link} from "react-router-dom"
import "./find-hot-comment.css";

const Stars =(props:{num:number})=>{
    const p = [1,2,3,4,5];
    return(
        <span>
            {p.map(v=>{
                if(v <= props.num){
                    return <img src={starIcon} alt=""/>

                } else {
                    return <img src={starGrayIcon} alt=""/>
                }
            })}
        </span>
    )
}
const CommentItem = (props:{
    commentId:string,
    commentAbstract:string,
    commenterHeadSrc:string,
    commenterName:string,
    commentScore:number,
    gameName:string,
    gameIconSrc:string,

})=>{
    return(
        <li className="comment-item">
            <div className="item-content">
                <div className="comma">
                    <img src={CommaIcon} alt=""/>
                </div>
                <p className="abstract">
                    {props.commentAbstract}
                </p>
                <div className="div-line"/>
                <div className="comment-info">
                    <div className="user-game">
                        <div className="user-score">
                            <div className="head"><img src={props.commenterHeadSrc} alt=""/></div>
                            <div className="user-name"><span>{props.commenterName}</span></div>
                            <div className="score-star">
                                <Stars num={props.commentScore}/>
                            </div>
                        </div>
                        <div className="game-name">
                            <div><span>评价：{props.gameName}</span></div>
                        </div>
                    </div>
                    <div className="game-icon">
                        <img src={props.gameIconSrc} alt=""/>
                    </div>
                </div>
                <Link to={`/comment/${props.commentId}`}/>
            </div>
        </li>
    )
}
class HotComments extends React.Component {
    public render(){
        const data =[
            {
                commentAbstract:"这是一条评论的摘要，这是一条评论的摘要，这是一条评论的摘要，这是一条评论的摘要",
                commentId:"001",
                commentScore:5,
                commenterHeadSrc:"//file.suafe.cn/blgc/userhead/1.jpg",
                commenterName:"夏池萤",
                gameIconSrc:"//file.suafe.cn/blgc/gameicon/bh3.png",
                gameName:"崩坏三"
            },{
                commentId:"002",
                commentAbstract:"这是一条评论的摘要，这是一条评论的摘要，这是一条评论的摘要，这是一条评论的摘要",
                commenterHeadSrc:"//file.suafe.cn/blgc/userhead/2.jpg",
                commenterName:"跨越时空的思念",
                commentScore:5,
                gameIconSrc:"//file.suafe.cn/blgc/gameicon/fgo.png",
                gameName:"FGO"
            },{
                commentId:"003",
                commentAbstract:"这是一条评论的摘要，这是一条评论的摘要，这是一条评论的摘要，这是一条评论的摘要",
                commenterHeadSrc:"//file.suafe.cn/blgc/userhead/3.jpg",
                commenterName:"子欲何",
                commentScore:3,
                gameIconSrc:"//file.suafe.cn/blgc/gameicon/mhmnz.png",
                gameName:"梦幻模拟战"
            },
        ]
        return(
            <div className="find-hot-comment">
                <LinkTitle title="热门评论" link="/hotcomment" backgroundColor="none"/>
                <HorizontalScroll backgroundColor="none">
                    {
                        data.map(v=>(
                            <CommentItem 
                                commentId={v.commentId}
                                commentAbstract={v.commentAbstract}
                                commenterHeadSrc={v.commenterHeadSrc}
                                commenterName={v.commenterName}
                                commentScore={v.commentScore}
                                gameIconSrc={v.gameIconSrc}
                                gameName={v.gameName}
                            />
                        ))
                    }
                    
                    
                </HorizontalScroll>
                adads
            </div>
        )
    }
}

export default HotComments;