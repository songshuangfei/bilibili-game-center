import * as React from 'react';
import pageScroll from "root/components/commonFunc/scroll"

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
				str
			</div>
		)
	}
}

export default Strategy;