import React, { useState, useEffect }from 'react'
import { Button } from 'antd'

interface Greeting {
  name: string
}

const HelloHooks = (props: Greeting) => {
  const [count, setCount] = useState(0)
  const [text, setText] = useState<string | null>(null)

  useEffect(() => {
    if (count > 5) {
      setText('stop!!!')
    }
  }, [count])

  return (
    <>
      <p>你点击了 { count } 次 { text }</p>
      <Button onClick={() => setCount(count + 1)}>
        Hello { props.name }
      </Button>
    </>
  )
}

HelloHooks.defaultProps = {
  name: 'React Hooks'
}

export default HelloHooks