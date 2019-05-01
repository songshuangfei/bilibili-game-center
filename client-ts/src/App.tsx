import * as React from 'react';
import { Route, Switch, } from 'react-router-dom';
import "./app.css";
import Nav from "./components/nav";
import TitleBar from "./components/titleBar";

import Home from "./components/pages/home";
import Rank from "./components/pages/rank";
import Find from "./components/pages/find";
import Strategy from "./components/pages/strategy";
import My from "./components/pages/my";

import Search from "./components/pages/search/";
import GamePage from './components/pages/gamePage';
import MsgPage from "./components/pages/msg";
import MyDownload  from "./components/pages/my-download";
import NotFound from "./components/pages/notFound";
import Setting from "./components/pages/setting"

function MainPagesWrapper(){
	const pathNow:string = window.location.pathname;
		const isManPage:boolean = ['/','/rank','/find','/strategy','/my'].indexOf(pathNow)===-1?false:true; 
	return (
		<div className="title-pages-wrapper">
			<Switch>
				<Route exact={true} path="/" component={Home}/>
				<Route path="/rank" component={Rank}/>
				<Route path="/find" component={Find}/>
				<Route path="/strategy" component={Strategy}/>
				<Route path="/my" component={My}/>
				<Route path="/msg" component={MsgPage} />
				<Route path="/mydownload" component={MyDownload} />
				<Route path="/setting" component={Setting} />
			</Switch>
			<TitleBar/>
			{isManPage?<Nav/>:""}
		</div>
	)
}

function OtherPagesWrapper(){
	return (
		<div className="no-title-pages-wrapper">
			<Switch>
				<Route path="/search" component={Search}/>
				<Route path="/game" component={GamePage} />
				<Route path="*" component={NotFound} />
			</Switch>
		</div>
	)
}

class App extends React.Component {
	public render() {
		const pathNow:string = window.location.pathname;
		const isTitlePage:boolean = ['/','/rank','/find','/strategy','/my','/msg',"/mydownload","/setting"].indexOf(pathNow)===-1?false:true; 
		return (
			<div className="App">
				{isTitlePage?<MainPagesWrapper/>:<OtherPagesWrapper/>}
			</div>
		);
	}
}

export default App;
