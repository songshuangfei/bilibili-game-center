import * as React from 'react';
import HorizontalScroll from "src/components/commonComponent/horizontal-scroll";
import GameIcon from "src/components/commonComponent/game-icon";
import BlueBtn from "src/components/commonComponent/blue-btn";
import LinkTitle from "src/components/commonComponent/link-title";
import "./home-hot-game.css"

const HotGameItem = (props:{gameName:string,gameIconSrc:string,gameId:string})=>{
    return(
        <li className="home-hot-game-item">
            <GameIcon gameIconSrc={props.gameIconSrc} gameId={props.gameId} gameName={props.gameName}/>
            <BlueBtn width="4.2rem" height="2rem" name="下载" link="#"/>
        </li>
    )
}

class HotGame extends React.Component {
    public render(){
        const hotGame = [
            {name:"命运-冠位指定",icon:"//file.suafe.cn/blgc/gameicon/fgo.png",gameId:"001"},
            {name:"崩坏3",icon:"//file.suafe.cn/blgc/gameicon/bh3.png",gameId:"002"},
            {name:"碧蓝航线",icon:"//file.suafe.cn/blgc/gameicon/blhx.png",gameId:"003"},
            {name:"梦幻模拟战",icon:"//file.suafe.cn/blgc/gameicon//mhmnz.png",gameId:"004"},
            {name:"食梦计划",icon:"//file.suafe.cn/blgc/gameicon//smjh.png",gameId:"005"},
            {name:"站双：帕弥什",icon:"//file.suafe.cn/blgc/gameicon//zs.png",gameId:"006"},
            {name:"辐射：避难所Online",icon:"//file.suafe.cn/blgc/gameicon//fs.png",gameId:"007"},
            {name:"梦幻模拟战",icon:"//file.suafe.cn/blgc/gameicon//mhmnz.png",gameId:"008"},
            {name:"梦幻模拟战",icon:"//file.suafe.cn/blgc/gameicon//mhmnz.png",gameId:"009"},
        ]
        return(
            <div className="home-hot-game">
				<LinkTitle title='精品推荐' link="/hotgame" backgroundColor="#fff"/>
                <HorizontalScroll backgroundColor="#fff">
                    {hotGame.map( (v) => (
                        <HotGameItem 
                            key={ v.gameId }
                            gameId={v.gameId}
                            gameIconSrc={v.icon}
                            gameName={v.name}
                        />
                    ))}
                    {/* {[1,2,3,4,5,6,7,8,9].map(v=><HotGameItem key={v} gameId="" gameIconSrc={ImgLoadingIcon} gameName="bilibili"/>)} */}
                </HorizontalScroll>
            </div>
            
        )
    }
}
export default HotGame;
