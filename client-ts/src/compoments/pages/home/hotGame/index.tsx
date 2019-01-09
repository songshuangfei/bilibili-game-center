import * as React from 'react';
import HorizontalScroll from "src/compoments/commonComponent/horizontal-scroll";
import GameIcon from "src/compoments/commonComponent/game-icon";
import BlueBtn from "src/compoments/commonComponent/blue-btn"
import "./home-hot-game.css"

const HotGameItem = (props:{gameName:string,gameIconUrl:string,gameId:string})=>{
        
    return(
        <li className="home-hot-game-item">
            <GameIcon gameIconUrl={props.gameIconUrl} gameId={props.gameId} gameName={props.gameName}/>
            <BlueBtn width="4.2rem" height="2rem" name="下载" link="/msg"/>
        </li>
    )
}


class HotGame extends React.Component {
    public render(){
        const hotGame = [
            {name:"命运-冠位指定",icon:"//192.168.1.101:8000/gameicon/fgo.png",gameId:"001"},
            {name:"崩坏3",icon:"//192.168.1.101:8000/gameicon/bh3.png",gameId:"002"},
            {name:"碧蓝航线",icon:"//192.168.1.101:8000/gameicon/blhx.png",gameId:"003"},
            {name:"梦幻模拟战",icon:"//192.168.1.101:8000/gameicon//mhmnz.png",gameId:"004"},
            {name:"食梦计划",icon:"//192.168.1.101:8000/gameicon//smjh.png",gameId:"005"},
            {name:"站双：帕弥什",icon:"//192.168.1.101:8000/gameicon//zs.png",gameId:"006"},
            {name:"辐射：避难所Online",icon:"//192.168.1.101:8000/gameicon//fs.png",gameId:"007"},
            {name:"梦幻模拟战",icon:"//192.168.1.101:8000/gameicon//mhmnz.png",gameId:"008"},
            {name:"梦幻模拟战",icon:"//192.168.1.101:8000/gameicon//mhmnz.png",gameId:"009"},

        ]
        return(
            <div style={{background:"#fff",height:"10rem"}}>{/* 防止未加载数据高度塌陷*/}
                <HorizontalScroll backgroundColor="#fff">
                    {hotGame.map( (v) => (
                        <HotGameItem 
                            key={ v.gameId }
                            gameId={v.gameId}
                            gameIconUrl={v.icon}
                            gameName={v.name}
                        />
                    ))}
                </HorizontalScroll>
            </div>
        )
    }
}
export default HotGame;
