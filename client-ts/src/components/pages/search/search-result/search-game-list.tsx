import * as React from "react";
import GameListItem from "src/components/commonComponent/game-list-item";
import NoLinkTitle from "src/components/commonComponent/no-link-title";

function SearchGameList (props:{games:gameListItemI[]}){
    return(
        <div style={{marginTop:"0.8rem"}}>
            <NoLinkTitle title="相关游戏" backgroundColor="#fff" showBlueMark={true}/>
            {
                props.games.map((v,i)=>(
                    <GameListItem 
                        key={v.gameId}
                        gameName={v.gameName}
                        gameIconSrc={v.gameIconSrc}
                        gameId={v.gameId}
                        gameSize={v.gameSize}
                        gameType={v.gameType}
                        ranking={i+1}
                        showIndex={false}
                        score={v.score}
                    />
                ))
            }
        </div>
    )
}

export default SearchGameList;