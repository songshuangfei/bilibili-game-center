import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        blgc
      </div>
    );
  }
}

export default App;

// import * as React from 'react';
// import { Route, Switch, } from 'react-router-dom';
// import "./App.css";
// import Nav from "./component/nav";
// import TitleBar from "./component/titleBar";

// import Home from "./component/pages/home";
// import Rank from "./component/pages/rank";
// import Find from "./component/pages/find";
// import Strategy from "./component/pages/strategy";
// import My from "./component/pages/my";

// import Search from "./component/pages/search";

// function MainPagesWrapper(){
// 	return (
// 		<div className="main-pages-wrapper">
// 			<Switch>
// 				<Route exact={true} path="/" component={Home}/>
// 				<Route path="/rank" component={Rank}/>
// 				<Route path="/find" component={Find}/>
// 				<Route path="/strategy" component={Strategy}/>
// 				<Route path="/my" component={My}/>
// 			</Switch>
// 			<TitleBar/>
// 			<Nav/>
// 		</div>
// 	)
// }

// function OtherPagesWrapper(){
// 	return (
// 		<div className="other-pages-wrapper">
// 			<Switch>
// 				<Route path="/search" component={Search}/>
// 			</Switch>
// 		</div>
// 	)
// }

// class App extends React.Component {
// 	public render() {
// 		const pathNow:string = window.location.pathname;
// 		const isMainPage:boolean = ['/','/rank','/find','/strategy','/my'].indexOf(pathNow)===-1?false:true; 
// 		return (
// 			<div className="App">
// 				{isMainPage?<MainPagesWrapper/>:<OtherPagesWrapper/>}
// 			</div>
// 		);
// 	}
// }

// export default App;
