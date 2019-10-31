import React from 'react'
import { Button } from 'antd'

interface Greeting {
  name: string
}

interface HelloState {
  count: number
}

class HelloClass extends React.Component<Greeting, HelloState> {
  state: HelloState = {
    count: 0
  }
  static defaultProps = {
    name: 'React Class'
  }
  render () {
    return (
      <>
        <p>count: { this.state.count }</p>
        <Button onClick={ () => this.setState({ count: this.state.count + 1 }) }>Hello { this.props.name }</Button>
      </>
    )
  }
}

export default HelloClass