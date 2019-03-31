import * as React from 'react';
import HorizontalScroll from "src/components/commonComponent/horizontal-scroll";
import GameIcon from "src/components/commonComponent/game-icon";
import BlueBtn from "src/components/commonComponent/blue-btn";
import LinkTitle from "src/components/commonComponent/link-title";
import "./home-hot-game.css";
import {setHomeHotGame} from "src/action/actions";
import { connect } from 'react-redux';

const HotGameItem = (props:gameIconItemI)=>{
    return(
        <li className="home-hot-game-item">
            <GameIcon gameIconSrc={props.gameIconSrc} gameId={props.gameId} gameName={props.gameName}/>
            <BlueBtn width="4.2rem" height="2rem" name="下载" link="#"/>
        </li>
    )
}

class HotGame extends React.Component {
    public props: {items:gameIconItemI[],setHomeHotGame:(items:gameIconItemI[]) =>any};
    
    public componentDidMount(){
        if(this.props.items.length!==0){
            return;
        }
        console.log("get home hot game")

        

        const that =this;
        setTimeout(() => {
            const hotGames:gameIconItemI[] = [
                {gameName:"命运-冠位指定",gameIconSrc:"//file.suafe.cn/blgc/gameicon/fgo.png",gameId:"001"},
                {gameName:"崩坏3",gameIconSrc:"//file.suafe.cn/blgc/gameicon/bh3.png",gameId:"002"},
                {gameName:"碧蓝航线",gameIconSrc:"//file.suafe.cn/blgc/gameicon/blhx.png",gameId:"003"},
                {gameName:"梦幻模拟战",gameIconSrc:"//file.suafe.cn/blgc/gameicon//mhmnz.png",gameId:"004"},
                {gameName:"食梦计划",gameIconSrc:"//file.suafe.cn/blgc/gameicon//smjh.png",gameId:"005"},
                {gameName:"站双：帕弥什",gameIconSrc:"//file.suafe.cn/blgc/gameicon//zs.png",gameId:"006"},
                {gameName:"辐射：避难所Online",gameIconSrc:"//file.suafe.cn/blgc/gameicon//fs.png",gameId:"007"},
                {gameName:"梦幻模拟战",gameIconSrc:"//file.suafe.cn/blgc/gameicon//mhmnz.png",gameId:"008"},
                {gameName:"梦幻模拟战",gameIconSrc:"//file.suafe.cn/blgc/gameicon//mhmnz.png",gameId:"009"},
            ]
            that.props.setHomeHotGame(hotGames);
        }, 3000);
    }
    
    public render(){
        return(
            <div className="home-hot-game">
				<LinkTitle title='精品推荐' link="/hotgame" backgroundColor="#fff"/>
                <HorizontalScroll backgroundColor="#fff">
                    {
                        // 没有数据返回一组代替数据
                        this.props.items.length === 0?
                        [1,2,3,4,5,6,7,8,9].map(
                            v=><HotGameItem key={v} gameId="" gameIconSrc="" gameName="bilibili"/>
                        ):
                        this.props.items.map( (v) => (
                            <HotGameItem 
                                key={v.gameId }
                                gameId={v.gameId}
                                gameIconSrc={v.gameIconSrc}
                                gameName={v.gameName}
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
        items: state.homeHotGame
    }),(dispatch:any) => ({
        setHomeHotGame: (items:gameIconItemI[]) => dispatch(setHomeHotGame(items))
    })
)(HotGame)
