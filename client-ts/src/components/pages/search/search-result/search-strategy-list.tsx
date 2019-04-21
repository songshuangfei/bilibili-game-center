import * as React from "react";
import StrategyItem from "src/components/commonComponent/strategy-item";
import NoLinkTitle from "src/components/commonComponent/no-link-title";
import AutoLoadList from "src/components/commonComponent/auto-load-list";
import {searchStrategyApi} from "src/api-request/search"

class SearchStrategyList extends React.Component{
    public props:{
        size:number,
        keyword:string,
        items:strategyListItemI[],
        setStrategy:(items:strategyListItemI[])=>void
    };

    public request = (succeed:(data:strategyListItemI[])=>void,failed:(err:requestErrorI)=>void) => {
        const size = this.props.size;
        const page = Math.ceil(this.props.items.length/size);
        searchStrategyApi(this.props.keyword, page, size, data=>{
            succeed(data);
        },err=>{
            failed(err);
        })
    }

    public requestSucceedAction = (data:strategyListItemI[])=>{
        this.props.setStrategy(data)
    }

    public requestFailedAction = (err:requestErrorI)=>{
        console.log(err.statusCode," ",err.msg)
        // console.log("need not do anything")
    }

    public render(){
        return(
            <div>
                <NoLinkTitle title="相关攻略" backgroundColor="none" showBlueMark={true}/>
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
                                strategyId={v.strategyId}
                                coverSrc={v.coverSrc}
                                abstract={v.abstract}
                                gameName={v.gameName}
                                strategyTitle={v.strategyTitle}
                                strategyType={v.strategyType}
                                goodNum={v.goodNum}
                                readNum={v.readNum}
                            />
                        ))
                    }
                </AutoLoadList>
            </div>
        )
    }
}

export default SearchStrategyList;