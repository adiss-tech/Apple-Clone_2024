import { useState } from 'react'
import Routing from './Router.jsx'
import './App.css'
import Header from './components/Header/Header'
 

function App() {
  const [count, setCount] = useState(0)

  return (
   <Routing/>
  )
}

export default App
