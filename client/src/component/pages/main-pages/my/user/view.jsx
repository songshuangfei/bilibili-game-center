import React,{ Component } from "react"
import {rightWhiteIcon,sexIcon,lvIcon} from "../../../icons"
import axios from 'axios';

import "./style.less"

class User extends Component {
    constructor(){
        super();
        var cache = window.appDataCache.my.user;
        this.state = {
            data:cache?cache:{}
        }
    }

    getData(){
        console.log("<User/>,无缓存,请求数据")
        var that =this;
        var CancelToken = axios.CancelToken;
        axios.get('/api/my/user', {
            cancelToken: new CancelToken(function executor(c) {
                // executor 函数接收一个 cancel 函数作为参数
                that.requestCancel = c;
            })
        })
        .then((res)=>{
            that.setState({data:res.data.user})
        })
        .catch((error)=>{
            console.log(error);
        });
    }

    componentDidMount(){
        if(this.state.data.back){
            console.log("<User/>,已经加载缓存数据,不请求数据")
            return;
        }
        this.getData();
    }

    componentWillUnmount(){
        if(this.requestCancel){
            this.requestCancel("<User/>,组件卸载拦截请求数据");
        }
        window.appDataCache.my.user = this.state.data//设置缓存
    }
    render(){
        var data = this.state.data;
        return(
            <div className="my-user">
                <div className="back">
                    <img className="back-img" src={data.back} alt=""/>
                    <div className="name">
                        <img className="user-head" src={data.headImg} alt=""/>
                        <div className="name-board">
                            <div className="user-name">{data.name}</div>
                            <img  className="sex" src={sexIcon[data.sex]} alt=""/>
                            <img  className="lv" src={lvIcon[data.lv-1]} alt=""/>
                            <a className="detailed" href="egrrge"><img src={rightWhiteIcon} alt=""/></a>
                        </div>
                    </div>
                </div>
                <div className="uid">
                    <span className="uid-i">UID</span>
                    <span className="id">{data.id}</span>
                </div>
                <div className="follow">
                    <div className="following">
                        <span className="lable">关注</span><span className="num">{data.following}</span>
                    </div>
                    <div className="v-line"></div>
                    <div className="follower">
                        <span className="lable">粉丝</span><span className="num">{data.follower}</span>
                    </div>
                </div>
            </div>
        )
    }
}

export { User }