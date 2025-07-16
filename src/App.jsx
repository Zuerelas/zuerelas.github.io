import React, { useState, useEffect } from 'react';
import { Home, User, Code, Mail, ExternalLink, Github, Linkedin } from 'lucide-react';
import './App.css';

// Particle Network Component
const ParticleNetwork = () => {
  useEffect(() => {
    const canvas = document.getElementById('particle-canvas');
    const ctx = canvas.getContext('2d');

    // Aktuelle und Ziel-Mausposition
    let currentMouseX = 0;
    let currentMouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    let animationFrameId;

    const resizeCanvas = () => {
      // Canvas auf die volle Dokumenthöhe setzen
      const documentHeight = Math.max(
        document.body.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.clientHeight,
        document.documentElement.scrollHeight,
        document.documentElement.offsetHeight
      );

      canvas.width = window.innerWidth;
      canvas.height = documentHeight;
      canvas.style.height = documentHeight + 'px';
    };

    const handleMouseMove = (e) => {
      // Ziel-Mausposition relativ zur Scroll-Position berechnen
      targetMouseX = e.clientX;
      targetMouseY = e.clientY + window.scrollY;
    };

    const lerp = (start, end, factor) => {
      return start + (end - start) * factor;
    };

    const drawGrid = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Smooth interpolation für Following-Effekt
      const followSpeed = 0.08; // Langsamere Geschwindigkeit für smootheres Following
      currentMouseX = lerp(currentMouseX, targetMouseX, followSpeed);
      currentMouseY = lerp(currentMouseY, targetMouseY, followSpeed);

      const spacing = 40; // Abstand zwischen Punkten
      const dotSize = 2;
      const lightRadius = 150; // Leicht größerer Radius für besseren Effekt

      for (let x = spacing; x < canvas.width; x += spacing) {
        for (let y = spacing; y < canvas.height; y += spacing) {
          const dx = x - currentMouseX;
          const dy = y - currentMouseY;
          const distance = Math.sqrt(dx * dx + dy * dy);

          // Licht-Effekt berechnen mit sanftem Übergang
          let opacity = 0.2;
          let size = dotSize;

          if (distance < lightRadius) {
            const effect = 1 - (distance / lightRadius);
            // Smoothere Kurve für den Licht-Effekt
            const smoothEffect = Math.pow(effect, 1.5);
            opacity = 0.2 + (smoothEffect * 0.8);
            size = dotSize + (smoothEffect * 4);
          }

          ctx.beginPath();
          ctx.arc(x, y, size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(220, 38, 38, ${opacity})`;
          ctx.fill();
        }
      }
    };

    const animate = () => {
      drawGrid();
      animationFrameId = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      resizeCanvas();
    };

    const handleScroll = () => {
      // Bei Scroll die Zielposition entsprechend anpassen
      targetMouseY = targetMouseY - window.scrollY + window.scrollY;
    };

    // Event Listeners
    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    // Initiale Werte setzen
    const rect = canvas.getBoundingClientRect();
    currentMouseX = window.innerWidth / 2;
    currentMouseY = window.innerHeight / 2;
    targetMouseX = currentMouseX;
    targetMouseY = currentMouseY;

    // Initiale Größenanpassung mit kleiner Verzögerung
    setTimeout(resizeCanvas, 100);
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas id="particle-canvas" className="particle-canvas" />;
};

// Navigation Component
const Navigation = ({ activeSection, setActiveSection }) => {
  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'projects', label: 'Projects', icon: Code }
  ];

  return (
      <nav className="glass-nav">
        <div className="nav-container">
          <div className="nav-brand">
            <div className="brand-icon">E</div>
            <span className="brand-text">Elias</span>
          </div>

          <ul className="nav-menu">
            {navItems.map(({ id, label, icon: Icon }) => (
                <li
                    key={id}
                    className={`nav-item ${activeSection === id ? 'active' : ''}`}
                    onClick={() => setActiveSection(id)}
                >
                  <Icon size={18} />
                  <span>{label}</span>
                </li>
            ))}
          </ul>
        </div>
      </nav>
  );
};

// Home Section
const HomeSection = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const roles = ['Developer', 'Designer', 'Creator', 'Innovator'];
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const currentRole = roles[roleIndex];

    if (currentIndex < currentRole.length) {
      const timeout = setTimeout(() => {
        setDisplayText(currentRole.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCurrentIndex(0);
        setDisplayText('');
        setRoleIndex((roleIndex + 1) % roles.length);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, roleIndex, roles]);

  return (
      <section className="section hero-section" id="home">
        <div className="hero-content fade-in">
          <div className="hero-badge">
            <span className="badge-text">Welcome to my portfolio</span>
          </div>

          <h1 className="hero-title">
            Hi, I'm <span className="name-highlight">Elias</span>
          </h1>

          <div className="hero-subtitle">
            <span className="static-text">I'm a </span>
            <span className="dynamic-text">{displayText}</span>
            <span className="cursor">|</span>
          </div>

          <p className="hero-description">
            Passionate about creating amazing digital experiences with modern technologies.
            I love building things that make a difference.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn primary-btn">
              <Code size={20} />
              View My Work
            </a>
            <a href="#about" className="btn secondary-btn">
              <User size={20} />
              About Me
            </a>
          </div>

          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">5+</span>
              <span className="stat-label">Projects</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">2+</span>
              <span className="stat-label">Years</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">∞</span>
              <span className="stat-label">Ideas</span>
            </div>
          </div>
        </div>
      </section>
  );
};

// About Section
const AboutSection = () => {
  const skills = [
    { name: 'React', level: 90, icon: '⚛️' },
    { name: 'JavaScript', level: 85, icon: '🟨' },
    { name: 'Python', level: 80, icon: '🐍' },
    { name: 'CSS/Sass', level: 88, icon: '🎨' },
    { name: 'Node.js', level: 75, icon: '🟢' },
    { name: 'Git', level: 82, icon: '📚' }
  ];

  return (
      <section className="section about-section" id="about">
        <div className="about-content">
          <h2 className="section-title">About Me</h2>

          <div className="about-intro">
            <div className="profile-card glass-card">
              <div className="profile-avatar">
                <User size={60} className="avatar-icon" />
              </div>
              <h3>Elias</h3>
              <p className="intro-text">
                I'm a passionate developer who loves creating beautiful and functional web applications.
                Always eager to learn new technologies and solve complex problems.
              </p>
            </div>
          </div>

          <div className="skills-section">
            <h3 className="subsection-title">Skills & Technologies</h3>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                  <div
                      key={skill.name}
                      className="skill-card glass-card"
                      style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="skill-header">
                      <span className="skill-icon">{skill.icon}</span>
                      <h4 className="skill-name">{skill.name}</h4>
                    </div>
                    <div className="skill-progress">
                      <div className="progress-bar">
                        <div
                            className="progress-fill"
                            style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                  </div>
              ))}
            </div>
          </div>
        </div>
      </section>
  );
};

// Projects Section
const ProjectsSection = () => {
  const projects = [
    {
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio built with React and advanced CSS animations.',
      tech: ['React', 'CSS3', 'JavaScript'],
      status: 'Completed',
      icon: '🌐'
    },
    {
      title: 'Task Manager App',
      description: 'A full-stack task management application with real-time updates.',
      tech: ['React', 'Node.js', 'MongoDB'],
      status: 'In Progress',
      icon: '📋'
    },
    {
      title: 'Weather Dashboard',
      description: 'Beautiful weather app with location-based forecasts and interactive charts.',
      tech: ['React', 'APIs', 'Chart.js'],
      status: 'Completed',
      icon: '🌤️'
    }
  ];

  return (
      <section className="section projects-section" id="projects">
        <div className="projects-content">
          <h2 className="section-title">My Projects</h2>

          <div className="projects-grid">
            {projects.map((project, index) => (
                <div
                    key={project.title}
                    className="project-card glass-card"
                    style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="project-image">
                    <span className="project-icon">{project.icon}</span>
                  </div>

                  <div className="project-content">
                    <div className="project-header">
                      <h3 className="project-title">{project.title}</h3>
                      <span className={`status-badge ${project.status.toLowerCase().replace(' ', '-')}`}>
                    {project.status}
                  </span>
                    </div>

                    <p className="project-description">{project.description}</p>

                    <div className="project-tech">
                      {project.tech.map(tech => (
                          <span key={tech} className="tech-tag">{tech}</span>
                      ))}
                    </div>

                    <div className="project-links">
                      <a href="#" className="project-link">
                        <ExternalLink size={16} />
                        Live Demo
                      </a>
                      <a href="#" className="project-link">
                        <Github size={16} />
                        Code
                      </a>
                    </div>
                  </div>
                </div>
            ))}
          </div>
        </div>
      </section>
  );
};

// Footer Component
const Footer = () => {
  return (
      <footer className="glass-footer">
        <div className="footer-content">
          <div className="footer-info">
            <h3>Let's Connect</h3>
            <p>Ready to bring your ideas to life? Let's work together!</p>
          </div>

          <div className="social-links">
            <a href="#" className="social-link">
              <Github size={24} />
            </a>
            <a href="#" className="social-link">
              <Linkedin size={24} />
            </a>
            <a href="#" className="social-link">
              <Mail size={24} />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 Elias. All rights reserved.</p>
        </div>
      </footer>
  );
};

// Main App Component
const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 100);
  }, []);

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <HomeSection />;
      case 'about':
        return <AboutSection />;
      case 'projects':
        return <ProjectsSection />;
      default:
        return <HomeSection />;
    }
  };

  return (
      <div className={`app ${isLoaded ? 'loaded' : ''}`}>
        <ParticleNetwork />
        <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />

        <main className="main-content">
          {renderSection()}
        </main>

        <Footer />
      </div>
  );
};

export default App;
