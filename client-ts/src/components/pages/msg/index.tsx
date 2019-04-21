import * as React from 'react';
import pageScroll from "src/components/commonFunc/scroll";
import "./msg-page.css";
import {
    ListAutoLoadingShowBoard,
    loadingState
} from "src/components/commonComponent/list-auto-loading-show-board";
import MsgList from "./msg-list"
import {msgApi} from "src/api-request/msg"


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
        });

        const that = this;
        msgApi(data=>{
            that.setState({
                isLoaded:true,
                loadingState:loadingState.ready,
                reply:data.reply,
                attitude:data.attitude,
                inform:data.inform
            })
        })
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