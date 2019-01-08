import * as React from 'react';
import { Link } from 'react-router-dom';
import Banner from "../../commonComponent/banner"


class Home extends React.Component {
	

	public render() {
		const clitems:Array<{img:string,link:string}> = [
			{img:"http://192.168.1.101:8000/activityimg/1.jpg",link:"1232323"},
			{img:"http://192.168.1.101:8000/activityimg/2.jpg",link:"1232323"},
			{img:"http://192.168.1.101:8000/activityimg/2.jpg",link:"1232323"}
		];
		return (
			<div className="home-out">
				<Banner width="100%" height="40vw" items={clitems}/>
				<Link to="/search">ssss</Link>
			</div>
		)
	}
}

export default Home;