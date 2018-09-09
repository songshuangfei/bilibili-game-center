import React,{Component} from "react"
import { Switch,Route } from "react-router-dom"
import { Link } from "react-router-dom"
import titleIcon from "./icons"

import "./style.less"

var titleLink = {
    masterStation:"http://bilibili.com",//首页返回按钮
    homePage:"/",//首页链接
    msg:"/msg",
    search:"/search",
    more:"",
    myDownload:"",
    prevMainPage:"/",
}


const HomeTitle = ()=>{
    return (
        <div className="title-inner home-t">
            <div className="page-name">首页</div>
            <a className="left-link" href={titleLink.masterStation}>
                <img src={titleIcon.back} alt=""/>
            </a>
            <Link className="right-link" to={titleLink.search}>
                <img src={titleIcon.search} alt=""/>
            </Link>
            <Link className="right-link" to={titleLink.msg}>
                <img src={titleIcon.msg} alt=""/>
            </Link>
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
            <Link className="right-link" to={titleLink.search}>
                <img src={titleIcon.search} alt=""/>
            </Link>
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
            <Link className="right-link" to={titleLink.search}>
                <img src={titleIcon.search} alt=""/>
            </Link>
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
            <Link className="right-link" to={titleLink.search}>
                <img src={titleIcon.search} alt=""/>
            </Link>
            <Link className="right-link" to={titleLink.more}>
                <img src={titleIcon.more} alt=""/>
            </Link>
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
            <Link className="right-link" to={titleLink.myDownload}>
                <img src={titleIcon.myDownload} alt=""/>
            </Link>
        </div>
    )
}


const MsgTitle = ()=>{
    return (
        <div className="title-inner msg-t">
            <div className="page-name">我的消息</div>
            <Link className="left-link" to={titleLink.homePage}>
                <img src={titleIcon.back} alt=""/>
            </Link>
        </div>
    )
}

class SearchTitle extends Component {
    constructor(){
        super();
        this.state = {
            value:""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.clear = this.clear.bind(this)
    }

    handleChange(e){
        console.log("c")
        this.setState({
            value:e.target.value
        })
    }

    handleSubmit(e){
        console.log("sumbit")
        e.preventDefault()
        this.setState({
            value:""
        })
    }

    clear(){
        this.setState({
            value:""
        })
    }

    render(){
        return(
            <div className="title-inner search-t">
                <form className="search-form" onSubmit={this.handleSubmit} ref={this.getForm}>
                    <input className="search-input" type="text" value={this.state.value} onChange={this.handleChange} placeholder="搜索游戏..."/>
                    <div className="clear-input">
                        {this.state.value?<img src={titleIcon.searchClear} onTouchEnd={this.clear} alt="clear" />:"" }
                    </div>
                    <input className="search-sum" type="submit" value="" style={{backgroundImage:`url(${titleIcon.search})`}}/>
                </form>
                <Link className="left-link" to={titleLink.prevMainPage}>
                    <img src={titleIcon.back} alt=""/>
                </Link>
            </div>
        )
    }
}

class TitleBar extends Component {
    render(){
    if(window.location.pathname !== "/search"){
        titleLink.prevMainPage = window.location.pathname;
    }
        return(
            <div className="title-bar">
                <Switch>
                    <Route exact path="/" component={HomeTitle}/>
                    <Route path="/rank" component={RankTitle}/>
                    <Route path="/find" component={FindTitle}/>
                    <Route path="/strategy" component={StrategyTitle}/>
                    <Route path="/my" component={MyTitle}/>
                    <Route path="/msg" component={MsgTitle}/>
                    <Route path="/search" component={SearchTitle}/>
                </Switch>
            </div>
        )
    }
}

export { TitleBar }