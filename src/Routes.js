import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'

import App from './containers/App'

const Routes = () => (
  <Router>
    <Switch>
      <Route path="/:id" component={App} />
      <Route component={App} />
    </Switch>
  </Router>
)

export default Routes