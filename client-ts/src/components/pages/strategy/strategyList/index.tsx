import * as React from "react";
import StrategyItem from "src/components/commonComponent/strategy-item";
import NoLinkTitle from "src/components/commonComponent/no-link-title"
import "./strategy-list.css";
import AutoLoadList from "src/components/commonComponent/auto-load-list";
import {setStrPageStrategyList} from "src/action/actions";
import { connect } from 'react-redux';

class StrPageStrategyList extends React.Component {
	public props:{items:strategyListItemI[],setStrPageStrategyList:(items:strategyListItemI[])=>void}

    public request = (succeed:(data:homeActivityItemI[])=>void,failed:(err:requestErrorI)=>void) => {
        // console.log("request start")
        setTimeout(() => {
            const f = Math.random();
            if(f>0.1){
                // 模拟成功
                const data1:strategyListItemI[] =[
                    {
                        publisherHeadSrc:"//file.suafe.cn/blgc/userhead/1.jpg",
                        publisherName:"夏池萤",
                        strategyTitle:"这是一个攻略标题这是一个攻略标题这是一个攻略标题",
                        coverSrc:"//file.suafe.cn/blgc/strategy/cover/1.png",
                        abstract:"这是一条攻略摘要，这是一条攻略摘要，这是一条攻略摘要，这是一条攻略摘要这是一条攻略摘要这是一条攻略摘要这是一条攻略摘要",
                        gameName:"阴阳师",
                        strategyType:"角色测评",
                        readNum:"12.3k",
                        goodNum:"876",
                        strategyId:"11"
                    },{
                        publisherHeadSrc:"//file.suafe.cn/blgc/userhead/2.jpg",
                        publisherName:"夏池萤",
                        strategyTitle:"这是一个攻略标题",
                        coverSrc:"//file.suafe.cn/blgc/strategy/cover/2.png",
                        abstract:"这是一条攻略摘要，这是一条攻略摘要，这是一条攻略摘要，这是一条攻略摘要这是一条攻略摘要这是一条攻略摘要这是一条攻略摘要",
                        gameName:"阴阳师",
                        strategyType:"角色测评",
                        readNum:"12.3k",
                        goodNum:"876",
                        strategyId:"12"
                    },{
                        publisherHeadSrc:"//file.suafe.cn/blgc/userhead/3.jpg",
                        publisherName:"夏池萤",
                        strategyTitle:"这是一个攻略标题",
                        coverSrc:"//file.suafe.cn/blgc/strategy/cover/3.png",
                        abstract:"这是一条攻略摘要，这是一条攻略摘要，这是一条攻略摘要，这是一条攻略摘要这是一条攻略摘要这是一条攻略摘要这是一条攻略摘要",
                        gameName:"阴阳师",
                        strategyType:"角色测评",
                        readNum:"12.3k",
                        goodNum:"876",
                        strategyId:"13"
                    },{
                        publisherHeadSrc:"//file.suafe.cn/blgc/userhead/4.jpg",
                        publisherName:"夏池萤",
                        strategyTitle:"这是一个攻略标题",
                        coverSrc:"//file.suafe.cn/blgc/strategy/cover/4.png",
                        abstract:"这是一条攻略摘要，这是一条攻略摘要，这是一条攻略摘要，这是一条攻略摘要这是一条攻略摘要这是一条攻略摘要这是一条攻略摘要",
                        gameName:"阴阳师",
                        strategyType:"角色测评",
                        readNum:"12.3k",
                        goodNum:"876",
                        strategyId:"14"
                    },
                ]

                const data2:strategyListItemI[] =[
                    {
                        publisherHeadSrc:"//file.suafe.cn/blgc/userhead/1.jpg",
                        publisherName:"夏池萤",
                        strategyTitle:"这是一个攻略标题这是一个攻略标题这是一个攻略标题",
                        coverSrc:"//file.suafe.cn/blgc/strategy/cover/1.png",
                        abstract:"这是一条攻略摘要，这是一条攻略摘要，这是一条攻略摘要，这是一条攻略摘要这是一条攻略摘要这是一条攻略摘要这是一条攻略摘要",
                        gameName:"阴阳师",
                        strategyType:"角色测评",
                        readNum:"12.3k",
                        goodNum:"876",
                        strategyId:"121"
                    },{
                        publisherHeadSrc:"//file.suafe.cn/blgc/userhead/2.jpg",
                        publisherName:"夏池萤",
                        strategyTitle:"这是一个攻略标题",
                        coverSrc:"//file.suafe.cn/blgc/strategy/cover/2.png",
                        abstract:"这是一条攻略摘要，这是一条攻略摘要，这是一条攻略摘要，这是一条攻略摘要这是一条攻略摘要这是一条攻略摘要这是一条攻略摘要",
                        gameName:"阴阳师",
                        strategyType:"角色测评",
                        readNum:"12.3k",
                        goodNum:"876",
                        strategyId:"122"
                    },{
                        publisherHeadSrc:"//file.suafe.cn/blgc/userhead/3.jpg",
                        publisherName:"夏池萤",
                        strategyTitle:"这是一个攻略标题",
                        coverSrc:"//file.suafe.cn/blgc/strategy/cover/3.png",
                        abstract:"这是一条攻略摘要，这是一条攻略摘要，这是一条攻略摘要，这是一条攻略摘要这是一条攻略摘要这是一条攻略摘要这是一条攻略摘要",
                        gameName:"阴阳师",
                        strategyType:"角色测评",
                        readNum:"12.3k",
                        goodNum:"876",
                        strategyId:"123"
                    },{
                        publisherHeadSrc:"//file.suafe.cn/blgc/userhead/4.jpg",
                        publisherName:"夏池萤",
                        strategyTitle:"这是一个攻略标题",
                        coverSrc:"//file.suafe.cn/blgc/strategy/cover/4.png",
                        abstract:"这是一条攻略摘要，这是一条攻略摘要，这是一条攻略摘要，这是一条攻略摘要这是一条攻略摘要这是一条攻略摘要这是一条攻略摘要",
                        gameName:"阴阳师",
                        strategyType:"角色测评",
                        readNum:"12.3k",
                        goodNum:"876",
                        strategyId:"124"
                    },
                ]

                const data3:strategyListItemI[] =[
                    {
                        publisherHeadSrc:"//file.suafe.cn/blgc/userhead/1.jpg",
                        publisherName:"夏池萤",
                        strategyTitle:"这是一个攻略标题这是一个攻略标题这是一个攻略标题",
                        coverSrc:"//file.suafe.cn/blgc/strategy/cover/1.png",
                        abstract:"这是一条攻略摘要，这是一条攻略摘要，这是一条攻略摘要，这是一条攻略摘要这是一条攻略摘要这是一条攻略摘要这是一条攻略摘要",
                        gameName:"阴阳师",
                        strategyType:"角色测评",
                        readNum:"12.3k",
                        goodNum:"876",
                        strategyId:"1231"
                    },{
                        publisherHeadSrc:"//file.suafe.cn/blgc/userhead/2.jpg",
                        publisherName:"夏池萤",
                        strategyTitle:"这是一个攻略标题",
                        coverSrc:"//file.suafe.cn/blgc/strategy/cover/2.png",
                        abstract:"这是一条攻略摘要，这是一条攻略摘要，这是一条攻略摘要，这是一条攻略摘要这是一条攻略摘要这是一条攻略摘要这是一条攻略摘要",
                        gameName:"阴阳师",
                        strategyType:"角色测评",
                        readNum:"12.3k",
                        goodNum:"876",
                        strategyId:"1232"
                    },{
                        publisherHeadSrc:"//file.suafe.cn/blgc/userhead/3.jpg",
                        publisherName:"夏池萤",
                        strategyTitle:"这是一个攻略标题",
                        coverSrc:"//file.suafe.cn/blgc/strategy/cover/3.png",
                        abstract:"这是一条攻略摘要，这是一条攻略摘要，这是一条攻略摘要，这是一条攻略摘要这是一条攻略摘要这是一条攻略摘要这是一条攻略摘要",
                        gameName:"阴阳师",
                        strategyType:"角色测评",
                        readNum:"12.3k",
                        goodNum:"876",
                        strategyId:"1233"
                    },{
                        publisherHeadSrc:"//file.suafe.cn/blgc/userhead/4.jpg",
                        publisherName:"夏池萤",
                        strategyTitle:"这是一个攻略标题",
                        coverSrc:"//file.suafe.cn/blgc/strategy/cover/4.png",
                        abstract:"这是一条攻略摘要，这是一条攻略摘要，这是一条攻略摘要，这是一条攻略摘要这是一条攻略摘要这是一条攻略摘要这是一条攻略摘要",
                        gameName:"阴阳师",
                        strategyType:"角色测评",
                        readNum:"12.3k",
                        goodNum:"876",
                        strategyId:"1234"
                    },
                ]

                const data4:strategyListItemI[]=[]
                // 请求不到数据时一定要返回空数组---------AutoLoadList需要一个空数组判断是否停止加载
                const pagenum = this.props.items.length/4;
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

    public requestSucceedAction = (data:strategyListItemI[])=>{
        this.props.setStrPageStrategyList(data)
        // console.log("succeed\n","data:",data)
    }

    public requestFailedAction = (err:requestErrorI)=>{
        console.log(err.statusCode," ",err.msg)
        // console.log("need not do anything")
    }
    public render(){
        return(
            <div className="strategy-list">
                <NoLinkTitle title="最新攻略" backgroundColor="none"/>
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