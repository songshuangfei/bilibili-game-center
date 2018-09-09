import React,{Component} from "react"
import "./style.less"
import {nodownloadIcon} from "../../icons"

class DownloadManager extends Component {
    render(){
        return(
            <div className="download-manager">
                <div className="no-download">
                    <img className="no-icon" src={nodownloadIcon} alt=""/>
                </div>
            </div>
        )
    }
}

export default DownloadManager;