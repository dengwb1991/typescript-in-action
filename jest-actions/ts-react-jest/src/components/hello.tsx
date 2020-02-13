import React from 'react'

interface Greeting {
  name: string,
  color?: string
}

const HelloJest = (props: Greeting) => <h1>Hello { props.name }</h1>

export default HelloJest