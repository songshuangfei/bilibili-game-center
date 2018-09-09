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
  My,
  MsgPage,
  SearchPage,
} from "./component/pages"
import './App.less';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/rank" component={RankingList}/>
          <Route path="/find" component={Find}/>
          <Route path="/strategy" component={GameStrategy}/>
          <Route path="/my" component={My}/>
          <Route path="/msg" component={MsgPage}/>
          <Route path="/search" component={SearchPage}/>
        </Switch>
        <TitleBar />{/*title和nav是fixed定位所以要放下面*/}
        <Switch>
          <Route exact path="/" component={NavBar}/>
          <Route path="/rank" component={NavBar}/>
          <Route path="/find" component={NavBar}/>
          <Route path="/strategy" component={NavBar}/>
          <Route path="/my" component={NavBar}/>
        </Switch>
      </div>
    );
  }
}

export default App;
