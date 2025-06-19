
import './App.css'
import Header from './components/header/Header.jsx'
import Home from './components/homePage/Home.jsx'
import About from './components/about/About.jsx'
import Skills from './components/skills/Skills.jsx'
import Services from './components/services/Services.jsx'
import Qualification from './components/qualification/Qualification.jsx'
import Work from './components/work/Work.jsx'
import Contact from './components/contact/Contact.jsx'
import Footer from './components/footer/Footer.jsx'
import ScrollUp from './components/scrollup/ScrollUp.jsx'

function App() {

  return (
    <>
      <Header>header</Header>
      <main className='main'>
        <Home />
        <About></About>
        <Work></Work>
        <Skills></Skills>
        <Services></Services>
        <Qualification></Qualification>
        
        <Contact></Contact>
      </main>
      <Footer></Footer>
      <ScrollUp></ScrollUp>

    </>
  )
}

export default App
