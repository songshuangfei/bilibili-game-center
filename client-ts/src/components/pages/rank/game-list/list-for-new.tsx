import * as React from 'react';
import GameListItem from "src/components/commonComponent/game-list-item"
class GameListForNew extends React.Component {
    public render(){
        const date=[
            {gameId:"001",gameName:"命运-冠位指(Fate/Go)",gameIconSrc:"//file.suafe.cn/blgc/gameicon/fgo.png",gameType:"卡牌",gameSize:"568M",orderNum:12213},
            {gameId:"005",gameName:"撒旦",gameIconSrc:"//file.suafe.cn/blgc/gameicon/fs.png",gameType:"卡牌",gameSize:"568M",orderNum:32431},
            {gameId:"003",gameName:"梦幻模拟战",gameIconSrc:"//file.suafe.cn/blgc/gameicon/mhmnz.png",gameType:"卡牌",gameSize:"568M",orderNum:6465},
            {gameId:"002",gameName:"崩坏三",gameIconSrc:"//file.suafe.cn/blgc/gameicon/bh3.png",gameType:"ARPG",gameSize:"568M",orderNum:4456456},
            {gameId:"009",gameName:"这是个啥游戏。。。",gameIconSrc:"//file.suafe.cn/blgc/gameicon/zs.png",gameType:"卡牌",gameSize:"568M",orderNum:56456},
            {gameId:"004",gameName:"撒旦",gameIconSrc:"//file.suafe.cn/blgc/gameicon/blhx.png",gameType:"卡牌",gameSize:"568M",orderNum:456456},
            {gameId:"006",gameName:"撒旦",gameIconSrc:"//file.suafe.cn/blgc/gameicon/fs.png",gameType:"卡牌",gameSize:"568M",orderNum:46456},
            {gameId:"007",gameName:"撒旦",gameIconSrc:"//file.suafe.cn/blgc/gameicon/zs.png",gameType:"卡牌",gameSize:"568M",orderNum:456456},
            {gameId:"008",gameName:"撒旦",gameIconSrc:"//file.suafe.cn/blgc/gameicon/bh3.png",gameType:"卡牌",gameSize:"568M",orderNum:345345},
        ]
        return (
            <div className="rank-game-list">
                {
                    date.map((v, i)=>(
                        <GameListItem 
                            key={v.gameId}
                            gameId={v.gameId}
                            gameName={v.gameName}
                            gameIconSrc={v.gameIconSrc}
                            gameType={v.gameType}
                            gameSize={v.gameSize}
                            ranking={i+1}
                            orderNum={v.orderNum}
                        />
                    ))
                }
                gamelist for new
            </div>
        )
    }
} 

export default GameListForNew;