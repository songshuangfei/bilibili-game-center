import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import App from './App';
import './normalize.css';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import store from "./store";
ReactDOM.render(
	<BrowserRouter>
			<Provider store={store}>
				<App />
			</Provider>
	</BrowserRouter>,
	document.getElementById('root') as HTMLElement
);
registerServiceWorker();
