import * as React from 'react';
import HorizontalScroll from "src/components/commonComponent/horizontal-scroll";
import GameIcon from "src/components/commonComponent/game-icon";
import BlueBtn from "src/components/commonComponent/blue-btn";
import LinkTitle from "src/components/commonComponent/link-title";
import "./home-hot-game.css";
import {setHomeHotGame} from "src/action/actions";
import { connect } from 'react-redux';
import {homeHotGamesApi} from "src/api-request/home"

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
        // console.log("get home hot game")
        const that =this;
        homeHotGamesApi((data)=>{
            that.props.setHomeHotGame(data);
        })
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
