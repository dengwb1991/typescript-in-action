import React from 'react'

interface Greeting {
  name: string
}

const hello = (props: Greeting) => <h1>Hello { props.name }</h1>

export default hello