import * as React from 'react';
import HomeBanner from "./homeBanner";
import pageScroll from "src/compoments/commonFunc/scroll";
import LinkTitle from "src/compoments/commonComponent/link-title"
import HotGame from "./hotGame";
import HotStrategy from "./hotStrategy"

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
				<LinkTitle title='精品推荐' link="/hotgame" backgroundColor="#fff"/>
				<HotGame/>
				<LinkTitle title='热门攻略' link="/strategy" backgroundColor="none"/>
				<HotStrategy/>
				<li>1</li>
				<li>1</li>
				<li>1</li>
				<li>1</li>
				<li>1</li>
				<li>1</li>
				<li>1</li>
				<li>1</li>
				<li>1</li>
				<li>1</li>
				<li>1</li>
				<li>1</li>
				<li>1</li>
				<li>1</li>
				<li>1</li>
				<li>1</li>
				<li>1</li>
				<li>1</li>
				<li>1</li>
				<li>1</li>
				<li>1</li>
				<li>1</li>
				<li>1</li>
				<li>1</li>
			</div>
		)
	}
}

export default Home;