import * as React from "react";
import SearchGameList from "./search-game-list";
import SearchStrategyList from "./search-strategy-list";
import {ListAutoLoadingShowBoard, loadingState } from "src/components/commonComponent/list-auto-loading-show-board";
import { searchApi } from "src/api-request/search";

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
    
    private maxgameNum = 3;
    private strategyPageSize = 5;

    private isUnMounted:boolean = true;

	public componentDidMount(){
        this.isUnMounted = false;
		this.search();
    }
    public componentWillUnmount(){
        this.isUnMounted = true;
    }

	public render () {
		return(
            <div>
				{this.state.games.length===0?"":<SearchGameList games={this.state.games}/>}
				{
                    this.state.strategys.length===0?"":
                    <SearchStrategyList 
                        keyword={this.props.keyword} 
                        items={this.state.strategys} 
                        setStrategy={this.setStrategys}
                        size={this.strategyPageSize}
                    />
                }
                {
                    this.state.loadState===loadingState.ready?"":
                    <ListAutoLoadingShowBoard now={this.state.loadState} failedRetry={this.retry}/>
                }
            </div>
		)
	}

	private search=()=>{
        const {maxgameNum,strategyPageSize} = this;
        const keyword = this.props.keyword
        searchApi(keyword, maxgameNum, strategyPageSize,
            (gameData,strategydata)=>{
            if(this.isUnMounted){
                // 组件以卸载不执行回调，丢弃请求到数据
                return;
            }

            if(gameData.length===0&&strategydata.length===0){
                this.setState({
                    loadState:loadingState.nomore,
                })
            }else{
                this.setState({
                    loadState:loadingState.ready,
                    games:gameData,
                    strategys:strategydata
                })
            }
        },(err)=>{
            if(this.isUnMounted){
            // 组件以卸载不执行回调，丢弃请求到数据
                return;
            }

            this.setState({
                loadState:loadingState.failed,
            })
        })
	}

	private retry=()=>{
		this.setState({
			loadState:loadingState.loading,
		});
		this.search();
    }

    private setStrategys = (items:strategyListItemI[])=>{
        // 传入子组件，获取子组件自动加载的数据
        if(this.isUnMounted){
            return;
        }
        this.setState((ps:any)=>({
            strategys:[...ps.strategys,...items]
        }))
    }
}
export default AutoSearchBoard;