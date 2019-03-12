import * as React from 'react';
import pageScroll from "src/components/commonFunc/scroll";
import FindBanner from "./findBanner";
import FindType from "./findType";
import OrderNewGame from "./ordrNewGame"

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
			</div>
		)
	}
}

export default Find;