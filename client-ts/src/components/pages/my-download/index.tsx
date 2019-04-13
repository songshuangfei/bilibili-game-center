import * as React from 'react';
import { nodownloadIcon } from "src/components/icons";
import "./my-download.css";

class MyDownload extends React.Component {
    public render(){
        return(
            <div className="my-download">
                <img className="no-dwn-icon" src={nodownloadIcon} alt=""/>
            </div>
        )
    }
}

export default MyDownload;