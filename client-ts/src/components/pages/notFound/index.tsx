import * as React from "react";
import { RouteComponentProps} from "react-router-dom";
import "./notfound.css";


function NotFound (props:RouteComponentProps){
    return(
        <div className="not-found-page">
            <p className="info">
                这个页面没做～(￣▽￣～)
            </p>
            <p className="path">
                path: {props.location.pathname}
            </p>
            <div className="back-btn" onClick={props.history.goBack}>
                返回
            </div>
        </div>
    )
}

export default NotFound;