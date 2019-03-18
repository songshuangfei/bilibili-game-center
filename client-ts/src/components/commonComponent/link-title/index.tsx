import * as React from "react";
import { Link } from "react-router-dom";
import { rightIcon } from "src/components/icons"
import "./link-title.css";

const LinkTitle = (props:{title:string,link:string,backgroundColor:string}) => {
    return(
        <div className="link-title" style={{backgroundColor:props.backgroundColor}}>
            <div className="title-name">
                {props.title}
            </div>
            <Link to={props.link}>
                <img src={rightIcon} alt=""/>
            </Link>
        </div>
    )
}

export default LinkTitle;