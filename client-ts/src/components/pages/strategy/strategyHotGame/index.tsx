import * as React from 'react';
import HorizontalScroll from "src/components/commonComponent/horizontal-scroll";
import {Link} from "react-router-dom";
import {ImgLoadingIcon} from "src/components/icons";
import "./strategy-hot-game.css";
import ImgOnlineSrc from 'src/components/commonComponent/img-online-src';
import { connect } from "react-redux";
import { setStrategyHotGame } from "src/action/actions";
import { strategyHotGameApi } from "src/api-request/strategy"

const GamelItem = (props:{coverImgSrc:string,GameId:string})=>{
    return(
        <li className="game-item">
            <div className="cover" style={{backgroundImage:`url(${ImgLoadingIcon})`}}>
                <ImgOnlineSrc src={props.coverImgSrc} alt=""/>
                <Link to={props.GameId===""?"#":`/gamestrg?gameid=${props.GameId}`} />
            </div>
        </li>
    )
}

class StrategyHotGame extends React.Component {
    public props:{items:bannerWithIdItemI[], setStrategyHotGame:(items: bannerWithIdItemI[])=>void}

    public componentDidMount(){
        if(this.props.items.length !== 0){
            return;
        }
        const that =this;
        strategyHotGameApi(data=>{
            that.props.setStrategyHotGame(data);
        })
    }
    public render(){
        return(
            <div className="strategy-hot-game">
                <HorizontalScroll backgroundColor="none">
                    {
                        this.props.items.length === 0?
                        [1,2,3,4,5,6,].map(v=>(
                            <GamelItem key={v} coverImgSrc="" GameId=""/>
                        )):
                        this.props.items.map(v=>(
                            <GamelItem key={v.id} coverImgSrc={v.imgSrc} GameId={v.id}/>
                        ))
                    }
                </HorizontalScroll>
            </div>
        )
    }
}

export default connect(
    (state:any) => ({
        items: state.strategyHotGame
    }),(dispatch:any) => ({
        setStrategyHotGame: (items:bannerWithIdItemI[]) => dispatch(setStrategyHotGame(items))
    })
)(StrategyHotGame)