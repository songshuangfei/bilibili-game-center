import * as React from 'react';
import pageScroll from "src/components/commonFunc/scroll";
import "./msg-page.css";

import {
    ListAutoLoadingShowBoard,
    loadingState
} from "src/components/commonComponent/list-auto-loading-show-board";
import MsgList from "./msg-list"


class MsgPage extends React.Component {
    public state:{
        isLoaded:boolean,
        tabIndex:number,
        reply:msgItemI[],
        attitude:msgItemI[],
        inform:msgItemI[]
    } = {
        isLoaded:false,
        tabIndex:0,
        reply:[],
        attitude:[],
        inform:[]
    }

    private tabs = ["reply","attitude","inform"];

    public tabTouch(nextIndex:number){
		if(this.state.tabIndex === nextIndex){
            return;
		}
		pageScroll.setPageScrollWithValue(0);// 切换要回到顶部
        this.setState({
            tabIndex:nextIndex
        })
    }
    
    public request = () => {
        console.log("reqing")
        setTimeout(() => {
            const data1:msgItemI[]=[]
            const data2:msgItemI[]=[
                {senderName:"string",
                senderHeadsrc:"string",
                sendTime:"string",
                msgContent:"string"},
                {senderName:"string",
                senderHeadsrc:"string",
                sendTime:"string",
                msgContent:"string"},
                {senderName:"string",
                senderHeadsrc:"string",
                sendTime:"string",
                msgContent:"string"},
            ]
            const data3:msgItemI[]=[]
            this.setState({
                isLoaded:true,
                reply:data1,
                attitude:data2,
                inform:data3
            })
        }, 1000);

    }

    public componentDidMount() {
        this.request();
    }

    public render(){
        const tabNowIndex = this.state.tabIndex;
        const markLeft = 33.3*tabNowIndex + 16.7 +"%";
        return(
            <div>
                <div className="msg-content">
                    {
                        this.state.isLoaded?
                        <MsgList msgs={this.state[this.tabs[tabNowIndex]]}/>:
                        <ListAutoLoadingShowBoard now={loadingState.loading} failedRetry={this.request}/>
                    }
                </div>
                <div className="msg-type-tabs">
                    <div className={`tab ${tabNowIndex===0?"tab-active":''}`}  onClick={()=>{this.tabTouch(0)}}>回复</div>
                    <div className={`tab ${tabNowIndex===1?"tab-active":''}`} onClick={()=>{this.tabTouch(1)}}>态度</div>
                    <div className={`tab ${tabNowIndex===2?"tab-active":''}`} onClick={()=>{this.tabTouch(2)}}>通知</div>
                    <div className="mark" style={{left:markLeft}}/>
                </div>
            </div>
        )
    }
}

export default MsgPage;