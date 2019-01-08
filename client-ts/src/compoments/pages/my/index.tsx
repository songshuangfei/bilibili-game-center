import * as React from 'react';
import pageScroll from "src/compoments/commonFunc/scroll"

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
				my

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

export default My;