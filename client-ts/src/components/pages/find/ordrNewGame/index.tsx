import * as React from 'react';
import HorizontalScroll from "src/components/commonComponent/horizontal-scroll";
import GameIcon from "src/components/commonComponent/game-icon";
import LinkTitle from "src/components/commonComponent/link-title";
import { connect } from "react-redux";
import { setFindOrdrNewGame } from "src/action/actions"
import "./find-new-game.css"

const OrderGameItem = (props:gameIconItemI)=>{
    return(
        <li className="find-order-game-item">
            <GameIcon gameIconSrc={props.gameIconSrc} gameId={props.gameId} gameName={props.gameName}/>
        </li>
    )
}

class OrderNewGame extends React.Component {
    public props:{items:gameIconItemI[], setFindOrdrNewGame:(items: gameIconItemI[])=>void}

    public componentDidMount(){
        if(this.props.items.length !== 0){
            return;
        }
        // console.log("get home find order game")

        const that =this;
        setTimeout(() => {
            const newGame:gameIconItemI[] = [
                {gameName:"辐射：避难所Online",gameIconSrc:"//file.suafe.cn/blgc/gameicon//fs.png",gameId:"007"},
                {gameName:"梦幻模拟战",gameIconSrc:"//file.suafe.cn/blgc/gameicon//mhmnz.png",gameId:"009"},
                {gameName:"碧蓝航线",gameIconSrc:"//file.suafe.cn/blgc/gameicon/blhx.png",gameId:"003"},
                {gameName:"食梦计划",gameIconSrc:"//file.suafe.cn/blgc/gameicon//smjh.png",gameId:"005"},
                {gameName:"站双：帕弥什",gameIconSrc:"//file.suafe.cn/blgc/gameicon//zs.png",gameId:"006"},
                {gameName:"梦幻模拟战",gameIconSrc:"//file.suafe.cn/blgc/gameicon//mhmnz.png",gameId:"008"},
                {gameName:"命运-冠位指定",gameIconSrc:"//file.suafe.cn/blgc/gameicon/fgo.png",gameId:"001"},
                {gameName:"崩坏3",gameIconSrc:"//file.suafe.cn/blgc/gameicon/bh3.png",gameId:"002"},
                {gameName:"梦幻模拟战",gameIconSrc:"//file.suafe.cn/blgc/gameicon//mhmnz.png",gameId:"004"},
            ]
            that.props.setFindOrdrNewGame(newGame);
        }, 3000);
    }
    public render(){
        return(
            <div className="find-order-game">
				<LinkTitle title='新游预约' link="/order" backgroundColor="#fff"/>
                <HorizontalScroll backgroundColor="#fff">
                {
                    this.props.items.length === 0?
                    [1,2,3,4,5,6,7,8,9].map(v=>(
                        <OrderGameItem key={v} gameId="" gameIconSrc="" gameName="bilibili"/>
                    )):
                    this.props.items.map(v=>(
                        <OrderGameItem
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
        items: state.findOrdrNewGame
    }),(dispatch:any) => ({
        setFindOrdrNewGame: (items:gameIconItemI[]) => dispatch(setFindOrdrNewGame(items))
    })
)(OrderNewGame)

