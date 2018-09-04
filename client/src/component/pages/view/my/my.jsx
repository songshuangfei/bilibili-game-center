import React,{ Component } from "react"
import User from "./user"
import "./style.less"

class My extends Component {
    render(){
        return(
            <div className="my">
                <User/>
            </div>
        )
    }
}

export { My }