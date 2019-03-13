import * as React from 'react';
import HorizontalScroll from "src/components/commonComponent/horizontal-scroll";
import LinkTitle from "src/components/commonComponent/link-title";
import {ImgLoadingIcon} from "src/components/icons";
import BlueBtn from "src/components/commonComponent/blue-btn"
import "./home-order-game.css"
const OrderGameItem = (props:{coverImgSrc:string,orderedNum:number,gameName:string,gameId:number})=>{
    return(
        <li className="home-order-game-item">
            <div className="content">
                <div className="cover" style={{
                    backgroundImage:`url(${ImgLoadingIcon})`,
                }}>
                    <img src={props.coverImgSrc} alt=""/>
                </div>
                <div className="game-name">{props.gameName}</div>
                <div className="ordered-num">{props.orderedNum}人已预约</div>
                <div className="order-btn">
                    <BlueBtn width="5.4rem" name="预约" height="2rem" link={`/game/${props.gameId}`}/>
                </div>
            </div>
        </li>
    )
}
class OrdrGame extends React.Component {
    public render(){
        const games:Array<{coverSrc:string,gameId:number,gameName:string,orderedNum:number}> =[
            {coverSrc:"//file.suafe.cn/blgc/gamecover/4.jpg",gameId:1,gameName:"第五人格",orderedNum:8987},
            {coverSrc:"//file.suafe.cn/blgc/gamecover/3.jpg",gameId:2,gameName:"Fate grand order",orderedNum:228223},
            {coverSrc:"//file.suafe.cn/blgc/gamecover/1.jpg",gameId:3,gameName:"第五人格1爱神的箭噶法国",orderedNum:2347},
            {coverSrc:"//file.suafe.cn/blgc/gamecover/2.jpg",gameId:4,gameName:"第五人格2",orderedNum:8987},
            {coverSrc:"//file.suafe.cn/blgc/gamecover/2.jpg",gameId:5,gameName:"第五人格2",orderedNum:89287},
        ]
        return (
            <div>
                <LinkTitle title="预约中心" link="order" backgroundColor="none"/>
                <HorizontalScroll backgroundColor="none">
                    {
                        games.map(v=>(
                            <OrderGameItem 
                                key={v.gameId} 
                                coverImgSrc={v.coverSrc} 
                                orderedNum={v.orderedNum}
                                gameName={v.gameName}
                                gameId={v.gameId}
                            />
                        ))
                    }
                </HorizontalScroll>
            </div>
        )
    }
}

export default OrdrGame;