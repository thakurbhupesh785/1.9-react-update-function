// updater function - aloows update based on previous data
// c- previous count represent

import React , {useState} from 'react'

function MyComponent () {

  const [count, setcount] = useState(0);

  function increment() {
    setcount(c=>c+1);
  }
  function decrement() {
    setcount(c=>c-1);
  }
  function reset() {
    setcount(0);
  }
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
      <button onClick={increment}>Increment</button>
      
    </div>
  )

}

export default MyComponent