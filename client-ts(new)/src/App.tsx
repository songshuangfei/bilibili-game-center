import * as React from 'react';
import { Route, Switch, } from 'react-router-dom';
import "./App.css";
import Nav from "./components/nav";
import TitleBar from "./components/titleBar";

import Home from "./components/pages/home";
import Rank from "./components/pages/rank";
import Find from "./components/pages/find";
import Strategy from "./components/pages/strategy";
import My from "./components/pages/my";

import Search from "./components/pages/search";

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

