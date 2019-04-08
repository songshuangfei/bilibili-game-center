import * as React from 'react';
import {ListAutoLoading, loadingState} from "src/components/commonComponent/list-auto-loading-show-board";
import scrollMonitor from "src/components/commonFunc/scrollMonitor"

/**
 * props包含三个函数，均由父级定义且要绑定this
 * @param props.request api请求的函数（必须包含一个成功回调函数参数和失败回调函数参数）
 * @param props.requestSucceedAction 成功的回调，可以在成功后更新父级的state，或dispatch
 * @param props.requestFailedAction 可以不必做任何事（可输出错误信息），该组件会自动显示自动刷新按钮
 */
class AutoLoadList extends React.Component {
    public props:{
        request:(succeed:(data:listRequestIiemI[])=>void,failed:(err:requestErrorI)=>void)=>void,
        requestSucceedAction:(data:listRequestIiemI[])=>void,
        requestFailedAction:(err:requestErrorI)=>void,
        children:any
    }

    public state = {
        loadingState:loadingState.ready
    }

    private isMount = true;

    public request = () => {
        /*请求函数的代理函数*/

        /*设置loading状态*/
        this.setState({
            loadingState:loadingState.loading
        });

        /* 执行父组件的请求函数，并传给其回调
            请求函数和回调函数均由父组件定义
        */
        this.props.request(this.requestSucceed,this.requestFailed);
    }

    
    public requestSucceed = (data:listRequestIiemI[]) => {
        /* 请求成功的中间层函数*/
        if(!this.isMount){
            // 如果组件没挂载就不执行该回调
            return;
        }
        if(data.length === 0){
            // 请求到的数组长度为0就将状态设置为nomore，将停止所有请求
            this.setState({
                loadingState:loadingState.nomore
            });
            return;
        }

        this.setState({
            loadingState:loadingState.ready
        });
        // 向父级组件传回获取到的数据
        this.props.requestSucceedAction(data);
    }

    public requestFailed = (err:requestErrorI) => {
        /* 请求失败的中间层函数*/
        if(!this.isMount){
            return;
        }
        this.setState({
            loadingState:loadingState.failed
        });
        this.props.requestFailedAction(err);
    }

    public failedRetry(){
        // 手动刷新
        this.request();
    }

    public arrivedBottomAction(){
        if(this.state.loadingState !== loadingState.ready){
            // 仅ready状态才能请求
            return;
        }
        this.request();
    }

    public componentWillUnmount(){
        this.isMount = false;
        scrollMonitor.stop();
    }
    
    public componentDidMount(){
        this.isMount = true;
        this.request();// 挂载先自动加载一次
        scrollMonitor.start(()=>this.arrivedBottomAction());
    }

    public render(){
        return(
            <div>
                {this.props.children}
                <ListAutoLoading now={this.state.loadingState} failedRetry={()=>{this.failedRetry()}}/>
            </div>
        )
    }
}

export default AutoLoadList;