import './App.css'
import About from './components/about/About'
import Navbar from './components/navbar/NavBar'
import Projects from './components/projetos/Projetos'
import Skills from './components/skills/Skills'
import Home from './pages/home/Home'


function App() {

  return (
    <>
    <Navbar />
    <Home />
    <Skills />
    <Projects />
    <About />
    </>
  )
}

export default App
