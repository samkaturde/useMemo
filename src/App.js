import React, { useState, useMemo } from 'react';
import logo from './logo.svg';
import './App.css';

const AnnotherComponent = () => {
  return (
    <p>{Math.random()}</p>
  )
}

const App = () => {

  const [count, setCount] = useState(0)
  const [count2, setCount2] = useState(0)

  const increaseCount = () => {
    setCount(count + 1)
  }

  const increaseCount2 = () => {
    setCount2(count2 + 1)
  }

  const memoComponent = useMemo(() => {
    return <AnnotherComponent />;
  }, [count2])

  return (
    <>
      <h2>{count}</h2>
      <button onClick={increaseCount}>Increase By 1</button>
      <h2>{count2}</h2>
      <button onClick={increaseCount2}>Increase By 2</button>
      {memoComponent}
      {/* <AnnotherComponent /> */}
    </>
  );
}

export default App;
