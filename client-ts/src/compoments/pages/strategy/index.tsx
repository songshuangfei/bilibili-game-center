import * as React from 'react';
import pageScroll from "src/compoments/commonFunc/scroll"

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
				str
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
			</div>
		)
	}
}

export default Strategy;