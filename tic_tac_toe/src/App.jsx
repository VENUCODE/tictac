import { useState } from 'react'
import '../style.scss'
// import Board from './components/Board'
function App() {
  const [counter,setCount]=useState(1); //the use states returns an array of values
  
  const setCounter=()=>{
    setCount((counter)=>{return counter+1});
  }
  return (
    <div className='app'>
   <button type="button" onClick={setCounter}>
    click me
   </button>
   <h1>{counter}</h1>
    </div>
  )
}

export default App
