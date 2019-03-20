import * as React from "react";
import "./find-game-class.css";
import HorizontalScroll from 'src/components/commonComponent/horizontal-scroll';
import GameIcon from 'src/components/commonComponent/game-icon';
import LinkTitle from 'src/components/commonComponent/link-title';
const GameItem = (props:{gameName:string,gameIconSrc:string,gameId:string})=>{
    return(
        <li className="game-class-game-item">
            <GameIcon gameIconSrc={props.gameIconSrc} gameId={props.gameId} gameName={props.gameName}/>
        </li>
    )
}

const GameClassItem = (props:{
    classifyName:string,
    classifyId:string,
    games:Array<{
        name:string,
        icon:string,
        gameId:string
    }>
})=>{
    return(
        <div className="game-class-item">
            <LinkTitle title={props.classifyName} link={`/gameclassify/${props.classifyId}` } backgroundColor="#fff"/>
            <HorizontalScroll backgroundColor="#fff">
                {
                    props.games.map(v=>(
                        <GameItem 
                            key={v.gameId}
                            gameIconSrc={v.icon}
                            gameId={v.gameId}
                            gameName={v.name}
                        />
                    ))
                }
            </HorizontalScroll>
        </div>
    )
}

class GameClassify extends React.Component {
    public render(){
        const data =[
            {
                classIfyName:"独立游戏",
                classifyId:"002",
                games:[
                    {name:"食梦计划",icon:"//file.suafe.cn/blgc/gameicon//smjh.png",gameId:"005"},
                    {name:"站双：帕弥什",icon:"//file.suafe.cn/blgc/gameicon//zs.png",gameId:"006"},
                    {name:"辐射：避难所Online",icon:"//file.suafe.cn/blgc/gameicon//fs.png",gameId:"007"},
                    {name:"命运-冠位指定",icon:"//file.suafe.cn/blgc/gameicon/fgo.png",gameId:"001"},
                    {name:"碧蓝航线",icon:"//file.suafe.cn/blgc/gameicon/blhx.png",gameId:"003"},
                    {name:"梦幻模拟战",icon:"//file.suafe.cn/blgc/gameicon//mhmnz.png",gameId:"009"},
                    {name:"梦幻模拟战",icon:"//file.suafe.cn/blgc/gameicon//mhmnz.png",gameId:"008"},
                    {name:"崩坏3",icon:"//file.suafe.cn/blgc/gameicon/bh3.png",gameId:"002"},
                    {name:"梦幻模拟战",icon:"//file.suafe.cn/blgc/gameicon//mhmnz.png",gameId:"004"},
                ]   
            },{
                classIfyName:"音乐游戏",
                classifyId:"001",
                games:[
                    {name:"碧蓝航线",icon:"//file.suafe.cn/blgc/gameicon/blhx.png",gameId:"003"},
                    {name:"食梦计划",icon:"//file.suafe.cn/blgc/gameicon//smjh.png",gameId:"005"},
                    {name:"站双：帕弥什",icon:"//file.suafe.cn/blgc/gameicon//zs.png",gameId:"006"},
                    {name:"辐射：避难所Online",icon:"//file.suafe.cn/blgc/gameicon//fs.png",gameId:"007"},
                    {name:"命运-冠位指定",icon:"//file.suafe.cn/blgc/gameicon/fgo.png",gameId:"001"},
                    {name:"梦幻模拟战",icon:"//file.suafe.cn/blgc/gameicon//mhmnz.png",gameId:"009"},
                    {name:"梦幻模拟战",icon:"//file.suafe.cn/blgc/gameicon//mhmnz.png",gameId:"008"},
                    {name:"崩坏3",icon:"//file.suafe.cn/blgc/gameicon/bh3.png",gameId:"002"},
                    {name:"梦幻模拟战",icon:"//file.suafe.cn/blgc/gameicon//mhmnz.png",gameId:"004"},
                ]   
            },{
                classIfyName:"休闲~冒险",
                classifyId:"003",
                games:[
                    {name:"辐射：避难所Online",icon:"//file.suafe.cn/blgc/gameicon//fs.png",gameId:"007"},
                    {name:"食梦计划",icon:"//file.suafe.cn/blgc/gameicon//smjh.png",gameId:"005"},
                    {name:"站双：帕弥什",icon:"//file.suafe.cn/blgc/gameicon//zs.png",gameId:"006"},
                    {name:"命运-冠位指定",icon:"//file.suafe.cn/blgc/gameicon/fgo.png",gameId:"001"},
                    {name:"碧蓝航线",icon:"//file.suafe.cn/blgc/gameicon/blhx.png",gameId:"003"},
                    {name:"梦幻模拟战",icon:"//file.suafe.cn/blgc/gameicon//mhmnz.png",gameId:"009"},
                    {name:"梦幻模拟战",icon:"//file.suafe.cn/blgc/gameicon//mhmnz.png",gameId:"008"},
                    {name:"崩坏3",icon:"//file.suafe.cn/blgc/gameicon/bh3.png",gameId:"002"},
                    {name:"梦幻模拟战",icon:"//file.suafe.cn/blgc/gameicon//mhmnz.png",gameId:"004"},
                ]   
            },
        ]
        return(
            <div className="find-game-class">
                {
                    data.map(v=>(
                        <GameClassItem 
                            key={v.classifyId}
                            classifyName={v.classIfyName}
                            classifyId={v.classifyId}
                            games={v.games}
                        />
                    ))
                }
            </div>
        )
    }
}

export default GameClassify;