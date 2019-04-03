import * as React from 'react';
import HorizontalScroll from "src/components/commonComponent/horizontal-scroll";
import GameIcon from "src/components/commonComponent/game-icon";
import LinkTitle from "src/components/commonComponent/link-title";
import { connect } from "react-redux";
import { setFindPayGame } from "src/action/actions"
import "./find-pay-game.css"

const PayGameItem = (props:{gameName:string,gameIconSrc:string,gameId:string})=>{
    return(
        <li className="find-pay-game-item">
            <GameIcon gameIconSrc={props.gameIconSrc} gameId={props.gameId} gameName={props.gameName}/>
        </li>
    )
}

class PayGames extends React.Component {
    public props:{items:gameIconItemI[], setFindPayGame:(items: gameIconItemI[])=>void}

    public componentDidMount(){
        if(this.props.items.length !== 0){
            return;
        }
        console.log("get home find pay game")

        const that =this;
        setTimeout(() => {
            const paygame:gameIconItemI[] = [
                {gameName:"站双：帕弥什",gameIconSrc:"//file.suafe.cn/blgc/gameicon//zs.png",gameId:"006"},
                {gameName:"辐射：避难所Online",gameIconSrc:"//file.suafe.cn/blgc/gameicon//fs.png",gameId:"007"},
                {gameName:"命运-冠位指定",gameIconSrc:"//file.suafe.cn/blgc/gameicon/fgo.png",gameId:"001"},
                {gameName:"碧蓝航线",gameIconSrc:"//file.suafe.cn/blgc/gameicon/blhx.png",gameId:"003"},
                {gameName:"梦幻模拟战",gameIconSrc:"//file.suafe.cn/blgc/gameicon//mhmnz.png",gameId:"009"},
                {gameName:"食梦计划",gameIconSrc:"//file.suafe.cn/blgc/gameicon//smjh.png",gameId:"005"},
                {gameName:"梦幻模拟战",gameIconSrc:"//file.suafe.cn/blgc/gameicon//mhmnz.png",gameId:"008"},
                {gameName:"崩坏3",gameIconSrc:"//file.suafe.cn/blgc/gameicon/bh3.png",gameId:"002"},
                {gameName:"梦幻模拟战",gameIconSrc:"//file.suafe.cn/blgc/gameicon//mhmnz.png",gameId:"004"},
            ]
            that.props.setFindPayGame(paygame);
        }, 3000);
    }

    public render(){
        
        return(
            <div className="find-pay-game">
				<LinkTitle title='付费游戏' link="/paygame" backgroundColor="#fff"/>
                <HorizontalScroll backgroundColor="#fff">
                    {
                        this.props.items.length === 0?
                        [1,2,3,4,5,6,7,8].map(v=>(
                            <PayGameItem
                                key={v}
                                gameId=""
                                gameIconSrc=""
                                gameName="bilibili"
                            />
                        )):
                        this.props.items.map(v=>(
                            <PayGameItem
                                key={v.gameId}
                                gameName={v.gameName}
                                gameIconSrc={v.gameIconSrc}
                                gameId={v.gameId}
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
        items: state.findPayGame
    }),(dispatch:any) => ({
        setFindPayGame: (items:gameIconItemI[]) => dispatch(setFindPayGame(items))
    })
)(PayGames)


