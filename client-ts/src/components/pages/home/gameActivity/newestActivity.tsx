import * as React from 'react';
import ActivityItems from "./activityItems";
import {setHomeNewestActivity} from "src/action/actions";
import { connect } from 'react-redux';

class NewestActivity extends React.Component {
    public props: {item:homeActivityItemI,setHomeNewestActivity:(item:homeActivityItemI) =>any};

    public componentDidMount(){
        if(JSON.stringify(this.props.item) !== "{}"){
            return;
        }
        // console.log("get home newest activity game")

        const that =this;
        setTimeout(() => {
            const activity:homeActivityItemI = {
                activityId:"12",
                coverSrc:"//file.suafe.cn/blgc/gamenews/2.png",
                gameIconSrc:"//file.suafe.cn/blgc/gameicon/bh3.png",
                gameName:"崩坏三",
                activityIntro:"空之律者觉醒",
                gameScore:"8.4",
                gameId:"002"
            }
            that.props.setHomeNewestActivity(activity);
        }, 3000);
    }
    public render(){
        return(
            <div>
                {
                    JSON.stringify(this.props.item) === "{}"?
                    <ActivityItems 
                        activityId=""
                        coverSrc=""
                        gameIconSrc=""
                        gameName="bilibili"
                        gameScore="0"
                        activityIntro="bilibili"
                        gameId=""
                    />:
                    <ActivityItems 
                        activityId={this.props.item.activityId}
                        coverSrc={this.props.item.coverSrc}
                        gameIconSrc={this.props.item.gameIconSrc}
                        gameName={this.props.item.gameName}
                        gameScore={this.props.item.gameScore}
                        activityIntro={this.props.item.activityIntro}
                        gameId={this.props.item.gameId}
                    />
                }
                
            </div>
        )
    }
}

export default connect(
    (state:any) => ({
        item: state.homeNewestActivity
    }),(dispatch:any) => ({
        setHomeNewestActivity: (item:homeActivityItemI) => dispatch(setHomeNewestActivity(item))
    })
)(NewestActivity)