import * as React from 'react';
import {
	Route,
	Switch,
	Link
} from 'react-router-dom';
import "./app.css";
import Nav from "./compoments/nav"
import TitleBar from "./compoments/titleBar"


import Home from "./compoments/pages/home";
import Rank from "./compoments/pages/rank";
import Find from "./compoments/pages/find";
import Strategy from "./compoments/pages/strategy";
import My from "./compoments/pages/my";



function Search() {
	return <div>
		<Link to="/">hhh</Link>
	</div>
}
// MainPagesWrapper 五个主要页面
function MainPagesWrapper(){
	return (
		<div className="main-pages-wrapper">
			<Switch>
				<Route exact={true} path="/" component={Home}/>
				<Route path="/rank" component={Rank}/>
				<Route path="/find" component={Find}/>
				<Route path="/strategy" component={Strategy}/>
				<Route path="/my" component={My}/>
			</Switch>
			<TitleBar/>
			<Nav/>
		</div>
	)
}

// OtherPagesWrapper 其他从侧面滑入的页面
function OtherPagesWrapper(){
	return (
		<div className="other-pages-wrapper">
			<Switch>
				<Route path="/search" component={Search}/>
			</Switch>
		</div>
	)
}

class App extends React.Component {
	public render() {
		const pathNow:string = window.location.pathname;
		const isMainPage:boolean = ['/','/rank','/find','/strategy','/my'].indexOf(pathNow)===-1?false:true; 
		return (
			<div className="App">
				{isMainPage?<MainPagesWrapper/>:<OtherPagesWrapper/>}
			</div>
		);
	}
}

export default App;
