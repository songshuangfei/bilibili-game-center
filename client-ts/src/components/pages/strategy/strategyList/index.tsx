import * as React from "react";
import StrategyItem from "src/components/commonComponent/strategy-item";
import NoLinkTitle from "src/components/commonComponent/no-link-title"
import "./strategy-list.css";
import AutoLoadList from "src/components/commonComponent/auto-load-list";
import {setStrPageStrategyList} from "src/action/actions";
import { connect } from 'react-redux';
import { strPageStrategyListApi } from "src/api-request/strategy"

class StrPageStrategyList extends React.Component {
	public props:{items:strategyListItemI[],setStrPageStrategyList:(items:strategyListItemI[])=>void}

    public request = (succeed:(data:strategyListItemI[])=>void,failed:(err:any)=>void) => {
        const size = 5;
        const page = Math.ceil(this.props.items.length/size)+1;
        strPageStrategyListApi(page,size,data=>{
            succeed(data)
        },err=>{
            failed(err)
        })
    }

    public requestSucceedAction = (data:strategyListItemI[])=>{
        this.props.setStrPageStrategyList(data)
    }

    public requestFailedAction = (err:any)=>{
        console.log(err)
    }
    
    public render(){
        return(
            <div className="strategy-list">
                <NoLinkTitle title="最新攻略" backgroundColor="none" showBlueMark={false}/>
                    <AutoLoadList 
                    request={this.request} 
                    requestSucceedAction={this.requestSucceedAction}
                    requestFailedAction={this.requestFailedAction}
                >
                    {
                        this.props.items.map(v=>(
                            <StrategyItem
                                key={v.strategyId}
                                publisherHeadSrc={v.publisherHeadSrc}
                                publisherName={v.publisherName}
                                strategyTitle={v.strategyTitle}
                                coverSrc={v.coverSrc}
                                abstract={v.abstract}
                                gameName={v.gameName}
                                strategyType={v.strategyType}
                                readNum={v.readNum}
                                goodNum={v.goodNum}
                                strategyId={v.strategyId}
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
        items: state.strPageStrategyList
    }),(dispatch:any) => ({
        setStrPageStrategyList: (items:strategyListItemI[]) => dispatch(setStrPageStrategyList(items))
    })
)(StrPageStrategyList)