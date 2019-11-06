import React from 'react'
import { BrowserRouter, Route }  from 'react-router-dom'

import App from '../app'

const Root = () => (
  <BrowserRouter>
    <Route path="/*" component={ App }/>
  </BrowserRouter>
)

export default Root