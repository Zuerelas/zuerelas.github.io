import { useState, useEffect } from 'react'
import { Github, Linkedin, Globe } from 'lucide-react'
import './App.css'
import Navigation from './nav.jsx'
import MainText from './mainSection.jsx'
import About from './about.jsx'
import Projects from './projects.jsx'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const renderSection = () => {
    switch(activeSection) {
      case 'home':
        return <MainText />
      case 'about':
        return <About />
      case 'projects':
        return <Projects />
      default:
        return <MainText />
    }
  }

  return (
    <div className={`app ${isLoaded ? 'loaded' : ''}`}>
      <div className="wave-background"></div>
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="main-content">
        {renderSection()}
      </main>
      <footer className="footer">
        <div className="footer-content">
          <h2>Let's Build Something Amazing Together</h2>
          <p>Ready to turn your ideas into reality? Let's connect and create something extraordinary.</p>
          <div className="social-links">
            <a href="https://github.com/DeltaAT" className="social-link glow-on-hover" target="_blank" rel="noopener noreferrer">
              <Github size={20} /> GitHub
            </a>
            <a href="#" className="social-link glow-on-hover">
              <Linkedin size={20} /> LinkedIn
            </a>
            <a href="#" className="social-link glow-on-hover">
              <Globe size={20} /> Portfolio
            </a>
          </div>
          <p style={{marginTop: '40px', fontSize: '0.9em', opacity: '0.7'}}>
            &copy; 2025 Delta Developing. Crafted with passion and precision.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
