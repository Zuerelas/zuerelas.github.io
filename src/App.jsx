import React, { useState, useEffect } from 'react';
import { Home, User, Code, Mail, ExternalLink, Github, Linkedin } from 'lucide-react';
import './App.css';
import Logo from './assets/delta.png';
// import LogoWBG from './assets/deltawb.png';

// Particle Network Component
const ParticleNetwork = () => {
  useEffect(() => {
    const canvas = document.getElementById('particle-canvas');
    const ctx = canvas.getContext('2d');

    let animationFrameId;
    let time = 0;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = document.body.scrollHeight;
    };

    const drawWaveGrid = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const spacing = 50;
      const dotSize = 3;
      const lineWidth = 1;

      // Wellen-Parameter
      const waveAmplitude = 15; // Höhe der Wellen
      const waveFrequency = 0.01; // Frequenz der Wellen
      const waveSpeed = 0.005; // Geschwindigkeit der Animation

      ctx.strokeStyle = `rgba(220, 38, 38, 0.15)`;
      ctx.lineWidth = lineWidth;

      // Horizontale gewellte Linien
      for (let y = spacing; y < canvas.height; y += spacing) {
        ctx.beginPath();
        let firstPoint = true;

        for (let x = spacing; x < canvas.width; x += spacing) {
          const waveOffset = Math.sin((x + y) * waveFrequency + time * waveSpeed) * waveAmplitude;
          const currentY = y + waveOffset;

          if (firstPoint) {
            ctx.moveTo(x, currentY);
            firstPoint = false;
          } else {
            ctx.lineTo(x, currentY);
          }
        }
        ctx.stroke();
      }

      // Vertikale gewellte Linien
      for (let x = spacing; x < canvas.width; x += spacing) {
        ctx.beginPath();
        let firstPoint = true;

        for (let y = spacing; y < canvas.height; y += spacing) {
          const waveOffset = Math.sin((x + y) * waveFrequency + time * waveSpeed) * waveAmplitude;
          const currentX = x + waveOffset * 0.5; // Weniger horizontale Bewegung

          if (firstPoint) {
            ctx.moveTo(currentX, y);
            firstPoint = false;
          } else {
            ctx.lineTo(currentX, y);
          }
        }
        ctx.stroke();
      }

      // Animierte Punkte an den gewellten Schnittpunkten
      for (let x = spacing; x < canvas.width; x += spacing) {
        for (let y = spacing; y < canvas.height; y += spacing) {
          const waveOffsetX = Math.sin((x + y) * waveFrequency + time * waveSpeed) * waveAmplitude * 0.5;
          const waveOffsetY = Math.sin((x + y) * waveFrequency + time * waveSpeed) * waveAmplitude;

          ctx.beginPath();
          ctx.arc(x + waveOffsetX, y + waveOffsetY, dotSize, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(220, 38, 38, 0.4)`;
          ctx.fill();
        }
      }
    };

    const animate = () => {
      time += 1; // Zeit für Animation erhöhen
      drawWaveGrid();
      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
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
            <img src={Logo} alt="Logo" className="brand-icon" />
            <span className="brand-text">Delta-developing</span>
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
            Hi, I'm <span className="name-highlight">Delta</span>
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

          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">3+</span>
              <span className="stat-label">Projects</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">{new Date().getFullYear() - 2020}+</span>
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
  const skillCategories = [
    {
      category: 'Operating Systems',
      skills: [
        { name: 'Linux', level: 98, icon: '🐧' },
        { name: 'Windows', level: 92, icon: '🪟' },
      ],
    },
    {
      category: 'Web Development',
      skills: [
        { name: 'HTML5', level: 100, icon: '🌐' },
        { name: 'CSS/SCSS', level: 95, icon: '🎨' },
        { name: 'JavaScript', level: 85, icon: '🟨' },
        { name: 'React', level: 95, icon: '⚛️' },
        { name: 'Angular', level: 55, icon: '🔵' },
        { name: 'Node.js', level: 75, icon: '🟢' },
      ],
    },
    {
      category: 'App Development',
      skills: [
        { name: 'C/C++', level: 95, icon: '💻' },
        { name: 'Python', level: 85, icon: '🐍' },
        { name: 'Rust', level: 65, icon: '🦀' },
        { name: 'C#', level: 55, icon: '🔵' },
        { name: 'Java', level: 35, icon: '☕' },
        { name: 'Flutter', level: 30, icon: '🦋' },
      ],
    },
  ];

  return (
      <section className="section about-section" id="about">
        <div className="about-content">
          <h2 className="section-title">About Me</h2>

          <div className="about-intro">
            <div className="profile-card glass-card">
              <div className="profile-avatar">
                <img src={Logo} alt="Delta Avatar" className="avatar-image" />
              </div>
              <h3>Delta</h3>
              <p className="intro-text">
                I'm a passionate developer who loves creating beautiful and functional web applications.
                Always eager to learn new technologies and solve complex problems.
              </p>
            </div>
          </div>

          <div className="skills-section">
            <h3 className="subsection-title">Skills & Technologies</h3>
            {skillCategories.map((category, index) => (
                <div key={index} className="skill-category">
                  <h4 className="skill-category-title">{category.category}</h4>
                  <div className="skills-grid">
                    {category.skills.map((skill, skillIndex) => (
                        <div
                            key={skill.name}
                            className="skill-card glass-card"
                            style={{ animationDelay: `${skillIndex * 0.1}s` }}
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
            ))}
          </div>
        </div>
      </section>
  );
};

// Projects Section
const ProjectsSection = () => {
  const projects = [
    {
      title: 'This Website',
      description: 'A modern portfolio website showcasing my skills and projects.',
      tech: ['React', 'CSS3', 'JavaScript'],
      status: 'Completed',
      githubLink: 'https://github.com/Zuerelas/zuerelas.github.io'
    },
    {
      title: 'Suitwalk Linz Website',
      description: 'A responsive website for Suitwalk Linz, featuring a sleek design and smooth animations. With the feature of registering for the event via Telegram.',
      tech: ['React', 'Node.js', 'MariaDB', 'Telegram API'],
      status: 'Completed',
      githubLink: 'https://github.com/Zuerelas/suitwalk-linz-homepage'
    },
    {
      title: 'Suitwalk Linz Database Manager',
      description: 'A database management tool for Suitwalk Linz, allowing easy access and management of event data.',
      tech: ['Node.js', 'MariaDB', 'Express'],
      status: 'Completed',
      githubLink: 'https://github.com/Zuerelas/SW-DB-Managing'
    },
    {
      title: 'Suitwalk Linz backend',
      description: 'The backend service for Suitwalk Linz, handling all server-side logic and database interactions.',
      tech: ['Node.js', 'Express', 'MariaDB'],
      status: 'Completed',
      githubLink: 'https://github.com/Zuerelas/suitwalk-linz-backend'
    },
    {
      title: 'VidQ Game',
      description: 'A fun and interactive game i made for a school project, where you have to answer questions while watching a video.',
      tech: ['JavaScript', 'HTML5', 'CSS3'],
      status: 'Completed',
      githubLink: 'https://github.com/Xandll/video-quiz'
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
                      <a href={project.githubLink} target="_blank" className="project-link">
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
            <a href="https://github.com/Zuerelas" className="social-link">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/elias-p%C3%B6schl-888220351/" className="social-link">
              <Linkedin size={24} />
            </a>
            <a href="mailto:eliaspoe194@gmail.com" className="social-link">
              <Mail size={24} />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Delta. All rights reserved.</p>
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
