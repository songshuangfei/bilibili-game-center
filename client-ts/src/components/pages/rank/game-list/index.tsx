import * as React from 'react';
import "./rank-game-list.css";
import GameListForGood from "./list-for-good";
import GameListForExpect from "./list-for-expect";
import GameListForNew from "./list-for-new";
import GameListForHot from "./list-for-hot";

const RankGameList = (props:{listType:string})=>{
    switch (props.listType){
    case "hot":
        return <GameListForHot/>;
    case "expect":
        return <GameListForExpect/>;
    case "good":
        return <GameListForGood/>
    case "new":
        return <GameListForNew/>
    default:
        return <div/>
    }
}

export default RankGameList;