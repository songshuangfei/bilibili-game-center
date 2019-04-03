import * as React from "react";
import "./find-game-class.css";
import HorizontalScroll from 'src/components/commonComponent/horizontal-scroll';
import GameIcon from 'src/components/commonComponent/game-icon';
import LinkTitle from 'src/components/commonComponent/link-title';
import { ListAutoLoading, loadingState } from 'src/components/commonComponent/list-auto-loading';

const GameItem = (props:{gameName:string,gameIconSrc:string,gameId:string})=>{
    return(
        <li className="game-class-game-item">
            <GameIcon gameIconSrc={props.gameIconSrc} gameId={props.gameId} gameName={props.gameName}/>
        </li>
    )
}

const GameClassItem = (props:FindGameClassifyItemI)=>{
    return(
        <div className="game-class-item">
            <LinkTitle title={props.classifyName} link={`/gameclassify/${props.classifyId}` } backgroundColor="#fff"/>
            <HorizontalScroll backgroundColor="#fff">
                {
                    props.games.map(v=>(
                        <GameItem 
                            key={v.gameId}
                            gameIconSrc={v.gameIconSrc}
                            gameId={v.gameId}
                            gameName={v.gameName}
                        />
                    ))
                }
            </HorizontalScroll>
        </div>
    )
}

class GameClassify extends React.Component {
    public render(){
        const data:FindGameClassifyItemI[] =[
            {
                classifyName:"独立游戏",
                classifyId:"002",
                games:[
                    {gameName:"食梦计划",gameIconSrc:"//file.suafe.cn/blgc/gameicon//smjh.png",gameId:"005"},
                    {gameName:"站双：帕弥什",gameIconSrc:"//file.suafe.cn/blgc/gameicon//zs.png",gameId:"006"},
                    {gameName:"辐射：避难所Online",gameIconSrc:"//file.suafe.cn/blgc/gameicon//fs.png",gameId:"007"},
                    {gameName:"命运-冠位指定",gameIconSrc:"//file.suafe.cn/blgc/gameicon/fgo.png",gameId:"001"},
                    {gameName:"碧蓝航线",gameIconSrc:"//file.suafe.cn/blgc/gameicon/blhx.png",gameId:"003"},
                    {gameName:"梦幻模拟战",gameIconSrc:"//file.suafe.cn/blgc/gameicon//mhmnz.png",gameId:"009"},
                    {gameName:"梦幻模拟战",gameIconSrc:"//file.suafe.cn/blgc/gameicon//mhmnz.png",gameId:"008"},
                    {gameName:"崩坏3",gameIconSrc:"//file.suafe.cn/blgc/gameicon/bh3.png",gameId:"002"},
                    {gameName:"梦幻模拟战",gameIconSrc:"//file.suafe.cn/blgc/gameicon//mhmnz.png",gameId:"004"},
                ]   
            },{
                classifyName:"音乐游戏",
                classifyId:"001",
                games:[
                    {gameName:"碧蓝航线",gameIconSrc:"//file.suafe.cn/blgc/gameicon/blhx.png",gameId:"003"},
                    {gameName:"食梦计划",gameIconSrc:"//file.suafe.cn/blgc/gameicon//smjh.png",gameId:"005"},
                    {gameName:"站双：帕弥什",gameIconSrc:"//file.suafe.cn/blgc/gameicon//zs.png",gameId:"006"},
                    {gameName:"辐射：避难所Online",gameIconSrc:"//file.suafe.cn/blgc/gameicon//fs.png",gameId:"007"},
                    {gameName:"命运-冠位指定",gameIconSrc:"//file.suafe.cn/blgc/gameicon/fgo.png",gameId:"001"},
                    {gameName:"梦幻模拟战",gameIconSrc:"//file.suafe.cn/blgc/gameicon//mhmnz.png",gameId:"009"},
                    {gameName:"梦幻模拟战",gameIconSrc:"//file.suafe.cn/blgc/gameicon//mhmnz.png",gameId:"008"},
                    {gameName:"崩坏3",gameIconSrc:"//file.suafe.cn/blgc/gameicon/bh3.png",gameId:"002"},
                    {gameName:"梦幻模拟战",gameIconSrc:"//file.suafe.cn/blgc/gameicon//mhmnz.png",gameId:"004"},
                ]   
            },{
                classifyName:"休闲~冒险",
                classifyId:"003",
                games:[
                    {gameName:"辐射：避难所Online",gameIconSrc:"//file.suafe.cn/blgc/gameicon//fs.png",gameId:"007"},
                    {gameName:"食梦计划",gameIconSrc:"//file.suafe.cn/blgc/gameicon//smjh.png",gameId:"005"},
                    {gameName:"站双：帕弥什",gameIconSrc:"//file.suafe.cn/blgc/gameicon//zs.png",gameId:"006"},
                    {gameName:"命运-冠位指定",gameIconSrc:"//file.suafe.cn/blgc/gameicon/fgo.png",gameId:"001"},
                    {gameName:"碧蓝航线",gameIconSrc:"//file.suafe.cn/blgc/gameicon/blhx.png",gameId:"003"},
                    {gameName:"梦幻模拟战",gameIconSrc:"//file.suafe.cn/blgc/gameicon//mhmnz.png",gameId:"009"},
                    {gameName:"梦幻模拟战",gameIconSrc:"//file.suafe.cn/blgc/gameicon//mhmnz.png",gameId:"008"},
                    {gameName:"崩坏3",gameIconSrc:"//file.suafe.cn/blgc/gameicon/bh3.png",gameId:"002"},
                    {gameName:"梦幻模拟战",gameIconSrc:"//file.suafe.cn/blgc/gameicon//mhmnz.png",gameId:"004"},
                ]   
            },
        ]
        return(
            <div className="find-game-class">
                {
                    data.map(v=>(
                        <GameClassItem 
                            key={v.classifyId}
                            classifyName={v.classifyName}
                            classifyId={v.classifyId}
                            games={v.games}
                        />
                    ))
                }
                <ListAutoLoading now={loadingState.loading} failedRetry={()=>{console.log("failed")}}/>
            </div>
        )
    }
}

export default GameClassify;