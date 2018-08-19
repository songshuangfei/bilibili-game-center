import React,{ Component } from "react"
import { starIcon,loadingIcon } from "../icons"
import axios from 'axios';


import "./style.less"

//前端单条数据要求
/*{
    gameId:"1",
    name:"大王不高兴",
    activityimg:"/gamenews/1.png",
    gameIcon:"/gameicon/dwbgx.png",
    score:"9.8",
    info:"全新回合概念制手游《大王不高兴》换了启程",
    isNewGame:true
}*/


const AdverItem= (props)=>{
    var data = props.data;
    return(
       <div className="adver-item">
            <img src={data.activityimg} alt=""/>
            <div className="info">
                <div className="top">
                    {data.name}
                    <div className="t-right">
                        <div className="score">
                            <img src={starIcon} alt=""/>
                            {data.score}
                        </div>
                        <div className="v-line"></div>
                        <img className="icon" src={data.gameIcon} alt=""/>
                    </div>
                </div>
                <div className="bottom">
                <div className="b-left">
                    {data.info}
                    <span>
                        {data.isNewGame?"新游预约":" "}
                    </span>
                </div>
                </div>
            </div>
            <a href={`/game/${data.gameId}`}> </a>
       </div> 
    )
}

class GameAdver extends Component {
    constructor(){
        super();
        var cacheData = window.appDataCache.home.gameAdver
        this.state = {
            page:cacheData?cacheData.length/5:0,
            pageSize:5,
            HaveAnyMore:true,
            data:cacheData?cacheData:[],
        }
        this.getData = this.getData.bind(this);
    }

    getData(){
        console.log("GameAdver,无缓存或加载新数据，请求数据")
        window.onscroll = null;
        /*非第一次挂载时，window.onscroll是null，这里这句没什么用，第二次后请求时
        开始加载数据时取消监听，防止用户重新向下滑动造成数据加载错乱而bug*/
        var that =this;
        var CancelToken = axios.CancelToken;

        if(this.state.HaveAnyMore){//服务端还有数据时才加载
            axios.post('/api/gameadver', {
                page:that.state.page,
                pageSize:that.state.pageSize,
            },{
                cancelToken: new CancelToken(function executor(c) {
                    // executor 函数接收一个 cancel 函数作为参数
                    that.requestCancel = c;
                })
            })
            .then(function (res) {
                var resData = res.data.gameAdver
                that.setState((prevstate)=>{
                    window.onscroll=that.setOnonscroll()//数据结束后重新设置监听
                    window.appDataCache.home.gameAdver = [...prevstate.data,...resData]//设置缓存
                    let l = resData.length
                    return{
                        page:prevstate.page+1,
                        data:[...prevstate.data,...resData],
                        HaveAnyMore: l < that.state.pageSize?false:true,//如果传回数据个数小于size，说明服务器没有更多数据了，设值为false，下次就不用发送无用的请求了
                    }
                })
            })
            .catch(function (error) {
                console.log(error);
            });
        }
    }

    setOnonscroll(){
        var getData = this.getData;
        return function(){
            var clientHeight = document.documentElement.clientHeight||document.body.clientHeight;//可视区域（容器）的高度
            var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;//可滑动的高度，内容即被容器影藏的高度；滑倒底部时的值最大
            var offsetHeight = document.getElementById('root').offsetHeight//内容高度
            
            if(scrollTop/(offsetHeight-clientHeight) >= 0.9){//设成0.9，是为了保证if内能执行，因为移动端可视区域高度不标准
                // console.log("滑倒了底部");
                getData();
            }
        }
    }


    componentDidMount(){
        if(this.state.data.length!==0){
            console.log("GameAdver,已经加载缓存数据,不请求数据");
            window.onscroll=this.setOnonscroll();
            return;
        }
        this.getData();//包含绑定监听事件
        //组件挂在后首先请求以此数据，在请求回调函数中绑定滚动监听。
    }

    componentWillUnmount(){
        if(this.requestCancel){//如果没执行过this.getData就不会有this。requestCancel。所以要判断
            this.requestCancel("GameAdver,组件卸载拦截请求数据");
        }
        window.onscroll = null;
        
    }

    render(){
        var data = this.state.data
        return(
            <div className="game-adver">
                {data.map(v=>(
                    <AdverItem key={v.gameId} data={v} />
                ))}
                <div className="loading">{this.state.HaveAnyMore?
                    <img src={loadingIcon} alt="loading"/>:
                    "_(:зゝ∠)_世界的尽头~ " }
                </div>
            </div>
        )
    }
}

export default GameAdver;