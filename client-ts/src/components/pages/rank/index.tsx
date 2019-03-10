import * as React from 'react';
import pageScroll from "src/components/commonFunc/scroll";
import "./rank.css"

class Rank extends React.Component {
	public state={
		tabNow:"hot",
		tagLeft:"12.5%",
	}
	private tabs=['hot','expect','good','new']
	
	public tabTouch(i:number){
		const left = 25*i+12.5 +"%";
		this.setState({
			tabNow:this.tabs[i],
			tagLeft:left,
		});
		
	}

	public componentWillUnmount(){
		pageScroll.saveScrollTop("rank");
	}

	public componentDidMount(){
		pageScroll.setScrollTopToPage("rank");
	}

	public render() {
		const tabNow = this.state.tabNow;
		return (
			<div>
				<div className="rank-type-tabs">
                    <div className={`tab ${tabNow===this.tabs[0]?"tab-active":''}`}  onClick={()=>{this.tabTouch(0)}}>畅销榜</div>
                    <div className={`tab ${tabNow===this.tabs[1]?"tab-active":''}`} onClick={()=>{this.tabTouch(1)}}>期待榜</div>
                    <div className={`tab ${tabNow===this.tabs[2]?"tab-active":''}`} onClick={()=>{this.tabTouch(2)}}>口碑榜</div>
                    <div className={`tab ${tabNow===this.tabs[3]?"tab-active":''}`} onClick={()=>{this.tabTouch(3)}}>新游榜</div>
                    <div className="mark" style={{left:this.state.tagLeft}}/>
                </div>
				{this.state.tabNow}
			</div>
		)
	}
}

export default Rank;