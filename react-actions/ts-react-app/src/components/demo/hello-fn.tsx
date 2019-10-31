import React from 'react'
import { Button } from 'antd'

interface Greeting {
  name: string
}

const HelloFn = (props: Greeting) => <Button>Hello { props.name }</Button>

// const HelloFn: React.FC<Greeting> = ({
//   name,
//   children
// }) => <Button>Hello { name }</Button>

HelloFn.defaultProps = {
  name: 'React Function'
}

export default HelloFn