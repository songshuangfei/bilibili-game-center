import * as React from "react";
import {loadingIcon} from "../icons"
import "./loading.css";

function PageLoading(){
    return(
        <div className="page-loading-icon">
          <img src={loadingIcon}/>
        </div>
    );
}

export default PageLoading;