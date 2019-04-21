import * as React from 'react';
import HorizontalScroll from "src/components/commonComponent/horizontal-scroll";
import GameIcon from "src/components/commonComponent/game-icon";
import LinkTitle from "src/components/commonComponent/link-title";
import "./home-new-game.css";
import { setHomeNewGame} from "src/action/actions";
import { connect } from 'react-redux';
import {homeNewGamesApi} from "src/api-request/home"

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
        homeNewGamesApi((data)=>{
            that.props.setHomeNewGame(data);
        })
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


