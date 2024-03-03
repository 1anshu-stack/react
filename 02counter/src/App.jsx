import { useState } from 'react';
import './App.css'

function App() {
  let [counter, setCounter] = useState(15);
  // let counter = 5;
  const addValue = () =>{
      // console.log("add num", Math.random())
    if(counter<20)
      setCounter(counter+1);
  }

  const removeValue = () => {
    if(counter>0)
      setCounter(counter-1);
  }
  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter Value: {counter}</h2>
      <button
      onClick={addValue}
      >Add here</button>
      <br />
      <button
      onClick={removeValue}
      >Remove here</button>
    </>
  )
}

export default App
