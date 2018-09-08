import React,{ Component } from "react"
import {menuIcon,rightIcon} from "../../../icons"
import axios from 'axios';

import "./style.less"

const MenuItem = (props)=>{
    return(
        <div className="menu-item">
            <img className="icon" src={props.icon} alt=""/> 
            <div className="name">{props.name}</div>
            <div className="num">{props.num}</div>
            <img className="right" src={rightIcon} alt=""/>
            <a href={props.link}> </a>
        </div>
    )
}

class Menu extends Component {
    constructor(){
        super();
        var cache = window.appDataCache.my.menu;
        this.state = {
            data:cache?cache:{},
        }
    }
    getData(){
        console.log("<Menu/>,无缓存,请求数据")
        var that =this;
        var CancelToken = axios.CancelToken;
        axios.get('/api/my/menu', {
            cancelToken: new CancelToken(function executor(c) {
                // executor 函数接收一个 cancel 函数作为参数
                that.requestCancel = c;
            })
        })
        .then((res)=>{
            that.setState({data:res.data.menu})
        })
        .catch((error)=>{
            console.log(error);
        });
    }

    componentDidMount(){
        if(this.state.data.update){
            return;
        }
        this.getData();
    }
    componentWillUnmount(){
        if(this.requestCancel){
            this.requestCancel("<Menu/>,组件卸载拦截请求数据");
        }
        window.appDataCache.my.menu = this.state.data;
    }
    render(){
        let data =this.state.data;
        return(
            <div className="my-menu">
                <div className="game-update">
                    <MenuItem icon={menuIcon.update} name="游戏更新" link="1" num={data.update}/>
                </div>
                <div className="menu-list">
                    <MenuItem icon={menuIcon.played} name="已玩游戏" link="2" num={data.played}/>
                    <MenuItem icon={menuIcon.bought} name="已购玩游戏" link="3" num={data.bought}/>
                    <MenuItem icon={menuIcon.booked} name="预约游戏" link="4" num={data.booked}/>                
                    <MenuItem icon={menuIcon.evaluate} name="我的评价" num={data.evaluate}/>
                    <MenuItem icon={menuIcon.collect} name="我的收藏" num={data.collect}/>
                    <MenuItem icon={menuIcon.gift} name="我的礼包" num={data.gift}/>
                    <MenuItem icon={menuIcon.bigGift} name="大会员礼包"/>
                </div>
                <div className="setting">
                    <MenuItem icon={menuIcon.setting} name="设置"/>
                </div>
            </div>
        )
    }
}

export default Menu;