import React,{Component} from "react"
import { Link } from "react-router-dom"
import  { navIcon } from "./icons"
import "./style.less"

//只有一级路由
class NavBar extends Component {
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
        // console.log(path)
        return(
            <div className="nav-bar">
                <nav>
                    <ul>
                        <li>
                            
                            <Link  to="/">
                                <div  className={this.setNavClass(path,"/")}>
                                    <img src={this.setNavIcon(path,"/")} alt=""/>{/*图标没对齐不是css问题，检查图标内容是否在图片正中央*/}
                                    精选
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="/rank" >
                                <div className={this.setNavClass(path,"/rank")}>
                                    <img src={this.setNavIcon(path,"/rank")} alt=""/>
                                    排行
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="/find">
                                <div className={this.setNavClass(path,"/find")}>
                                    <img src={this.setNavIcon(path,"/find")} alt=""/>
                                    发现
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="/strategy">
                                <div className={this.setNavClass(path,"/strategy")}>
                                    <img src={this.setNavIcon(path,"/strategy")} alt=""/>
                                    攻略
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="/my">
                                <div className={this.setNavClass(path,"/my")}>
                                    <img src={this.setNavIcon(path,"/my")} alt=""/>
                                    我的
                                </div>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export { NavBar }