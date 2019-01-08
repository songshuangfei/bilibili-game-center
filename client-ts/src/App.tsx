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
