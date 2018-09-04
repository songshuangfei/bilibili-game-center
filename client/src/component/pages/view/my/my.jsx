import React,{ Component } from "react"
import User from "./user"
import Menu from "./menu"
import "./style.less"

class My extends Component {
    componentWillUnmount(){
        var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
        window.appDataCache.my.st = scrollTop;//保存页面位置
        document.documentElement.scrollTop = document.body.scrollTop = 0; 
    }

    componentDidMount(){
        var st = window.appDataCache.my.st
        if(st){
            document.documentElement.scrollTop = document.body.scrollTop = st//设置页面位置
        }
    }
    render(){
        return(
            <div className="my">
                <User/>
                <Menu/>
            </div>
        )
    }
}

export { My }