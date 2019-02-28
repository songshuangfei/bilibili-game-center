import * as React from 'react';
import HomeBanner from "./homeBanner";
import pageScroll from "src/components/commonFunc/scroll";
import HotGame from "./hotGame";
import HotStrategy from "./hotStrategy";
import OrderGame from "./order-game"


class Home extends React.Component {
	
	public componentWillUnmount(){
		pageScroll.saveScrollTop("home");
	}

	public componentDidMount(){
		pageScroll.setScrollTopToPage("home");
	}

	public render() {
		return (
			<div>
				<HomeBanner/>
				<HotGame/>
				<HotStrategy/>
				<OrderGame/>
			</div>
		)
	}
}
export default Home;