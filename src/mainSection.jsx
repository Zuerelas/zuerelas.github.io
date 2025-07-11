import { useState, useEffect, useMemo } from 'react'
import { Rocket, MessageCircle } from 'lucide-react'
import './App.css'

function MainText() {
    const [displayText, setDisplayText] = useState('')
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)
    const [currentWordIndex, setCurrentWordIndex] = useState(0)
    
    const words = useMemo(() => ['Developer', 'Creator', 'Innovator', 'Problem Solver'], [])
    
    useEffect(() => {
        const timer = setTimeout(() => {
            const currentWord = words[currentWordIndex]
            
            if (!isDeleting) {
                if (currentIndex < currentWord.length) {
                    setDisplayText(currentWord.substring(0, currentIndex + 1))
                    setCurrentIndex(currentIndex + 1)
                } else {
                    setTimeout(() => setIsDeleting(true), 1500)
                }
            } else {
                if (currentIndex > 0) {
                    setDisplayText(currentWord.substring(0, currentIndex - 1))
                    setCurrentIndex(currentIndex - 1)
                } else {
                    setIsDeleting(false)
                    setCurrentWordIndex((currentWordIndex + 1) % words.length)
                }
            }
        }, isDeleting ? 100 : 200)
        
        return () => clearTimeout(timer)
    }, [currentIndex, isDeleting, currentWordIndex, words])

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <div id="maintext" className="section">
            <div className="hero-content">
                <div className="hero-badge">
                    <span className="badge-text">Welcome to the Future</span>
                </div>
                
                <h1 className="hero-title">
                    Hello, I'm <span className="name-highlight">Delta</span>
                </h1>
                
                <div className="hero-subtitle">
                    <span className="static-text">Student AI & Data Science </span>
                    <span className="dynamic-text">{displayText}</span>
                    <span className="cursor">|</span>
                </div>
                
                <p className="hero-description">
                    Passionate about artificial intelligence, machine learning, and data science. 
                    I transform complex data into actionable insights and build intelligent solutions 
                    that make a difference.
                </p>
                
                <div className="hero-buttons">
                    <button className="btn primary-btn" onClick={() => scrollToSection('projects')}>
                        <Rocket size={20} /> View My Work
                    </button>
                    <button className="btn secondary-btn" onClick={() => scrollToSection('contact')}>
                        <MessageCircle size={20} /> Let's Connect
                    </button>
                </div>
                
                <div className="hero-stats">
                    <div className="stat-item">
                        <span className="stat-number">15+</span>
                        <span className="stat-label">Projects</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number">3+</span>
                        <span className="stat-label">Years Experience</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number">100%</span>
                        <span className="stat-label">Dedication</span>
                    </div>
                </div>
            </div>
            
            <div className="scroll-indicator">
                <div className="scroll-line"></div>
                <span className="scroll-text">Scroll to explore</span>
            </div>
        </div>
    )
}

export default MainText