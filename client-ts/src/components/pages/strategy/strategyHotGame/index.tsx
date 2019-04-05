import * as React from 'react';
import HorizontalScroll from "src/components/commonComponent/horizontal-scroll";
import {Link} from "react-router-dom";
import {ImgLoadingIcon} from "src/components/icons";
import "./strategy-hot-game.css";
import ImgOnlineSrc from 'src/components/commonComponent/img-online-src';
import { connect } from "react-redux";
import { setStrategyHotGame } from "src/action/actions";

const GamelItem = (props:{coverImgSrc:string,GameId:string})=>{
    return(
        <li className="game-item">
            <div className="cover" style={{backgroundImage:`url(${ImgLoadingIcon})`}}>
                <ImgOnlineSrc src={props.coverImgSrc} alt=""/>
                <Link to={props.GameId===""?"#":`/gamestrg?id=${props.GameId}`} />
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
        console.log("get home strategy hot game")

        const that =this;
        setTimeout(() => {
            const games:bannerWithIdItemI[] = [
                {imgSrc:"//file.suafe.cn/blgc/gamecover/1.jpg",id:"003"},
                {imgSrc:"//file.suafe.cn/blgc/gamecover/4.jpg",id:"004"},
                {imgSrc:"//file.suafe.cn/blgc/gamecover/3.jpg",id:"001"},
                {imgSrc:"//file.suafe.cn/blgc/gamecover/2.jpg",id:"005"},
                {imgSrc:"//file.suafe.cn/blgc/gamecover/1.jpg",id:"006"},
            ]
            that.props.setStrategyHotGame(games);
        }, 3000);
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