import React, { useState } from "react";
import Home from "./Home";
function App() {
  const [counter, setCounter] = useState(0);
  // const [variable, function()] = useState(0);
  function increment() {
    setCounter(counter + 1);
  }

  function decrement() {
    setCounter(counter - 1);
  }

  function die() {
    setCounter(0);
  }
  // counter variable
  // setCounter is a function
  // variable that will update
  // want increment & decrement on button click
  return (
    <div>
      {counter === 3 ? <h1>its 3!</h1> : null}
      <h1>{counter}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={die}>reset</button>
      <Home />
    </div>
  );
}

export default App;
