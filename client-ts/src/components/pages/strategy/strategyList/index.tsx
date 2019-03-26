import * as React from "react";
import StrategyItem from "src/components/commonComponent/strategy-item"
import "./strategy-list.css";

class StrategyList extends React.Component {
    public render(){
        const data = [
            {
                publisherHeadSrc:"//file.suafe.cn/blgc/userhead/1.jpg",
                publisherName:"夏池萤",
                strategyTitle:"这是一个攻略标题",
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
        return(
            <div className="strategy-list">
                <div className="strategy-list-title">最新攻略</div>
                    {
                        data.map(v=>(
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
               
            </div>
        )
    }
}

export default StrategyList;