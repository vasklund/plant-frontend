import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App.jsx';
import Home from './components/Home.jsx';
import AddPlant from './components/AddPlant.jsx';
import ViewPlants from './components/ViewPlants.jsx';
import NoMatch from './components/NoMatch.jsx';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="add_plant" component={AddPlant} />
    <Route path="view_plants" components={ViewPlants} />
    <Route path="*" component={NoMatch} />
  </Route>
);
