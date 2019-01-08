import * as React from 'react';
import HomeBanner from "./homeBanner";
import pageScroll from "src/compoments/commonFunc/scroll";
import HotGame from "./hotGame"

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
			</div>
		)
	}
}

export default Home;