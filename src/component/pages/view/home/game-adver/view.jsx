import React,{ Component } from "react"
import { starIcon,loadingIcon } from "../icons"

import "./style.less"

const adverData = {
    data:[
        {gameId:"1",name:"大王不高兴",activityimg:"/gamenews/1.png",gameIcon:"/gameicon/dwbgx.png",score:"9.8",info:"全新回合概念制手游《大王不高兴》换了启程",isNewGame:true},
        {gameId:"2",name:"崩坏3",activityimg:"/gamenews/2.png",gameIcon:"/gameicon/bh3.png",score:"8.8",info:"\"空之律者\"女王降临",isNewGame:false},
        {gameId:"3",name:"天天躲猫猫",activityimg:"/gamenews/3.png",gameIcon:"/gameicon/ttdmm.png",score:"9.8",info:"寻找调皮可爱的小猫咪,一起来云吸猫吧~",isNewGame:false},
        {gameId:"4",name:"妈妈把我的游戏藏起来了3",activityimg:"/gamenews/4.png",gameIcon:"/gameicon/mmbwyxcqll.png",score:"9.5",info:"妈妈又把你游戏藏起来了",isNewGame:true},
        {gameId:"5",name:"艾比",activityimg:"/gamenews/5.png",gameIcon:"/gameicon/ab.png",score:"8.3",info:"AI,传递内心的语言",isNewGame:false},
        {gameId:"6",name:"大王不高兴",activityimg:"/gamenews/1.png",gameIcon:"/gameicon/dwbgx.png",score:"9.8",info:"全新回合概念制手游《大王不高兴》换了启程",isNewGame:true},
        {gameId:"7",name:"崩坏3",activityimg:"/gamenews/2.png",gameIcon:"/gameicon/bh3.png",score:"8.8",info:"\"空之律者\"女王降临",isNewGame:false},
        {gameId:"8",name:"天天躲猫猫",activityimg:"/gamenews/3.png",gameIcon:"/gameicon/ttdmm.png",score:"9.8",info:"寻找调皮可爱的小猫咪,一起来云吸猫吧~",isNewGame:false},
        {gameId:"9",name:"妈妈把我的游戏藏起来了3",activityimg:"/gamenews/4.png",gameIcon:"/gameicon/mmbwyxcqll.png",score:"9.5",info:"妈妈又把你游戏藏起来了",isNewGame:true},
        {gameId:"10",name:"艾比",activityimg:"/gamenews/5.png",gameIcon:"/gameicon/ab.png",score:"8.3",info:"AI,传递内心的语言",isNewGame:false},
        {gameId:"11",name:"大王不高兴",activityimg:"/gamenews/1.png",gameIcon:"/gameicon/dwbgx.png",score:"9.8",info:"全新回合概念制手游《大王不高兴》换了启程",isNewGame:true},
        {gameId:"12",name:"崩坏3",activityimg:"/gamenews/2.png",gameIcon:"/gameicon/bh3.png",score:"8.8",info:"\"空之律者\"女王降临",isNewGame:false},
    ]
}

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
        console.log("GameAdver,无缓存，请求数据")
        window.onscroll = null;
        /*非第一次挂载时，window.onscroll是null，这里这句没什么用，第二次后请求时
        开始加载数据时取消监听，防止用户重新向下滑动造成数据加载错乱而bug*/

        if(this.state.HaveAnyMore){//服务端还有数据时才加载
            var sendData = {//发送的数据
                page:this.state.page,
                pageSize:this.state.pageSize,
            }
            var resData = [];//这里模拟后台逻辑
    
            resData = adverData.data.slice(sendData.page*sendData.pageSize,(sendData.page+1)*sendData.pageSize)
            
            //ajax
            //ajax callback
            setTimeout(() => {//模拟回调函数
                var l = resData.length;
                this.setState((prevstate)=>{
                    window.onscroll=this.setOnonscroll()//数据结束后重新设置监听
                    window.appDataCache.home.gameAdver = [...prevstate.data,...resData]//设置缓存
                    return{
                        page:prevstate.page+1,
                        data:[...prevstate.data,...resData],
                        HaveAnyMore: l < this.state.pageSize?false:true,//如果传回数据个数小于size，说明服务器没有更多数据了，设值为false，下次就不用发送无用的请求了
                    }
                })
            }, 2000);
        }
    }

    setOnonscroll(){
        var getData = this.getData;
        return function(){
            var clientHeight = document.documentElement.clientHeight||document.body.clientHeight;//可视区域（容器）的高度
            var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;//可滑动的高度，内容即被容器影藏的高度；滑倒底部时的值最大
            var offsetHeight = document.getElementById('root').offsetHeight//内容高度
            // window.debugLog(`${clientHeight},${scrollTop},${offsetHeight}`)
            
            if(scrollTop/(offsetHeight-clientHeight) >= 0.9){//设成0.9，是为了保证if内能执行，因为移动端可视区域高度不标准
                // console.log("滑倒了底部");
                getData();
            }
        }
    }


    componentDidMount(){
        if(this.state.page!==0){
            console.log("GameAdver,已经加载缓存数据");
            window.onscroll=this.setOnonscroll();
            return;
        }
        this.getData();//包含绑定监听事件
        //组件挂在后首先请求以此数据，在请求回调函数中绑定滚动监听。
    }

    componentWillUnmount(){
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