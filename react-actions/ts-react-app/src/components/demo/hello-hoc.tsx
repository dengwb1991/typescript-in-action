import React from 'react'

import HelloClass from './hello-class'

interface Loading {
  loading: boolean
}

function HelloHoc<P>(WrappedComponent: React.ComponentType<P>) {
  return class extends React.Component<P & Loading> {
    render () {
      const { loading, ...props } = this.props
      return loading ? <div>Loading ...</div> : <WrappedComponent { ...props as P }/>
    }
  }
}

export default HelloHoc(HelloClass)