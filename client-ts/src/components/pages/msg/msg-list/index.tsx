import * as React from 'react';
import "./msg-page-list.css";
import {nomsgIcon} from "src/components/icons";
import ImgOnlineSrc from "src/components/commonComponent/img-online-src";
import { ImgLoadingIcon } from "src/components/icons/"

const MsgItem = (props:msgItemI)=>{
    return(
        <div className="msg-item">
            <div className="head-img" style={{backgroundImage:`url(${ImgLoadingIcon})`}}>
                <ImgOnlineSrc src={props.senderHeadsrc}/>
            </div>
            <div className="content">
                <div className="sender-name">
                    {props.senderName}
                </div>
                <div className="msg-summary">
                    {props.msgContent}
                </div>
            </div>
            <div className="time-num">
                <div className="time">
                    {props.sendTime}
                </div>
                <div className="num">
                    <div/>
                </div>
            </div>
        </div>
    )
}
const MsgList = (props:{msgs:msgItemI[]}) => {
    return(
        <div className="msg-list">
            {
                props.msgs.length===0?
                <img className="no-msg-icon" src={nomsgIcon} alt=""/>:
                props.msgs.map(v=>
                    <MsgItem 
                        key={v.senderId}
                        msgContent={v.msgContent}
                        sendTime={v.sendTime}
                        senderName={v.senderName}
                        senderHeadsrc={v.senderHeadsrc}
                        senderId={v.senderId}
                    />
                )
            }
        </div>
    )
}

export default  MsgList;
