import * as React from 'react';
import HorizontalScroll from "src/components/commonComponent/horizontal-scroll";
import GameIcon from "src/components/commonComponent/game-icon";
import LinkTitle from "src/components/commonComponent/link-title";
import "./home-new-game.css";
import { setHomeNewGame} from "src/action/actions";
import { connect } from 'react-redux';


const NewGameItem = (props:gameIconItemI)=>{
    return(
        <li className="home-new-game-item">
            <GameIcon gameIconSrc={props.gameIconSrc} gameId={props.gameId} gameName={props.gameName}/>
        </li>
    )
}
class NewGame extends React.Component {
    public props: {items:gameIconItemI[],setHomeNewGame:(items:gameIconItemI[]) =>any};
    public componentDidMount(){
        if(this.props.items.length!==0){
            return;
        }
        // console.log("get home new game");
        
        const that =this;
        setTimeout(() => {
            const newGame:gameIconItemI[] = [
                {gameName:"梦幻模拟战",gameIconSrc:"//file.suafe.cn/blgc/gameicon//mhmnz.png",gameId:"004"},
                {gameName:"食梦计划",gameIconSrc:"//file.suafe.cn/blgc/gameicon//smjh.png",gameId:"005"},
                {gameName:"梦幻模拟战",gameIconSrc:"//file.suafe.cn/blgc/gameicon//mhmnz.png",gameId:"008"},
                {gameName:"命运-冠位指定",gameIconSrc:"//file.suafe.cn/blgc/gameicon/fgo.png",gameId:"001"},
                {gameName:"崩坏3",gameIconSrc:"//file.suafe.cn/blgc/gameicon/bh3.png",gameId:"002"},
                {gameName:"碧蓝航线",gameIconSrc:"//file.suafe.cn/blgc/gameicon/blhx.png",gameId:"003"},
                {gameName:"站双：帕弥什",gameIconSrc:"//file.suafe.cn/blgc/gameicon//zs.png",gameId:"006"},
                {gameName:"辐射：避难所Online",gameIconSrc:"//file.suafe.cn/blgc/gameicon//fs.png",gameId:"007"},
                {gameName:"梦幻模拟战",gameIconSrc:"//file.suafe.cn/blgc/gameicon//mhmnz.png",gameId:"009"},
            ];
            that.props.setHomeNewGame(newGame);
        }, 3000);
    }

    public render(){
        return(
            <div>
				<LinkTitle title='新游推荐' link="/newgame" backgroundColor="none"/>
                
                <HorizontalScroll backgroundColor="#none">
                {
                        this.props.items.length === 0?
                        [1,2,3,4,5,6,7,8,9].map(
                            v=><NewGameItem key={v} gameId="" gameIconSrc="" gameName="bilibili"/>
                        ):
                        this.props.items.map( (v) => (
                            <NewGameItem 
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
        items: state.homeNewGame
    }),(dispatch:any) => ({
        setHomeNewGame: (items:gameIconItemI[]) => dispatch(setHomeNewGame(items))
    })
)(NewGame)


