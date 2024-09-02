import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'


function App() {
  const [num, numSet] = useState(0)
  function inc() {
    numSet(num + 1)
  }
  function Dec() {
    numSet(num - 1)
  }
  function Res() {
    numSet(0)
  }
  return (
    <>
      <h1>React Web</h1>

      <h2>{num}</h2>

      <div className='btn2'>
        <button onClick={Dec}>Decrement</button>
        <button onClick={inc} >Increment</button>
      </div>
      <div className='btn'>
        <button onClick={Res}>Reset</button>
      </div>
    </>
  )
}

export default App
