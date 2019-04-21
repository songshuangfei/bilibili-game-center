import * as React from 'react';
import GameListItem from "src/components/commonComponent/game-list-item";
import AutoLoadList from "src/components/commonComponent/auto-load-list";
import {setRankGoodGameList} from "src/action/actions";
import { connect } from 'react-redux';
import { gameRankApi, rankApiTypes } from "src/api-request/rank"


class GameListForGood extends React.Component {
    public props:{items:gameListItemI[],setRankGoodGameList:(items:gameListItemI[])=>void}
    
    public request = (succeed:(data:gameListItemI[])=>void,failed:(err:requestErrorI)=>void) => {
        // console.log("request start")
        const size = 10;
        const page = Math.ceil(this.props.items.length/size);
        gameRankApi(rankApiTypes.good,page,size,data=>{
            succeed(data);
        },(err)=>{
            failed(err);
        })
    }

    public requestSucceedAction = (data:gameListItemI[])=>{
        this.props.setRankGoodGameList(data)
        // console.log("succeed\n","data:",data)
    }

    public requestFailedAction = (err:requestErrorI)=>{
        console.log(err.statusCode," ",err.msg)
        // console.log("need not do anything")
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
        items: state.rankGoodGameList
    }),(dispatch:any) => ({
        setRankGoodGameList: (items:gameListItemI[]) => dispatch(setRankGoodGameList(items))
    })
)(GameListForGood)