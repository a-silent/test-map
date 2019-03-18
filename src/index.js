import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { Router } from "react-router-dom";

import App from './containers/App';
import store from "./store";
import { history } from "./history";

import "./style/index.scss";


ReactDOM.render(
  <Provider store={store}>
	<Router history={history} basename={process.env.PUBLIC_URL}>
	  <App />
	</Router>
  </Provider>,
  document.getElementById('root'));
