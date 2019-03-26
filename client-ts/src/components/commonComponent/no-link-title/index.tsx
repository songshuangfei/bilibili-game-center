import * as React from "react";
import "./no-link-title.css";

const NoLinkTitle = (props:{title:string,backgroundColor:string}) => {
    return(
        <div className="common-no-link-title" style={{backgroundColor:props.backgroundColor}}>
            <div className="title-name">
                {props.title}
            </div>
        </div>
    )
}

export default NoLinkTitle;