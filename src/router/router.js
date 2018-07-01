import React, { Component } from 'react'
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'

import App from '../App'
import Login from '../pages/Login/Login'
import Admin from '../admin'
import Home from '../pages/Home/Home'
import Button from '../pages/UI/Button'
import NoMatch from '../pages/NoMatch/NoMatch'

export default class Router extends Component {
  render() {
    return (
      <HashRouter>
        <App>
          <Switch>
            <Route path="/login" component={Login} />
            <Route
              path="/"
              render={() => (
                <Admin>
                  <Switch>
                    <Route path="/home" component={Home} />
                    <Route path="/ui/buttons" component={Button} />
                    <Route component={NoMatch} />
                    <Redirect to="/home" />
                  </Switch>
                </Admin>
              )}
            />
          </Switch>
        </App>
      </HashRouter>
    )
  }
}
