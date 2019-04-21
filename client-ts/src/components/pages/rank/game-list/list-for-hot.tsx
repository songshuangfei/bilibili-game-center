import * as React from 'react';
import GameListItem from "src/components/commonComponent/game-list-item";
import AutoLoadList from "src/components/commonComponent/auto-load-list";
import {setRankHotGameList} from "src/action/actions";
import { connect } from 'react-redux';
import { gameRankApi, rankApiTypes } from "src/api-request/rank"

class GameListForHot extends React.Component {
    public props:{items:gameListItemI[],setRankHotGameList:(items:gameListItemI[])=>void}

    public request = (succeed:(data:gameListItemI[])=>void,failed:(err:requestErrorI)=>void) => {
        const size = 10;
        const page = Math.ceil(this.props.items.length/size);
        gameRankApi(rankApiTypes.hot,page,size,data=>{
            succeed(data);
        },(err)=>{
            failed(err);
        })
    }

    public requestSucceedAction = (data:gameListItemI[])=>{
        this.props.setRankHotGameList(data)
    }

    public requestFailedAction = (err:requestErrorI)=>{
        console.log(err.statusCode," ",err.msg)
    }

    public render(){
        return (
            <div className="rank-game-list">
                <AutoLoadList 
                    request={this.request} 
                    requestSucceedAction={this.requestSucceedAction}
                    requestFailedAction={this.requestFailedAction}
                >
                    {
                        this.props.items.map((v, i)=>(
                            <GameListItem 
                                key={v.gameId}
                                gameId={v.gameId}
                                gameName={v.gameName}
                                gameIconSrc={v.gameIconSrc}
                                gameType={v.gameType}
                                gameSize={v.gameSize}
                                score={v.score}
                                ranking={i+1}
                                showIndex={true}
                            />
                        ))
                    }
                </AutoLoadList>
            </div>
        )
    }
} 

export default connect(
    (state:any) => ({
        items: state.rankHotGameList
    }),(dispatch:any) => ({
        setRankHotGameList: (items:gameListItemI[]) => dispatch(setRankHotGameList(items))
    })
)(GameListForHot)