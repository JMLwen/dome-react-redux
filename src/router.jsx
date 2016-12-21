import React from 'react';
import { render } from 'react-dom';
import {Router, Route, browserHistory, Link, IndexRoute} from 'react-router';
import EatAppleGame from './containers/eatAppleGame';
import { store } from './store/store'
import { Provider } from 'react-redux'
render((
	<Provider store={store}>
		<Router history={browserHistory}>
			<Route path="/" component={EatAppleGame}>
			</Route>
		</Router>
	</Provider>
),document.getElementById("content"));
