import * as React from 'react';
import pageScroll from "src/compoments/commonFunc/scroll"

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
				<li>12</li>
				<li>12</li>
				<li>12</li>
				<li>12</li>
				<li>12</li>
				<li>12</li>
				<li>12</li>
				<li>12</li>
				<li>12</li>
				<li>12</li>
				<li>12</li>
				<li>12</li>
				<li>12</li>
				<li>12</li>
				<li>12</li>
				<li>12</li>
				<li>12</li>
				<li>12</li>
				<li>12</li>
				<li>12</li>
				<li>12</li>
				<li>12</li>
				<li>12</li>
				<li>12</li>
				<li>12</li>
				<li>12</li>
				<li>12</li>
				<li>12</li>
				<li>12</li>
				<li>12</li>
				<li>12</li>
				<li>12</li>
				<li>12</li>
				<li>12</li>
				<li>12</li>
				<li>12</li>
				<li>12</li>
				<li>12</li>
				<li>12</li>
				<li>12</li>
				<li>12</li>
				<li>12</li>
				<li>12</li>
				<li>12</li>
				<li>12</li>
				<li>12</li>
				<li>12</li>
				<li>12</li>
				find

				<li>12</li>
				<li>12</li>
				<li>12</li>
				<li>12</li>
				<li>12</li>
				<li>12</li>
				<li>12</li>
				<li>12</li>
				<li>12</li>
			</div>
		)
	}
}

export default Find;