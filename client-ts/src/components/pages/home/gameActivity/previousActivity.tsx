import * as React from 'react';
import ActivityItems from "./activityItems";
import AutoLoadList from "src/components/commonComponent/auto-load-list";


class PreviousActivity extends React.Component {
    public request = (succeed:(data:homeActivityItemI[])=>void,failed:(err:any)=>void) => {
        console.log("request start")
        setTimeout(() => {
            const f = Math.random();
            if(f>0.5){
                const data:homeActivityItemI[] =[{
                    coverSrc:'string',
                    gameIconSrc:'string',
                    gameName:'string',
                    activityIntro:'string',
                    gameScore:'string',
                    gameId:'string'
                }];
                succeed(data);
            }else{
                const err:requestErrorI ={statusCode:"404",msg:"Not Found"}
                failed(err);
            }
        }, 3000);
    }

    public requestSucceedAction = (data:homeActivityItemI[])=>{
        this.forceUpdate();// or dispatch
        console.log("succeed\n","data:",data)
    }

    public requestFailedAction = (err:requestErrorI)=>{
        console.log(err.statusCode," ",err.msg)
        console.log("need not do anything")
    }

    public render(){
        return(
            <div>
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
            </div>
        )
    }
}

export default PreviousActivity;