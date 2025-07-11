import { useState, useEffect, useMemo } from "react";
import { Bot, BarChart3, Brain, Globe, Settings, DollarSign, Github, ExternalLink, Trophy, CheckCircle, Clock } from 'lucide-react';
import "./App.css";

function Projects() {
    const [filter, setFilter] = useState('all')
    const [visibleProjects, setVisibleProjects] = useState([])

    const projects = useMemo(() => [
        {
            id: 1,
            title: "AI Image Classifier",
            description: "Deep learning model for image classification using TensorFlow and Keras. Trained on custom dataset with 95% accuracy.",
            category: "ai",
            tech: ["Python", "TensorFlow", "Keras", "OpenCV"],
            icon: Bot,
            github: "https://github.com/DeltaAT/ai-classifier",
            demo: "#",
            status: "completed"
        },
        {
            id: 2,
            title: "Data Analytics Dashboard",
            description: "Interactive dashboard for real-time data visualization and analytics using React and D3.js.",
            category: "data",
            tech: ["React", "D3.js", "Python", "Flask"],
            icon: BarChart3,
            github: "https://github.com/DeltaAT/analytics-dashboard",
            demo: "#",
            status: "completed"
        },
        {
            id: 3,
            title: "Neural Network Library",
            description: "Custom neural network implementation from scratch in Python for educational purposes.",
            category: "ai",
            tech: ["Python", "NumPy", "Matplotlib"],
            icon: Brain,
            github: "https://github.com/DeltaAT/neural-lib",
            demo: "#",
            status: "in-progress"
        },
        {
            id: 4,
            title: "Portfolio Website",
            description: "Modern, responsive portfolio website built with React and stunning animations.",
            category: "web",
            tech: ["React", "CSS3", "JavaScript"],
            icon: Globe,
            github: "https://github.com/DeltaAT/portfolio",
            demo: "#",
            status: "completed"
        },
        {
            id: 5,
            title: "Machine Learning Pipeline",
            description: "Automated ML pipeline for data preprocessing, model training, and deployment.",
            category: "ml",
            tech: ["Python", "Scikit-learn", "Docker", "AWS"],
            icon: Settings,
            github: "https://github.com/DeltaAT/ml-pipeline",
            demo: "#",
            status: "completed"
        },
        {
            id: 6,
            title: "Crypto Price Predictor",
            description: "LSTM neural network for cryptocurrency price prediction with real-time data integration.",
            category: "ai",
            tech: ["Python", "LSTM", "API Integration", "Pandas"],
            icon: DollarSign,
            github: "https://github.com/DeltaAT/crypto-predictor",
            demo: "#",
            status: "in-progress"
        }
    ], [])

    const categories = [
        { id: 'all', label: 'All Projects', icon: Trophy },
        { id: 'ai', label: 'AI & ML', icon: Bot },
        { id: 'data', label: 'Data Science', icon: BarChart3 },
        { id: 'web', label: 'Web Dev', icon: Globe },
        { id: 'ml', label: 'Machine Learning', icon: Settings }
    ]

    useEffect(() => {
        const filtered = filter === 'all' ? projects : projects.filter(project => project.category === filter)
        setVisibleProjects(filtered)
    }, [filter, projects])

    const getTechColor = (tech) => {
        const colors = {
            'Python': '#3776ab',
            'React': '#61dafb',
            'TensorFlow': '#ff6f00',
            'JavaScript': '#f7df1e',
            'CSS3': '#1572b6',
            'Docker': '#2496ed',
            'AWS': '#232f3e'
        }
        return colors[tech] || 'var(--accent-color)'
    }

    return (
        <div className="section projects-section">
            <h2 className="section-title">My Projects</h2>
            <p className="section-subtitle">
                Explore my latest work in AI, machine learning, and web development
            </p>

            {/* Filter Buttons */}
            <div className="filter-container">
                {categories.map(category => {
                    const IconComponent = category.icon
                    return (
                        <button
                            key={category.id}
                            className={`filter-btn ${filter === category.id ? 'active' : ''}`}
                            onClick={() => setFilter(category.id)}
                        >
                            <IconComponent className="filter-icon" size={16} />
                            {category.label}
                        </button>
                    )
                })}
            </div>

            {/* Projects Grid */}
            <div className="projects-grid">
                {visibleProjects.map((project, index) => {
                    const IconComponent = project.icon
                    return (
                        <div 
                            key={project.id} 
                            className="project-card"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="project-image">
                                <IconComponent className="project-icon" size={60} />
                                <div className="project-status">
                                    <span className={`status-badge ${project.status}`}>
                                        {project.status === 'completed' ? 
                                            <CheckCircle size={14} /> : 
                                            <Clock size={14} />
                                        } 
                                        {project.status}
                                    </span>
                                </div>
                            </div>
                        
                        <div className="project-content">
                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-description">{project.description}</p>
                            
                            <div className="project-tech">
                                {project.tech.map(tech => (
                                    <span 
                                        key={tech} 
                                        className="tech-tag"
                                        style={{ borderColor: getTechColor(tech) }}
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            
                            <div className="project-links">
                                <a 
                                    href={project.github} 
                                    className="project-link github-link"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Github size={16} /> Code
                                </a>
                                <a 
                                    href={project.demo} 
                                    className="project-link demo-link"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <ExternalLink size={16} /> Demo
                                </a>
                            </div>
                        </div>
                    </div>
                    )
                })}
            </div>

            {/* Stats Section */}
            <div className="projects-stats">
                <div className="stat-card">
                    <Trophy className="stat-icon" size={40} />
                    <span className="stat-value">{projects.length}</span>
                    <span className="stat-label">Total Projects</span>
                </div>
                <div className="stat-card">
                    <CheckCircle className="stat-icon" size={40} />
                    <span className="stat-value">{projects.filter(p => p.status === 'completed').length}</span>
                    <span className="stat-label">Completed</span>
                </div>
                <div className="stat-card">
                    <Clock className="stat-icon" size={40} />
                    <span className="stat-value">{projects.filter(p => p.status === 'in-progress').length}</span>
                    <span className="stat-label">In Progress</span>
                </div>
            </div>
        </div>
    )
}

export default Projects;