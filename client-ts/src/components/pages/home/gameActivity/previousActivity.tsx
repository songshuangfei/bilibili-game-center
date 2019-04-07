import * as React from 'react';
import ActivityItems from "./activityItems";
import AutoLoadList from "src/components/commonComponent/auto-load-list"


class PreviousActivity extends React.Component {
    
    public request = (succeed:(data:homeActivityItmeI[])=>void,failed:()=>void) => {
        console.log("request start")
        setTimeout(() => {
            const f = Math.random();
            if(f>0.5){
                const data:homeActivityItmeI[] =[{},{},{}];
                succeed(data);
            }else{
                failed();
            }
        }, 3000);
    }

    public requestSucceedAction = (data:homeActivityItmeI[])=>{
        this.forceUpdate();
        console.log("succeed\n","data:",data)
    }

    public requestFailedAction = ()=>{
        console.log("need not do anything")
    }

    public render(){
        console.log("emmmmmmm")
        return(
            <AutoLoadList 
                request={this.request} 
                requestSucceedAction={this.requestSucceedAction}
                requestFailedAction={this.requestFailedAction}
            >
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
            </AutoLoadList>
        )
    }
}

export default PreviousActivity;