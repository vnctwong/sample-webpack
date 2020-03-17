import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

import Users from './containers/Users';
import asyncComponent from './hoc/asyncComponent';

const AsyncPizza = asyncComponent(() => {
  return import('./containers/Pizza.js')
})

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <link to="/">Users</link> |
          <link to="/Pizza">Pizza</link>
        </div>
        <div>
          <Route path="/" exact component={Users} />
          <Route path="/Pizza" component={AsyncPizza} />
        </div>
      </div>
    )
  }
}

export default App;
