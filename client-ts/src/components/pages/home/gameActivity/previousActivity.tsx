import * as React from 'react';
import ActivityItems from "./activityItems";
import {ListAutoLoading, loadingState} from "src/components/commonComponent/list-auto-loading";
import scrollMonitor from "src/components/commonFunc/scrollMonitor"


class PreviousActivity extends React.Component {
    public state = {
        loadingState:loadingState.ready
    }
    private isMount = true;

    public requestSucceed(){
        console.log("succeed");
        this.setState({
            loadingState:loadingState.ready
        })
    }

    public requestFailed(){
        console.log("failed")
        this.setState({
            loadingState:loadingState.failed
        })
    }

    public request (){
        this.setState({// 设置状态
            loadingState:loadingState.loading
        });
        setTimeout(() => {
            if(!this.isMount){
                // 如果组件没挂载就不执行回调
                return;
            }
            const f = Math.random();
            if(f>0.5){
                this.requestSucceed();
            }else{
                this.requestFailed();
            }
        }, 3000);
    }

    public arrivedBottomAction(){
        if(this.state.loadingState !== loadingState.ready){
            return;
        }
        // 只有为ready状态才能自动请求
        this.request();
    }

    public failedRetry(){
        // 失败时手动触发的函数
        this.request();
    }

    public componentWillUnmount(){
        this.isMount = false;
        scrollMonitor.stop()
    }
    
    public componentDidMount(){
        this.isMount = true;
        scrollMonitor.start(()=>this.arrivedBottomAction())
    }
    public render(){
        return(
            <div>
                {
                    [0,1,2,3,4].map(v=>(
                        <ActivityItems 
                            key={v}
                            coverSrc=""
                            gameIconSrc=""
                            gameName="bilibili"
                            gameScore="0"
                            activityIntro="bilibili"
                            gameId={v.toString()}
                        />
                    ))
                }
                <ListAutoLoading now={this.state.loadingState} failedRetry={()=>{this.failedRetry()}}/>
            </div>
        )
    }
}

export default PreviousActivity;