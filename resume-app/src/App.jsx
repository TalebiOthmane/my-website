import Header from './components/Header'
import About from './components/About'
import Education from './components/Education'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Certificates from './components/Certificates'
import Languages from './components/Languages'
import './App.css'

function App() {
  return (
    <div className="resume">
      <Header />
      <main className="main-content">
        <div className="left-col">
          <About />
          <Experience />
          <Projects />
        </div>
        <div className="right-col">
          <Education />
          <Skills />
          <Languages />
          <Certificates />
        </div>
      </main>
    </div>
  )
}

export default App
