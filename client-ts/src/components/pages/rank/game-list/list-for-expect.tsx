import * as React from 'react';
import GameListItem from "src/components/commonComponent/game-list-item";
import AutoLoadList from "src/components/commonComponent/auto-load-list";
import {setRankExpectGameList} from "src/action/actions";
import { connect } from 'react-redux';
import { newGameRankApi } from "src/api-request/rank"


class GameListForExpect extends React.Component {
    public props:{items:newGameListItemI[],setRankExpectGameList:(items:newGameListItemI[])=>void}

    public request = (succeed:(data:newGameListItemI[])=>void,failed:(err:requestErrorI)=>void) => {
        // console.log("request start")
        const size = 10;
        const page = Math.ceil(this.props.items.length/size);
        newGameRankApi(page,size,data=>{
            succeed(data);
        },(err)=>{
            failed(err);
        })
    }

    public requestSucceedAction = (data:newGameListItemI[])=>{
        this.props.setRankExpectGameList(data)
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
                            ranking={i+1}
                            showIndex={true}
                            orderNum={v.orderNum}
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
        items: state.rankExpectGameList
    }),(dispatch:any) => ({
        setRankExpectGameList: (items:newGameListItemI[]) => dispatch(setRankExpectGameList(items))
    })
)(GameListForExpect)