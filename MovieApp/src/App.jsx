import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import  Display  from './components/Display'
import AddMovies from './components/AddMovies'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <h1 style={{textAlign:"center"}}>Movies</h1>
   <AddMovies/>
   <Display/>
   </>
  )
}

export default App
