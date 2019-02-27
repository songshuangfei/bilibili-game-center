import * as React from 'react';
import pageScroll from "src/components/commonFunc/scroll"

class My extends React.Component {
	public componentWillUnmount(){
		pageScroll.saveScrollTop("my");
	}

	public componentDidMount(){
		pageScroll.setScrollTopToPage("my");
	}

	public render() {
		return (
			<div>
				my
			</div>
		)
	}
}

export default My;