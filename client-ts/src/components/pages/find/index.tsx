import * as React from 'react';
import pageScroll from "src/components/commonFunc/scroll"

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
				find
			</div>
		)
	}
}

export default Find;