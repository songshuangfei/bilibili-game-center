import React,{Component} from "react"
import {loadingIcon} from "../../icons"
import './style.less';

const Loading = ()=>(
    <div className="loading-icon"> 
        <img className="loading-rotate" src={loadingIcon} alt=""/>
    </div>
)

const Failed = (props)=>(
    <div className="failed" >
        服务器离家出走中("▔□▔)/
        <div className="refresh"  onTouchEnd={props.touch} >刷新</div>
    </div>
)

const NoMore = ()=>(
    <div className="nomore">(〜￣△￣)〜没有更多了</div>
)
class LoadingBoard extends Component {
    constructor(props){
        super(props);
        this.state= {
            now:"loading",
            action:this.props.action
        }
        this.backToReload = this.backToReload.bind(this);
    }

    componentWillReceiveProps(nextProps){
        
        this.setState({
            now:nextProps.msg,
            action:nextProps.action
        })
    }
    
    backToReload(){
        /*
            在执行props传来的action后如果任然获取数据失败，父级组建就不会更新新。该组件也不会重新加载。
            需要将该函数传入props.action(),在其axios失败的回调函数中，调用以变更状态至'failed'。
         */

         this.setState({now:'failed'})

    }

    touchToRefresh(){
        this.setState({now:'loading'})//动画变为加载状态
        this.state.action(null,this.backToReload);//是为action本身预留的参数
    }

    render(){
        return(
            <div className="loading-board">
                {
                    this.state.now==='loading'?
                    <Loading />:
                    this.state.now ==='failed'?
                    <Failed touch={()=>this.touchToRefresh()} />:
                    <NoMore/>
                }
            </div>
        )
    }
}

export default LoadingBoard;