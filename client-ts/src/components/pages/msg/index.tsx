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
        loadingState:loadingState,
        isLoaded:boolean,
        tabIndex:number,
        reply:msgItemI[],
        attitude:msgItemI[],
        inform:msgItemI[]
    } = {
        loadingState:loadingState.ready,
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
        this.setState({
            loadingState:loadingState.loading
        })
        setTimeout(() => {
            const f = Math.random();
            if(f>0.2){
                const data2:msgItemI[]=[]
                const data1:msgItemI[]=[
                    {senderName:"nem",
                    senderHeadsrc:"//file.suafe.cn/blgc/userhead/6.jpg",
                    sendTime:"4-12",
                    msgContent:"hello!hello?",
                    senderId:"01"
                },
                    {senderName:"emm",
                    senderHeadsrc:"//file.suafe.cn/blgc/userhead/5.jpg",
                    sendTime:"4-11",
                    msgContent:"Hi!",
                    senderId:"01"
                },
                    {senderName:"archer",
                    senderHeadsrc:"//file.suafe.cn/blgc/userhead/4.jpg",
                    sendTime:"4-11",
                    msgContent:"Hi!",
                    senderId:"01"
                },
                    {senderName:"saber",
                    senderHeadsrc:"//file.suafe.cn/blgc/userhead/3.jpg",
                    sendTime:"4-11",
                    msgContent:"Hi!",
                    senderId:"01"
                },
                ]
                const data3:msgItemI[]=[]
                this.setState({
                    isLoaded:true,
                    loadingState:loadingState.ready,
                    reply:data1,
                    attitude:data2,
                    inform:data3
                })
            }else{
                // do nothing
                this.setState({
                    isLoaded:false,
                    loadingState:loadingState.failed,
                })
            }
            
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
                        <ListAutoLoadingShowBoard now={this.state.loadingState} failedRetry={this.request}/>
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