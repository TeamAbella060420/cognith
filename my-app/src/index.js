import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Component1 from './Component1';
import Component2 from './Component2';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Component1} />
      <Route path="/component2" component={Component2} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
