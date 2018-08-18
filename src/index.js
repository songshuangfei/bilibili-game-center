import "babel-polyfill";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router } from "react-router-dom"
import App from './App';
import registerServiceWorker from './registerServiceWorker';

window.debugLog = function(text){//方便在移动端看日志
    document.getElementById("debuglog").innerHTML=text;
}

window.appDataCache ={//页面数据缓存,在切换页面后保存加载的数据，不必再执行ajax
    home:{},
    rank:{},
    find:{},
    strategy:{},
    my:{}
}

ReactDOM.render(
    <Router>
        <App/>
    </Router>, 
    document.getElementById('root'));
registerServiceWorker();
