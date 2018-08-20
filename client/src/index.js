import "babel-polyfill";
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom"
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import "./normalize.css"
import './index.css';


window.debugLog = function(text){//方便在移动端看日志（不需要就删除并删除html中class为".debuglog"的div）
    document.getElementById("debuglog").innerHTML=text;
}

window.appDataCache ={//页面数据缓存,在切换页面后保存加载的数据，不必再执行ajax
    home:{},//每个页面下有组件对象戴数据储存和翻页高度数据
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
