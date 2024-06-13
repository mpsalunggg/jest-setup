import { FC, useState } from 'react'

const Counter: FC = () => {
  const [count, setCount] = useState<number>(0)

  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () => {
    setCount(count - 1)
  }

  return (
    <div>
      <h1 data-testid="count">{count}</h1>
      <button onClick={increment} data-testid="increment">
        Increment
      </button>
      <button onClick={decrement} data-testid="decrement">
        Decrement
      </button>
    </div>
  )
}

export default Counter
