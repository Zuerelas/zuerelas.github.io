import { useState, useEffect } from 'react'
import { Home, User, Briefcase, Mail } from 'lucide-react'
import './App.css'

function Navigation({ activeSection, setActiveSection }) {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About Me', icon: User },
    { id: 'projects', label: 'Projects', icon: Briefcase },
    { id: 'contact', label: 'Contact', icon: Mail }
  ]

  return (
    <nav className={`navigation ${isScrolled ? 'scrolled' : ''}`} id="navigation">
      <div id="navlogoli" onClick={() => setActiveSection('home')}>
        <img src="./src/assets/delta.png" alt="Home" id="navlogo" />
        <p className="brand-text">
          <span className="text-gradient">Delta</span> Developing
        </p>
      </div>
      <ul>
        {navItems.map(item => {
          const IconComponent = item.icon
          return (
            <li 
              key={item.id}
              className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
              onClick={() => setActiveSection(item.id)}
            >
              <IconComponent className="nav-icon" size={18} />
              {item.label}
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Navigation