import * as React from 'react';
import pageScroll from "src/compoments/commonFunc/scroll";

class Rank extends React.Component {
	public componentWillUnmount(){
		pageScroll.saveScrollTop("rank");
	}

	public componentDidMount(){
		pageScroll.setScrollTopToPage("rank");
	}

	public render() {
		return (
			<div>
				rank
			</div>
		)
	}
}

export default Rank;