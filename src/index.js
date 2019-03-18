import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import App from './containers/App';
import store from "./store";
import { history } from "./history";

import "./style/index.scss";


ReactDOM.render(
  <Provider store={store}>
	<BrowserRouter history={history} basename={process.env.PUBLIC_URL}>
	  <App />
	</BrowserRouter>
  </Provider>,
  document.getElementById('root'));
