import React,{ Component } from "react"
import FindHot from "./find-hot"
import {HListReq,HList} from "./h-list"
import Special from "./special"
import {LoadingBoard} from "../../commonJsx"
import axios from "axios"

import "./style.less"


class Find extends Component {
    constructor(){
        super();
        var cache = window.appDataCache.find.data;
        this.state = {
            data:cache?cache:[],
            haveAnyMore:true,
            isRequestFailed:false,
        }
        this.getData = this.getData.bind(this)
    }
    getData(_,laodingToRetry){
        console.log(`<Find/>,无缓存,请求数据`)
        var that =this;
        var CancelToken = axios.CancelToken;
        axios.get("/api/find/list", {
            cancelToken: new CancelToken(function executor(c) {
                that.requestCancel = c;
            })
        })
        .then((res)=>{
            var resData = res.data.list;
            that.setState({
                data:resData,
                haveAnyMore:false
            })
        })
        .catch((error)=>{
            if(error.response){
                console.log("23123123")

                if(that.state.isRequestFailed){
                    if(laodingToRetry)
                        laodingToRetry();
                        console.log(laodingToRetry)
                    return;
                }
                that.setState({isRequestFailed:true})
            }else{
                console.log(error.message);
            }
        });
    }
    componentDidMount(){
        var st = window.appDataCache.find.st
        if(st){
            document.documentElement.scrollTop = document.body.scrollTop = st//设置页面位置
        }    

        if(this.state.data.length!==0){
            console.log(`<Find/>,已经加载缓存数据,不请求数据`)
            this.setState({haveAnyMore:false})
            return;
        }
        this.getData();
    }
    componentWillUnmount(){
        var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
        window.appDataCache.find.st = scrollTop;//保存页面位置
        document.documentElement.scrollTop = document.body.scrollTop = 0;//设置为0，防止切换到其他页面后不在顶端

        if(this.requestCancel){//如果没执行过this.getData就不会有this.requestCancel。所以要判断
            this.requestCancel(`<Find/>,组件卸载拦截请求数据`);
        }
        window.appDataCache.find.data = this.state.data;
    }
    render(){
        let data = this.state.data;
        let isRequestFailed = this.state.isRequestFailed;
        let haveAnyMore = this.state.haveAnyMore;
        return(
            <div className="find">
                <FindHot/>
                <HListReq url="/api/newgame" name="新游预约" tag="newGame"/>{/*url：数据接口，name：标题名，tag：请求到的数据数组名和数据缓存时的名*/}
                <Special/>
                <HListReq url="/api/find/better" name="哔哩哔哩 (゜-゜)つロ 干杯~" tag="better"/>
                <HListReq url="/api/find/paygame" name="付费游戏" tag="paygame"/>
                {
                    data.map((v,i)=>(
                        <HList key={i} data={v.data} name={v.name}/>
                    ))
                }
                <div>
                    <LoadingBoard msg={isRequestFailed?'failed':haveAnyMore?'loading':"nomore"} action={this.getData}/>
                </div>
            </div>
        )
    }
}



export { Find }