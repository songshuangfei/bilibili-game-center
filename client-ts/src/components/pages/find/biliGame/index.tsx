import * as React from 'react';
import HorizontalScroll from "src/components/commonComponent/horizontal-scroll";
import GameIcon from "src/components/commonComponent/game-icon";
import LinkTitle from "src/components/commonComponent/link-title";
import "./find-bili-game.css"

const BiliGameItem = (props:{gameName:string,gameIconSrc:string,gameId:string})=>{
    return(
        <li className="find-bili-game-item">
            <GameIcon gameIconSrc={props.gameIconSrc} gameId={props.gameId} gameName={props.gameName}/>
        </li>
    )
}

class BiliGames extends React.Component {
    public render(){
        const newGame = [
            {name:"命运-冠位指定",icon:"//file.suafe.cn/blgc/gameicon/fgo.png",gameId:"001"},
            {name:"碧蓝航线",icon:"//file.suafe.cn/blgc/gameicon/blhx.png",gameId:"003"},
            {name:"辐射：避难所Online",icon:"//file.suafe.cn/blgc/gameicon//fs.png",gameId:"007"},
            {name:"梦幻模拟战",icon:"//file.suafe.cn/blgc/gameicon//mhmnz.png",gameId:"009"},
            {name:"食梦计划",icon:"//file.suafe.cn/blgc/gameicon//smjh.png",gameId:"005"},
            {name:"站双：帕弥什",icon:"//file.suafe.cn/blgc/gameicon//zs.png",gameId:"006"},
            {name:"梦幻模拟战",icon:"//file.suafe.cn/blgc/gameicon//mhmnz.png",gameId:"008"},
            {name:"崩坏3",icon:"//file.suafe.cn/blgc/gameicon/bh3.png",gameId:"002"},
            {name:"梦幻模拟战",icon:"//file.suafe.cn/blgc/gameicon//mhmnz.png",gameId:"004"},
        ]
        return(
            <div className="find-bili-game">
				<LinkTitle title='哔哩哔哩 (゜-゜)つロ 干杯~' link="/biligame" backgroundColor="#fff"/>
                <HorizontalScroll backgroundColor="#fff">
                    {
                        newGame.map(v=>(
                            <BiliGameItem
                                key={v.gameId}
                                gameName={v.name}
                                gameIconSrc={v.icon}
                                gameId={v.gameId}
                            />
                        ))
                    }
                    {/* {[1,2,3,4,5,6,7,8,9].map(v=><HotGameItem key={v} gameId="" gameIconSrc={ImgLoadingIcon} gameName="bilibili"/>)} */}
                </HorizontalScroll>
            </div>
        )
    }
}

export default BiliGames;


