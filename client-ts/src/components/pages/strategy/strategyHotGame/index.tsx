import * as React from 'react';
import HorizontalScroll from "src/components/commonComponent/horizontal-scroll";
import {Link} from "react-router-dom";
import {ImgLoadingIcon} from "src/components/icons";
import "./strategy-hot-game.css";

const GamelItem = (props:{coverImgSrc:string,GameId:string})=>{
    return(
        <li className="game-item">
            <div className="cover" style={{backgroundImage:`url(${ImgLoadingIcon})`}}>
                <img src={props.coverImgSrc} alt=""/>
                <Link to={`/strgame/${props.GameId}`} />
            </div>
        </li>
    )
}
class StrategyHotGame extends React.Component {
    public render(){

        const games = [
            {coverImgSrc:"//file.suafe.cn/blgc/gamecover/1.jpg",GameId:"003"},
            {coverImgSrc:"//file.suafe.cn/blgc/gamecover/4.jpg",GameId:"004"},
            {coverImgSrc:"//file.suafe.cn/blgc/gamecover/3.jpg",GameId:"001"},
            {coverImgSrc:"//file.suafe.cn/blgc/gamecover/2.jpg",GameId:"005"},
            {coverImgSrc:"//file.suafe.cn/blgc/gamecover/1.jpg",GameId:"006"},
        ]
        return(
            <div className="strategy-hot-game">
                <HorizontalScroll backgroundColor="none">
                    {
                        games.map(v=>(
                            <GamelItem key={v.GameId} coverImgSrc={v.coverImgSrc} GameId={v.GameId}/>
                        ))
                    }
                </HorizontalScroll>
            </div>
        )
    }
}

export default StrategyHotGame;