import * as React from "react";
import SearchGameList from "./search-game-list";
import SearchStrategyList from "./search-strategy-list";
import {
    ListAutoLoadingShowBoard,
    loadingState
} from "src/components/commonComponent/list-auto-loading-show-board";

class  AutoSearchBoard extends React.Component {
	public props:{keyword:string};
	public state:{
		loadState:loadingState
		games:gameListItemI[],
		strategys:strategyListItemI[],
	} = {
		loadState:loadingState.loading,
		games:[],
		strategys:[],
	}

	public componentDidMount(){
		this.search();
	}
	
	public render () {
		console.log(this.state)
		return(
            <div>
				{this.state.games.length===0?"":<SearchGameList games={this.state.games}/>}
				{this.state.strategys.length===0?"":<SearchStrategyList firstStrategys={this.state.strategys} keyword={this.props.keyword}/>}
                {
                    this.state.loadState===loadingState.ready?"":
                    <ListAutoLoadingShowBoard now={this.state.loadState} failedRetry={this.retry}/>
                }
            </div>
		)
	}

	private search=()=>{
		setTimeout(() => {
            const f = Math.random();
			if(f>0.5){
				// succeed
				const gamedata:gameListItemI[]=[
                    {gameId:"0051",gameName:"撒旦",gameIconSrc:"//file.suafe.cn/blgc/gameicon/fs.png",gameType:"卡牌",gameSize:"568M",score:3},
                    {gameId:"0011",gameName:"命运-冠位指(Fate/Go)",gameIconSrc:"//file.suafe.cn/blgc/gameicon/fgo.png",gameType:"卡牌",gameSize:"568M",score:3},
                ];
                // 4个item------------------
				const strategydata:strategyListItemI[] =[
                    {
                        publisherHeadSrc:"//file.suafe.cn/blgc/userhead/1.jpg",
                        publisherName:"夏池萤",
                        strategyTitle:"这是一个攻略标题这是一个攻略标题这是一个攻略标题",
                        coverSrc:"//file.suafe.cn/blgc/strategycover/1.png",
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
                        coverSrc:"//file.suafe.cn/blgc/strategycover/2.png",
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
                        coverSrc:"//file.suafe.cn/blgc/strategycover/3.png",
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
                        coverSrc:"//file.suafe.cn/blgc/strategycover/4.png",
                        abstract:"这是一条攻略摘要，这是一条攻略摘要，这是一条攻略摘要，这是一条攻略摘要这是一条攻略摘要这是一条攻略摘要这是一条攻略摘要",
                        gameName:"阴阳师",
                        strategyType:"角色测评",
                        readNum:"12.3k",
                        goodNum:"876",
                        strategyId:"14"
                    },
                ]

				if(gamedata.length===0&&strategydata.length===0){
					this.setState({
						loadState:loadingState.nomore,
					})
				}else{
					this.setState({
						loadState:loadingState.ready,
						games:gamedata,
						strategys:strategydata
					})
				}
			}else{
			// failed
				this.setState({
					loadState:loadingState.failed,
				})
			}
			
		}, 200);
	}

	private retry=()=>{
		this.setState({
			loadState:loadingState.loading,
		});
		this.search();
	}
}
export default AutoSearchBoard;