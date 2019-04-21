import * as React from 'react';
import HorizontalScroll from "src/components/commonComponent/horizontal-scroll";
import GameIcon from "src/components/commonComponent/game-icon";
import LinkTitle from "src/components/commonComponent/link-title";
import { connect } from "react-redux";
import { setFindOrdrNewGame } from "src/action/actions"
import "./find-new-game.css";
import {findOrderNewGameApi} from "src/api-request/find"

const OrderGameItem = (props:gameIconItemI)=>{
    return(
        <li className="find-order-game-item">
            <GameIcon gameIconSrc={props.gameIconSrc} gameId={props.gameId} gameName={props.gameName}/>
        </li>
    )
}

class OrderNewGame extends React.Component {
    public props:{items:gameIconItemI[], setFindOrdrNewGame:(items: gameIconItemI[])=>void}

    public componentDidMount(){
        if(this.props.items.length !== 0){
            return;
        }

        const that =this;
        findOrderNewGameApi(data=>{
            that.props.setFindOrdrNewGame(data);
        })
       
    }
    public render(){
        return(
            <div className="find-order-game">
				<LinkTitle title='新游预约' link="/order" backgroundColor="#fff"/>
                <HorizontalScroll backgroundColor="#fff">
                {
                    this.props.items.length === 0?
                    [1,2,3,4,5,6,7,8,9].map(v=>(
                        <OrderGameItem key={v} gameId="" gameIconSrc="" gameName="bilibili"/>
                    )):
                    this.props.items.map(v=>(
                        <OrderGameItem
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
        items: state.findOrdrNewGame
    }),(dispatch:any) => ({
        setFindOrdrNewGame: (items:gameIconItemI[]) => dispatch(setFindOrdrNewGame(items))
    })
)(OrderNewGame)

