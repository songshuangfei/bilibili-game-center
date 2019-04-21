import * as React from 'react';
import pageScroll from "src/components/commonFunc/scroll";
import {nomsgIcon} from "src/components/icons";
import "./msg-page.css";

class MsgPage extends React.Component {
    public state:{
        tabIndex:number,
    } = {
        tabIndex:0,
    }

    public tabTouch(nextIndex:number){
		if(this.state.tabIndex === nextIndex){
            return;
		}
		pageScroll.setPageScrollWithValue(0);// 切换要回到顶部
        this.setState({
            tabIndex:nextIndex
        })
    }

    public render(){
        const tabNowIndex = this.state.tabIndex;
        const markLeft = 33.3*tabNowIndex + 16.7 +"%";
        return(
            <div className="msg-page">
                <img className="no-msg-icon"src={nomsgIcon} alt=""/>
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