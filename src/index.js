import "babel-polyfill";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import { BrowserRouter as Router } from "react-router-dom"
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Router>
        <App/>
    </Router>, 
    document.getElementById('root'));
registerServiceWorker();
