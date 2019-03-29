import * as React from 'react';
import BlueBtn from "src/components/commonComponent/blue-btn"
import {ImgLoadingIcon} from "src/components/icons" 
import "./rank-game-list.css";

// const GameScore =()=>{
//     return(
//         <div>ssss</div>
//     )
// }
const RankGameItem = (props:{
    gameId:string,
    gameName:string,
    gameIconSrc:string,
    gameType:string,
    gameSize:string,
    ranking:number,
    score:number,// 这三个可选属性是必有一个得，信息面板第三条根据其改变
})=>{
    const rankingColor = props.ranking<=3?"#22ade5":"#959595";
    return(
        <div className="rank-game-item">
            <div className="content">
                <div className="ranking" style={{color:rankingColor}}>{props.ranking}</div>
                <div className="icon-pic">
                    <div style={{backgroundImage:`url(${ImgLoadingIcon})`}}>
                        <img src={props.gameIconSrc} alt=""/>
                    </div>
                </div>
                <div className="info">
                    <div className="game-name">{props.gameName}</div>
                    <div className="game-type-size">{props.gameType}/{props.gameSize}</div>
                    <div className="game-score-or-other">
                        {props.score}
                    </div>
                </div>
                <div className="download-btn">
                    <div>
                        <BlueBtn width="4.2rem" height="2rem" name="下载" link="#"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
class GameList extends React.Component {
    public props:{listType:string};
    public render(){
        const date=[
            {gameId:"009",gameName:"这是个啥游戏。。。",gameIconSrc:"//file.suafe.cn/blgc/gameicon/zs.png",gameType:"卡牌",gameSize:"568M",score:9.1},
            {gameId:"001",gameName:"命运-冠位指(Fate/Go)",gameIconSrc:"//file.suafe.cn/blgc/gameicon/fgo.png",gameType:"卡牌",gameSize:"568M",score:6.1},
            {gameId:"002",gameName:"崩坏三",gameIconSrc:"//file.suafe.cn/blgc/gameicon/bh3.png",gameType:"ARPG",gameSize:"568M",score:6.1},
            {gameId:"003",gameName:"梦幻模拟战",gameIconSrc:"//file.suafe.cn/blgc/gameicon/mhmnz.png",gameType:"卡牌",gameSize:"568M",score:6.1},
            {gameId:"004",gameName:"撒旦",gameIconSrc:"//file.suafe.cn/blgc/gameicon/blhx.png",gameType:"卡牌",gameSize:"568M",score:6.1},
            {gameId:"005",gameName:"撒旦",gameIconSrc:"//file.suafe.cn/blgc/gameicon/fs.png",gameType:"卡牌",gameSize:"568M",score:6.1},
            {gameId:"006",gameName:"撒旦",gameIconSrc:"//file.suafe.cn/blgc/gameicon/fs.png",gameType:"卡牌",gameSize:"568M",score:6.1},
            {gameId:"007",gameName:"撒旦",gameIconSrc:"//file.suafe.cn/blgc/gameicon/zs.png",gameType:"卡牌",gameSize:"568M",score:6.1},
            {gameId:"008",gameName:"撒旦",gameIconSrc:"//file.suafe.cn/blgc/gameicon/bh3.png",gameType:"卡牌",gameSize:"568M",score:6.1},
        ]
        return (
            <div className="rank-game-list">
                {
                    date.map((v, i)=>(
                        <RankGameItem 
                            key={v.gameId}
                            gameId={v.gameId}
                            gameName={v.gameName}
                            gameIconSrc={v.gameIconSrc}
                            gameType={v.gameType}
                            gameSize={v.gameSize}
                            score={v.score}
                            ranking={i+1}
                        />
                    ))
                }
                gamelist for {this.props.listType}
            </div>
        )
    }
} 

export default GameList;