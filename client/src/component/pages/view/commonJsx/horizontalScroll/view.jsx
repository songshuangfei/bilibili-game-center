import React from "react"
import './style.less'

const HorizontalScroll = (props) =>{
    var color = props.style?props.style.background:''
    return(
        <div className="horizontal-scroll">
            <div className="contaiber" style={{background:color}}>
                <ul>
                    {props.children}
                </ul>
            </div>
        </div>
    )
}

export default HorizontalScroll;