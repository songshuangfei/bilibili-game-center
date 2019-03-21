import * as React from 'react';
import pageScroll from "src/components/commonFunc/scroll";
import StrategyHotGame from "./strategyHotGame";
import StrategyList from "./strategyList"
class Strategy extends React.Component {
	public componentWillUnmount(){
		pageScroll.saveScrollTop("strategy");
	}

	public componentDidMount(){
		pageScroll.setScrollTopToPage("strategy");
	}

	public render() {
		return (
			<div>
				<StrategyHotGame/>
				<StrategyList/>
			</div>
		)
	}
}

export default Strategy;