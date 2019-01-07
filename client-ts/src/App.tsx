import * as React from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';

function Home() {
  return <div>
    {[1,2,3].map(v=><li key={v}>v</li>)}
  </div>
}

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Switch>
          <Route exact={true} path="/" component={Home}/>
        </Switch>
      </div>
    );
  }
}

export default App;
