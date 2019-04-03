import * as React from 'react';
import HorizontalScroll from "src/components/commonComponent/horizontal-scroll";
import GameIcon from "src/components/commonComponent/game-icon";
import LinkTitle from "src/components/commonComponent/link-title";
import { connect } from "react-redux";
import { setFindBiliGame } from "src/action/actions"
import "./find-bili-game.css"

const BiliGameItem = (props:{gameName:string,gameIconSrc:string,gameId:string})=>{
    return(
        <li className="find-bili-game-item">
            <GameIcon gameIconSrc={props.gameIconSrc} gameId={props.gameId} gameName={props.gameName}/>
        </li>
    )
}

class BiliGames extends React.Component {
    public props:{items:gameIconItemI[], setFindBiliGame:(items: gameIconItemI[])=>void}

    public componentDidMount(){
        if(this.props.items.length !== 0){
            return;
        }
        console.log("get home find bili game")

        const that =this;
        setTimeout(() => {
            const biligame:gameIconItemI[] = [
                {gameName:"命运-冠位指定",gameIconSrc:"//file.suafe.cn/blgc/gameicon/fgo.png",gameId:"001"},
                {gameName:"碧蓝航线",gameIconSrc:"//file.suafe.cn/blgc/gameicon/blhx.png",gameId:"003"},
                {gameName:"辐射：避难所Online",gameIconSrc:"//file.suafe.cn/blgc/gameicon//fs.png",gameId:"007"},
                {gameName:"梦幻模拟战",gameIconSrc:"//file.suafe.cn/blgc/gameicon//mhmnz.png",gameId:"009"},
                {gameName:"食梦计划",gameIconSrc:"//file.suafe.cn/blgc/gameicon//smjh.png",gameId:"005"},
                {gameName:"站双：帕弥什",gameIconSrc:"//file.suafe.cn/blgc/gameicon//zs.png",gameId:"006"},
                {gameName:"梦幻模拟战",gameIconSrc:"//file.suafe.cn/blgc/gameicon//mhmnz.png",gameId:"008"},
                {gameName:"崩坏3",gameIconSrc:"//file.suafe.cn/blgc/gameicon/bh3.png",gameId:"002"},
                {gameName:"梦幻模拟战",gameIconSrc:"//file.suafe.cn/blgc/gameicon//mhmnz.png",gameId:"004"},
            ]
            that.props.setFindBiliGame(biligame);
        }, 3000);
    }

    public render(){
        return(
            <div className="find-bili-game">
				<LinkTitle title='哔哩哔哩 (゜-゜)つロ 干杯~' link="/biligame" backgroundColor="#fff"/>
                <HorizontalScroll backgroundColor="#fff">
                    {
                        this.props.items.length === 0?
                        [1,2,3,4,5,6,7,8].map(v=>(
                            <BiliGameItem 
                                key={v}
                                gameName="bilibili"
                                gameIconSrc=""
                                gameId=""
                            />
                        )):
                        this.props.items.map(v=>(
                            <BiliGameItem
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
        items: state.findBiliGame
    }),(dispatch:any) => ({
        setFindBiliGame: (items:gameIconItemI[]) => dispatch(setFindBiliGame(items))
    })
)(BiliGames)


