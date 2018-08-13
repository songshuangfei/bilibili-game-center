import React,{Component} from "react"
import { NavLink } from "react-router-dom"
import  { Icon } from "antd"
import "./style.less"

class NavBar extends Component {
    constructor(){
        super();
        this.actClass = "nav-icon nav-icon-act"
        this.norClass = "nav-icon"
    }

    isActive(pathNow,routePath){
        if(pathNow == routePath){
            return true;
        }
        return false;
    }

    render(){
        var path = window.location.pathname;
        console.log(path)
        // console.log("nav-ico "+this.isActive(path,"/")?this.actClass:"")
        return(
            <div className="nav-bar">
                <nav>
                    <ul>
                        <li>
                            <div  className={this.isActive(path,"/")?this.actClass:this.norClass}>
                                <img src="dddd" alt=""/>
                                精选
                            </div>
                            <NavLink exact to="/"></NavLink>
                        </li>
                        <li>
                            <div className={this.isActive(path,"/rank")?this.actClass:this.norClass}>
                                <img src="dddd" alt=""/>
                                排行
                            </div>
                            <NavLink to="/rank" ></NavLink>
                        </li>
                        <li>
                            <div className={this.isActive(path,"/find")?this.actClass:this.norClass}>
                                <img src="dddd" alt=""/>
                                发现
                            </div>
                            <NavLink to="/find"></NavLink>
                        </li>
                        <li>
                            <div className={this.isActive(path,"/strategy")?this.actClass:this.norClass}>
                                <img src="dddd" alt=""/>
                                攻略
                            </div>
                            <NavLink to="/strategy"></NavLink>
                        </li>
                        <li>
                            <div className={this.isActive(path,"/my")?this.actClass:this.norClass}>
                                <img src="dddd" alt=""/>
                                我的
                            </div>
                            <NavLink to="/my"></NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export { NavBar }