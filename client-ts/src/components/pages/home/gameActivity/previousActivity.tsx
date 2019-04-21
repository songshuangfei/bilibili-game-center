import * as React from 'react';
import ActivityItems from "./activityItems";
import AutoLoadList from "src/components/commonComponent/auto-load-list";
import {setHomePreviousActivity} from "src/action/actions";
import { connect } from 'react-redux';
import {homePreviousActivityApi} from "src/api-request/home"

class PreviousActivity extends React.Component {
	public props:{items:homeActivityItemI[],setHomePreviousActivity:(items:homeActivityItemI[])=>void}

    public request = (succeed:(data:homeActivityItemI[])=>void,failed:(err:requestErrorI)=>void) => {
        const size = 4;
        // 向上取整是当最后一次抓取数据后不足一页的数据，会出现小数
        const page = Math.ceil(this.props.items.length/size);
        homePreviousActivityApi(page,size,data=>{
            succeed(data);
        },err=>{
            failed(err);
        })
    }

    public requestSucceedAction = (data:homeActivityItemI[])=>{
        this.props.setHomePreviousActivity(data)
    }

    public requestFailedAction = (err:requestErrorI)=>{
        console.log(err.statusCode," ",err.msg)
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