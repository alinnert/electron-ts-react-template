import React, { useMemo, useState } from 'react'

export function Counter(): JSX.Element {
  const [count, setCount] = useState(0)

  const doubleCount = useMemo(() => {
    return count * 2
  }, [count])

  return (
    <div className="counter">
      <div className="counter__output">
        Counter: {count} / Counter * 2: {doubleCount}
      </div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}
