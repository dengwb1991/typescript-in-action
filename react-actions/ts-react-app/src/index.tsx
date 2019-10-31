import React from 'react'
import ReactDOM from 'react-dom'

import HelloFn from './components/demo/hello-fn'
import HelloClass from './components/demo/hello-class'
import HelloHoc from './components/demo/hello-hoc'
import HelloHooks from './components/demo/hello-hooks'

ReactDOM.render(
  <>
    <HelloFn/>
    <HelloClass/>
    <HelloHoc name="TypeScript" loading={ true }/>
    <HelloHooks/>
  </>,
  document.getElementById('app')
)