import React,{Component} from "react"
import {
    Link,
    Switch,
    Route,
  } from 'react-router-dom'
import  { navIcon } from "./icons"
import "./style.less"


//只有一级路由
class NavBarInner extends Component {
    constructor(){
        super();
        this.actClass = ""
        this.norClass = ""
    }

    setNavClass(pathNow,routePath){
        if(pathNow === routePath){//当前path等于对应路由时则返回包含active的class
            return "nav-icon nav-icon-act";
        }
        return "nav-icon";
    }

    setNavIcon(pathNow,routePath){
        //这里的pathNow已经被react-router默认小写化
        var isPathNow = (pathNow===routePath);
        switch (routePath) {
        case "/":
            return isPathNow?navIcon.homeAct:navIcon.home;
        case "/rank": 
            return isPathNow?navIcon.rankAct:navIcon.rank;
        case "/find": 
            return isPathNow?navIcon.findAct:navIcon.find;
        case "/strategy": 
            return isPathNow?navIcon.strategyAct:navIcon.strategy;
        case "/my": 
            return isPathNow?navIcon.myAct:navIcon.my;
        default:
            return ""
        }
    }

    render(){
        var path = window.location.pathname;
        return(
            <div className="nav-bar">
                <nav>
                    <ul>
                        <li>
                            <div  className={this.setNavClass(path,"/")}>
                                <img src={this.setNavIcon(path,"/")} alt=""/>{/*图标没对齐不是css问题，检查图标内容是否在图片正中央*/}
                                精选
                            </div>
                            <Link  to="/"></Link>
                        </li>
                        <li>
                            <div className={this.setNavClass(path,"/rank")}>
                                <img src={this.setNavIcon(path,"/rank")} alt=""/>
                                排行
                            </div>
                            <Link to="/rank" ></Link>
                        </li>
                        <li>
                            <div className={this.setNavClass(path,"/find")}>
                                <img src={this.setNavIcon(path,"/find")} alt=""/>
                                发现
                            </div>
                            <Link to="/find"></Link>
                        </li>
                        <li>
                            <div className={this.setNavClass(path,"/strategy")}>
                                <img src={this.setNavIcon(path,"/strategy")} alt=""/>
                                攻略
                            </div>
                            <Link to="/strategy"></Link>
                        </li>
                        <li>
                            <div className={this.setNavClass(path,"/my")}>
                                <img src={this.setNavIcon(path,"/my")} alt=""/>
                                我的
                            </div>
                            <Link to="/my"></Link>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}


const NavOut = ()=>{
   return (
    <Switch>
        <Route exact path="/" component={NavBarInner}/>
        <Route path="/rank" component={NavBarInner}/>
        <Route path="/find" component={NavBarInner}/>
        <Route path="/strategy" component={NavBarInner}/>
        <Route path="/my" component={NavBarInner}/>
    </Switch>
   ) 
}




export default NavOut;