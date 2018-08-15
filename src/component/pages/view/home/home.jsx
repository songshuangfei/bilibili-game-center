import React,{ Component } from "react"

import Carousel from   "./full-screen-carousel" 
import "./style.less"

class Home extends Component {
    render(){
        return(
            <div className="home">
                <Carousel/>
                
            </div>
        )
    }
}

export { Home }