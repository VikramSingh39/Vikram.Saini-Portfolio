import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import About from './components/About/About'
import Skills from './components/skills/Skills'
import Services from './components/Services/Services'
import Qualification from './components/Qualification/Qualification'

function App() {

  return (
    <>
      <Header>header</Header>
      <main className='main'>
        <Home />
        <About></About>
        <Skills></Skills>
        <Services></Services>
        <Qualification></Qualification>
      </main>

    </>
  )
}

export default App
