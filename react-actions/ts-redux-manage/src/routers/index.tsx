import React from 'react'
import { BrowserRouter, Route, Switch }  from 'react-router-dom'

import App from '../app'
import Login from '../pages/login'

const Root = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/login" component={ Login }/>
      <Route path="/*" component={ App }/>
    </Switch>
  </BrowserRouter>
)

export default Root