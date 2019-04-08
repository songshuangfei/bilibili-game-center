import * as React from 'react';
import pageScroll from "src/components/commonFunc/scroll";
import GameList from "./game-list";
import "./rank.css";
import {setRankPageTab} from "src/action/actions";
import { connect } from 'react-redux';

class Rank extends React.Component {
	public props:{item:pageTabIndexI,setRankPageTab:(item:pageTabIndexI)=>void}

	private tabs=['hot','expect','good','new']
	
	public tabTouch(nextIndex:number){
		if(this.props.item.tabIndex === nextIndex){
			// console.log("tab未改变");
            return;
		}
		pageScroll.setPageScrollWithValue(0);// 切换要回到顶部
		const pageTab:pageTabIndexI = {tabIndex:nextIndex}
		this.props.setRankPageTab(pageTab)
	}

	public componentWillUnmount(){
		pageScroll.saveScrollTop("rank");
	}

	public componentDidMount(){
		pageScroll.setScrollTopToPage("rank");
	}

	public render() {
		const tabNowIndex = this.props.item.tabIndex;
		const markLeft = 25*tabNowIndex + 12.5 +"%";
		return (
			<div>
				<GameList listType={this.tabs[tabNowIndex]}/>
				<div className="rank-type-tabs">
                    <div className={`tab ${tabNowIndex===0?"tab-active":''}`}  onClick={()=>{this.tabTouch(0)}}>畅销榜</div>
                    <div className={`tab ${tabNowIndex===1?"tab-active":''}`} onClick={()=>{this.tabTouch(1)}}>期待榜</div>
                    <div className={`tab ${tabNowIndex===2?"tab-active":''}`} onClick={()=>{this.tabTouch(2)}}>口碑榜</div>
                    <div className={`tab ${tabNowIndex===3?"tab-active":''}`} onClick={()=>{this.tabTouch(3)}}>新游榜</div>
                    <div className="mark" style={{left:markLeft}}/>
                </div>
			</div>
		)
	}
}

export default connect(
    (state:any) => ({
        item: state.rankPageTab
    }),(dispatch:any) => ({
        setRankPageTab: (item:pageTabIndexI) => dispatch(setRankPageTab(item))
    })
)(Rank)