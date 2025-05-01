import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Home from './components/home/Home'
import About from './components/about/About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header>header</Header>
      <main className='main'>
        <Home />
        <About></About>
      </main>

    </>
  )
}

export default App
