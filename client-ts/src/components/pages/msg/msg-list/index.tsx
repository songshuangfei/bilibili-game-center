import * as React from 'react';
import "./msg-page-list.css";
import {nomsgIcon} from "src/components/icons"

const MsgItem = (props:msgItemI)=>{
    return(
        <div className="msg-item">
            {props.msgContent}
            {props.sendTime}
            {props.senderName}
            {props.senderHeadsrc}
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
                        key={v.senderHeadsrc}
                        msgContent={v.msgContent}
                        sendTime={v.sendTime}
                        senderName={v.senderName}
                        senderHeadsrc={v.senderHeadsrc}
                    />
                )
            }
        </div>
    )
}

export default  MsgList;
