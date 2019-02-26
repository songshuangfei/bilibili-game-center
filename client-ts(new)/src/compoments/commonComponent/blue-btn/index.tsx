import * as React from 'react';
import {Link} from "react-router-dom";
import "./blue-btn.css";

const BlueBtn = (props:{width:string,height:string,name:string,link:string}) => {
    return(
        <div 
            className="blue-btn" 
            style={{
                height:props.height,
                lineHeight:props.height,
                width:props.width,
            }}
        >
            <Link to={props.link}>
                {props.name}
            </Link>
        </div>        
    )
}

export default BlueBtn;