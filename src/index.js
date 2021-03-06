import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, Link, browserHistory, RouteHandler } from 'react-router'
import configureStore from './store/configureStore';
import MainLayout from './components/MainLayout';
import Home from './components/Home';
import Header from './components/Header';
import Locations from './components/Locations';
import SuggestLocation from './components/SuggestLocation';
import LocationsContainer from './containers/LocationsContainer';
import SuggestLocationContainer from './containers/SuggestLocationContainer';
import AdminContainer from './containers/AdminContainer';

const store = configureStore();

render(
    <Router history={browserHistory}>
      <Route component={MainLayout} store={store}>
      <Route path="/" component={Home} />
      <Route path="/locations" component={LocationsContainer} />
      <Route path="/suggestLocation" component={SuggestLocationContainer} />
      <Route path="/admin" component={AdminContainer} />
    </Route>
  </Router>
  , document.getElementById('app')
);
