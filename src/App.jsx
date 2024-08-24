import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className='flex justify-center items-center flex-col'>
      <h1 className='text-5xl font-bold font-sans pt-56 text-center mb-10'>React Counter</h1> 
      <h1 className='text-9xl mb-10 font-extrabold'> {count} </h1>
      <div className="buttonDiv flex justify-center items-center flex-wrap gap-10">
     <button className='border border-blue-800 px-3 py-3 rounded-md font-semibold' onClick={() => setCount(count+1)}>Increment</button>
     <button className='border border-blue-800 px-3 py-3 rounded-md font-semibold' onClick={() => count > 0 ? setCount(count-1) : alert('Kaam kar apna')}>Decrement</button>
     <button className='border border-blue-800 px-5 py-3 rounded-md font-semibold' onClick={() => setCount(0)}>Clear</button>
     </div>
    </main>
  )
}

export default App





