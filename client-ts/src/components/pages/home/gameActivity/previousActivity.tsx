import * as React from 'react';
import ActivityItems from "./activityItems";
import AutoLoadList from "src/components/commonComponent/auto-load-list";
import {setHomePreviousActivity} from "src/action/actions";
import { connect } from 'react-redux';


class PreviousActivity extends React.Component {
	public props:{items:homeActivityItemI[],setHomePreviousActivity:(items:homeActivityItemI[])=>void}

    public request = (succeed:(data:homeActivityItemI[])=>void,failed:(err:requestErrorI)=>void) => {
        // console.log("request start")
        setTimeout(() => {
            const f = Math.random();
            if(f>0.5){
                // 模拟成功
                const data1:homeActivityItemI[] =[{
                    activityId:"1",
                    coverSrc:'//file.suafe.cn/blgc/gamenews/1.png',
                    gameIconSrc:'//file.suafe.cn/blgc/gameicon/fgo.png',
                    gameName:'命运-冠位指定',
                    activityIntro:'这是一个活动简介',
                    gameScore:'6.4',
                    gameId:'1212'
                },{
                    activityId:"2",
                    coverSrc:'//file.suafe.cn/blgc/gamenews/2.png',
                    gameIconSrc:'//file.suafe.cn/blgc/gameicon/bh3.png',
                    gameName:'崩坏3rd',
                    activityIntro:'这是一个活动简介',
                    gameScore:'8.4',
                    gameId:'1212'
                }];

                const data2:homeActivityItemI[] =[{
                    activityId:"3",
                    coverSrc:'//file.suafe.cn/blgc/gamenews/3.png',
                    gameIconSrc:'//file.suafe.cn/blgc/gameicon/mhmnz.png',
                    gameName:'游戏名',
                    activityIntro:'这是一个活动简介',
                    gameScore:'6.4',
                    gameId:'12212'
                },{
                    activityId:"4",
                    coverSrc:'//file.suafe.cn/blgc/gamenews/4.png',
                    gameIconSrc:'//file.suafe.cn/blgc/gameicon/zs.png',
                    gameName:'游戏名',
                    activityIntro:'这是一个活动简介',
                    gameScore:'6.4',
                    gameId:'1212'
                }];

                const data3:homeActivityItemI[] =[{
                    activityId:"5",
                    coverSrc:'//file.suafe.cn/blgc/gamenews/5.png',
                    gameIconSrc:'//file.suafe.cn/blgc/gameicon/blhx.png',
                    gameName:'碧蓝幻想',
                    activityIntro:'这是一个活动简介',
                    gameScore:'6.4',
                    gameId:'1212'
                },{
                    activityId:"6",
                    coverSrc:'//file.suafe.cn/blgc/gamenews/1.png',
                    gameIconSrc:'//file.suafe.cn/blgc/gameicon/zs.png',
                    gameName:'游戏名',
                    activityIntro:'这是一个活动简介',
                    gameScore:'6.4',
                    gameId:'1212'
                }];

                const data4:homeActivityItemI[]=[]

                const pagenum = this.props.items.length/2
                let data:any ;
                switch (pagenum){
                    case 0:
                    data=data1;
                    break;
                    case 1:
                    data=data2;
                    break;
                    case 2:
                    data=data3;
                    break;
                    default:
                    data=data4;
                    break;
                }

                succeed(data);
            }else{
                // 模拟失败
                const err:requestErrorI ={statusCode:"404",msg:"Not Found"}
                failed(err);
            }
        }, 3000);
    }

    public requestSucceedAction = (data:homeActivityItemI[])=>{
        this.props.setHomePreviousActivity(data)
        // console.log("succeed\n","data:",data)
    }

    public requestFailedAction = (err:requestErrorI)=>{
        console.log(err.statusCode," ",err.msg)
        // console.log("need not do anything")
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
                        this.props.items.map(v=>(
                            <ActivityItems 
                                key={v.activityId}
                                activityId={v.activityId}
                                coverSrc={v.coverSrc}
                                gameIconSrc={v.gameIconSrc}
                                gameName={v.gameName}
                                gameScore={v.gameScore}
                                activityIntro={v.activityIntro}
                                gameId={v.gameId}
                            />
                        ))
                    }
                </AutoLoadList>
            </div>
        )
    }
}


export default connect(
    (state:any) => ({
        items: state.homePreviousActivity
    }),(dispatch:any) => ({
        setHomePreviousActivity: (items:homeActivityItemI[]) => dispatch(setHomePreviousActivity(items))
    })
)(PreviousActivity)