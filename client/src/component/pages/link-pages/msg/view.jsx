import React,{Component} from "react"
import "./style.less"

import {nomsgIcon} from "../../icons"

class MsgPage extends Component {
    constructor(){
        super();
        this.state = {
            now:"reply"
        }
        this.tabs = ["reply","attitude","notice"];
        this.changeTab =this.changeTab.bind(this);
    }

    setTab(to){
        this.setState({
            now:to
        })
    }

    changeTab(i){
        let tabs = this.tabs;
        this.setState({
            now:tabs[i]
        })
    }

    render(){
        let left = this.tabs.indexOf(this.state.now)*16.66*2 + 16.66;
        return(
            <div className="msg-page">
                <div className="msg-list">
                    <img className="no-msg-icon" src={nomsgIcon} alt=""/>
                </div>
                <div className="msg-tab">
                    <div className="tab" onTouchEnd={()=>this.changeTab(0)}>回复</div>
                    <div className="tab" onTouchEnd={()=>this.changeTab(1)}>态度</div>
                    <div className="tab" onTouchEnd={()=>this.changeTab(2)}>通知</div>
                    <div className="tab-mark" style={{left:`${left}%`}}></div>
                </div>
            </div>
            
        )
    }
}

export default MsgPage;