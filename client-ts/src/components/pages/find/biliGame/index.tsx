import * as React from 'react';
import HorizontalScroll from "src/components/commonComponent/horizontal-scroll";
import GameIcon from "src/components/commonComponent/game-icon";
import LinkTitle from "src/components/commonComponent/link-title";
import { connect } from "react-redux";
import { setFindBiliGame } from "src/action/actions";
import "./find-bili-game.css";
import {findBiliGamesApi} from "src/api-request/find";

const BiliGameItem = (props:{gameName:string,gameIconSrc:string,gameId:string})=>{
    return(
        <li className="find-bili-game-item">
            <GameIcon gameIconSrc={props.gameIconSrc} gameId={props.gameId} gameName={props.gameName}/>
        </li>
    )
}

class BiliGames extends React.Component {
    public props:{items:gameIconItemI[], setFindBiliGame:(items: gameIconItemI[])=>void}

    public componentDidMount(){
        if(this.props.items.length !== 0){
            return;
        }

        const that =this;
        findBiliGamesApi(data=>{
            that.props.setFindBiliGame(data);
        })

    }

    public render(){
        return(
            <div className="find-bili-game">
				<LinkTitle title='哔哩哔哩 (゜-゜)つロ 干杯~' link="/biligame" backgroundColor="#fff"/>
                <HorizontalScroll backgroundColor="#fff">
                    {
                        this.props.items.length === 0?
                        [1,2,3,4,5,6,7,8].map(v=>(
                            <BiliGameItem 
                                key={v}
                                gameName="bilibili"
                                gameIconSrc=""
                                gameId=""
                            />
                        )):
                        this.props.items.map(v=>(
                            <BiliGameItem
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
        items: state.findBiliGame
    }),(dispatch:any) => ({
        setFindBiliGame: (items:gameIconItemI[]) => dispatch(setFindBiliGame(items))
    })
)(BiliGames)


