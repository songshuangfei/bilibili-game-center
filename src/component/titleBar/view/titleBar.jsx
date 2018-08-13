import React,{Component} from "react"
import { Switch,Route } from "react-router-dom"

import "./style.less"

const HomeTitle = ()=>{
    return (
        <div>
            home title
        </div>
    )
}

const RankTitle = ()=>{
    return (
        <div>
            rank title
        </div>
    )
}

const FindTitle = ()=>{
    return (
        <div>
            find title
        </div>
    )
}

const StrategyTitle = ()=>{
    return (
        <div>
            Strategy title
        </div>
    )
}

const MyTitle = ()=>{
    return (
        <div>
            my title
        </div>
    )
}


class TitleBar extends Component {
    render(){
        return(
            <div className="title-bar">
                <Switch>
                    <Route exact path="/" component={HomeTitle}/>
                    <Route path="/rank" component={RankTitle}/>
                    <Route path="/find" component={FindTitle}/>
                    <Route path="/strategy" component={StrategyTitle}/>
                    <Route path="/my" component={MyTitle}/>
                </Switch>
            </div>
        )
    }
}

export { TitleBar }