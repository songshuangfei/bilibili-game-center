import * as React from "react";
import "./find-game-class.css";
import HorizontalScroll from 'src/components/commonComponent/horizontal-scroll';
import GameIcon from 'src/components/commonComponent/game-icon';
import LinkTitle from 'src/components/commonComponent/link-title';
import AutoLoadList from "src/components/commonComponent/auto-load-list";
import {setFindGameClassify} from "src/action/actions";
import { connect } from 'react-redux';
import { findGameClassifyApi } from "src/api-request/find"

const GameItem = (props:{gameName:string,gameIconSrc:string,gameId:string})=>{
    return(
        <li className="game-class-game-item">
            <GameIcon gameIconSrc={props.gameIconSrc} gameId={props.gameId} gameName={props.gameName}/>
        </li>
    )
}

const GameClassItem = (props:findGameClassifyItemI)=>{
    return(
        <div className="game-class-item">
            <LinkTitle title={props.classifyName} link={props.classifyId===""?"#":`/gameclassify?id=${props.classifyId}`} backgroundColor="#fff"/>
            <HorizontalScroll backgroundColor="#fff">
                {
                    props.games.map(v=>(
                        <GameItem 
                            key={v.gameId}
                            gameIconSrc={v.gameIconSrc}
                            gameId={v.gameId}
                            gameName={v.gameName}
                        />
                    ))
                }
            </HorizontalScroll>
        </div>
    )
}

class FindGameClassify extends React.Component {
	public props:{items:findGameClassifyItemI[],setFindGameClassify:(items:findGameClassifyItemI[])=>void}
    public request = (succeed:(data:findGameClassifyItemI[])=>void,failed:(err:any)=>void) => {
        const size = 4;
        const page = Math.ceil(this.props.items.length/size)+1;
        findGameClassifyApi(page,size,data=>{
            succeed(data);
        },err=>{
            failed(err);
        })
    }

    public requestSucceedAction = (data:findGameClassifyItemI[])=>{
        this.props.setFindGameClassify(data)
    }

    public requestFailedAction = (err:any)=>{
        console.log(err.statusCode," ",err.msg)
    }
    public render(){
        return(
            <div className="find-game-class">
                
                <AutoLoadList 
                    request={this.request} 
                    requestSucceedAction={this.requestSucceedAction}
                    requestFailedAction={this.requestFailedAction}
                >
                    {
                        this.props.items.map(v=>(
                            <GameClassItem 
                                key={v.classifyId}
                                classifyName={v.classifyName}
                                classifyId={v.classifyId}
                                games={v.games}
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
        items: state.findGameClassify
    }),(dispatch:any) => ({
        setFindGameClassify: (items:findGameClassifyItemI[]) => dispatch(setFindGameClassify(items))
    })
)(FindGameClassify)