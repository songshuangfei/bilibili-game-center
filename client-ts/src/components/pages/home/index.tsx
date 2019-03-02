import * as React from 'react';
import HomeBanner from "./homeBanner";
import pageScroll from "src/components/commonFunc/scroll";
import HotGame from "./hotGame";
import HotStrategy from "./hotStrategy";
import OrderGame from "./orderGame";
import NewGame from "./newGame";


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
				<NewGame/>
			</div>
		)
	}
}
export default Home;