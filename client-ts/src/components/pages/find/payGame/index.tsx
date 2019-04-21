import * as React from 'react';
import HorizontalScroll from "src/components/commonComponent/horizontal-scroll";
import GameIcon from "src/components/commonComponent/game-icon";
import LinkTitle from "src/components/commonComponent/link-title";
import { connect } from "react-redux";
import { setFindPayGame } from "src/action/actions";
import "./find-pay-game.css";
import { findPayGamesApi } from "src/api-request/find";


const PayGameItem = (props:{gameName:string,gameIconSrc:string,gameId:string})=>{
    return(
        <li className="find-pay-game-item">
            <GameIcon gameIconSrc={props.gameIconSrc} gameId={props.gameId} gameName={props.gameName}/>
        </li>
    )
}

class PayGames extends React.Component {
    public props:{items:gameIconItemI[], setFindPayGame:(items: gameIconItemI[])=>void}

    public componentDidMount(){
        if(this.props.items.length !== 0){
            return;
        }
        // console.log("get home find pay game")
        const that =this;
        findPayGamesApi(data=>{
            that.props.setFindPayGame(data);
        })
    }

    public render(){
        
        return(
            <div className="find-pay-game">
				<LinkTitle title='付费游戏' link="/paygame" backgroundColor="#fff"/>
                <HorizontalScroll backgroundColor="#fff">
                    {
                        this.props.items.length === 0?
                        [1,2,3,4,5,6,7,8].map(v=>(
                            <PayGameItem
                                key={v}
                                gameId=""
                                gameIconSrc=""
                                gameName="bilibili"
                            />
                        )):
                        this.props.items.map(v=>(
                            <PayGameItem
                                key={v.gameId}
                                gameName={v.gameName}
                                gameIconSrc={v.gameIconSrc}
                                gameId={v.gameId}
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
        items: state.findPayGame
    }),(dispatch:any) => ({
        setFindPayGame: (items:gameIconItemI[]) => dispatch(setFindPayGame(items))
    })
)(PayGames)


