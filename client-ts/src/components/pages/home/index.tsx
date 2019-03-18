import * as React from 'react';
import HomeBanner from "./homeBanner";
import pageScroll from "src/components/commonFunc/scroll";
import HotGame from "./hotGame";
import HotStrategy from "./hotStrategy";
import OrderGame from "./orderGame";
import NewGame from "./newGame";
import NewestActivity from "./gameActivity/newestActivity"
import PreviousActivity from "./gameActivity/previousActivity"


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
				<NewestActivity/>
				<OrderGame/>
				<NewGame/>
				<PreviousActivity/>
			</div>
		)
	}
}
export default Home;