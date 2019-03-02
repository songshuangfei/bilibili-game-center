import * as React from 'react';
import HorizontalScroll from "src/components/commonComponent/horizontal-scroll";
import GameIcon from "src/components/commonComponent/game-icon";
import LinkTitle from "src/components/commonComponent/link-title";
import "./home-new-game.css"


const NewGameItem = (props:{gameName:string,gameIconSrc:string,gameId:string})=>{
    return(
        <li className="home-new-game-item">
            <GameIcon gameIconSrc={props.gameIconSrc} gameId={props.gameId} gameName={props.gameName}/>
        </li>
    )
}
class NewGame extends React.Component {
    public render(){
        const newGame = [
            {name:"碧蓝航线",icon:"//192.168.1.101:8000/gameicon/blhx.png",gameId:"003"},
            {name:"食梦计划",icon:"//192.168.1.101:8000/gameicon//smjh.png",gameId:"005"},
            {name:"站双：帕弥什",icon:"//192.168.1.101:8000/gameicon//zs.png",gameId:"006"},
            {name:"辐射：避难所Online",icon:"//192.168.1.101:8000/gameicon//fs.png",gameId:"007"},
            {name:"梦幻模拟战",icon:"//192.168.1.101:8000/gameicon//mhmnz.png",gameId:"008"},
            {name:"命运-冠位指定",icon:"//192.168.1.101:8000/gameicon/fgo.png",gameId:"001"},
            {name:"崩坏3",icon:"//192.168.1.101:8000/gameicon/bh3.png",gameId:"002"},
            {name:"梦幻模拟战",icon:"//192.168.1.101:8000/gameicon//mhmnz.png",gameId:"004"},
            {name:"梦幻模拟战",icon:"//192.168.1.101:8000/gameicon//mhmnz.png",gameId:"009"},
        ]
        return(
            <div>
				<LinkTitle title='新游推荐' link="/newgame" backgroundColor="none"/>
                <HorizontalScroll backgroundColor="#none">
                    {
                        newGame.map(v=>(
                            <NewGameItem
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

export default NewGame;


