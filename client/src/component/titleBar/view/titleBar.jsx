import React,{Component} from "react"
import { Switch,Route } from "react-router-dom"
import { Link } from "react-router-dom"
import titleIcon from "./icons"

import "./style.less"

var titleLink = {
    masterStation:"http://bilibili.com",//首页返回按钮
    homePage:"/",//首页链接
    msg:"",
    search:"",
    more:"",
    myDownload:"",
}

const HomeTitle = ()=>{
    return (
        <div className="title-inner home-t">
            <div className="page-name">首页</div>
            <a className="left-link" href={titleLink.masterStation}>
                <img src={titleIcon.back} alt=""/>
            </a>
            <a className="right-link" href={titleLink.search}>
                <img src={titleIcon.search} alt=""/>
            </a>
            <a className="right-link" href={titleLink.msg}>
                <img src={titleIcon.msg} alt=""/>
            </a>
        </div>
    )
}

const RankTitle = ()=>{
    return (
        <div className="title-inner">
            <div className="page-name">排行</div>
            <Link className="left-link" to={titleLink.homePage}>
                <img src={titleIcon.back} alt=""/>
            </Link>
            <a className="right-link" href={titleLink.search}>
                <img src={titleIcon.search} alt=""/>
            </a>
        </div>
    )
}

const FindTitle = ()=>{
    return (
        <div className="title-inner">
            <div className="page-name">发现</div>
            <Link className="left-link" to={titleLink.homePage}>
                <img src={titleIcon.back} alt=""/>
            </Link>
            <a className="right-link" href={titleLink.search}>
                <img src={titleIcon.search} alt=""/>
            </a>
        </div>
    )
}

const StrategyTitle = ()=>{
    return (
        <div className="title-inner">
            <div className="page-name">攻略</div>
            <Link className="left-link" to={titleLink.homePage}>
                <img src={titleIcon.back} alt=""/>
            </Link>
            <a className="right-link" href={titleLink.search}>
                <img src={titleIcon.search} alt=""/>
            </a>
            <a className="right-link" href={titleLink.more}>
                <img src={titleIcon.more} alt=""/>
            </a>
        </div>
    )
}

const MyTitle = ()=>{
    return (
        <div className="title-inner">
            <div className="page-name">我的</div>
            <Link className="left-link" to={titleLink.homePage}>
                <img src={titleIcon.back} alt=""/>
            </Link>
            <a className="right-link" href={titleLink.myDownload}>
                <img src={titleIcon.myDownload} alt=""/>
            </a>
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