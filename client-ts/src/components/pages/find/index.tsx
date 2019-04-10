import * as React from 'react';
import pageScroll from "src/components/commonFunc/scroll";
import FindBanner from "./findBanner";
import FindType from "./findType";
import OrderNewGame from "./ordrNewGame";
import FindSpecials from "./findSpecial";
import BiliGames from "./biliGame";
import PayGames from "./payGame";
import HotComments from "./hotComment";
import FindGameClassify from "./gameClassify"

class Find extends React.Component {
	public componentWillUnmount(){
		pageScroll.saveScrollTop("find");
	}

	public componentDidMount(){
		pageScroll.setScrollTopToPage("find");
	}

	public render() {
		return (
			<div>
				<FindBanner/>
				<FindType/>
				<OrderNewGame/>
				<FindSpecials/>
				<BiliGames/>
				<PayGames/>
				<HotComments/>
				<FindGameClassify/>
			</div>
		)
	}
}

export default Find;