import React, { Component } from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom'
import { TitleBar } from "./component/titleBar"
import { NavBar } from "./component/navBar"

import { 
  Home,
  RankingList,
  Find,
  GameStrategy,
  My
} from "./component/pages"
import "./normalize.css"
import './App.less';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TitleBar />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/rank" component={RankingList}/>
          <Route path="/find" component={Find}/>
          <Route path="/strategy" component={GameStrategy}/>
          <Route path="/my" component={My}/>
        </Switch>
        <NavBar />
      </div>
    );
  }
}

export default App;
