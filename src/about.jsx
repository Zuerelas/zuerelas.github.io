import { useState } from "react";
import {
  Bot,
  BarChart3,
  Code,
  Atom,
  Brain,
  Zap,
  Trophy,
  Target,
  BookOpen,
  Star,
  User,
  Rocket,
} from "lucide-react";
import "./App.css";

function About() {
  const [skills] = useState([
    {
      name: "Artificial Intelligence",
      icon: Bot,
      description: "Deep learning, neural networks, and AI model development",
      level: 90,
    },
    {
      name: "Data Science",
      icon: BarChart3,
      description: "Data analysis, visualization, and statistical modeling",
      level: 85,
    },
    {
      name: "Python",
      icon: Code,
      description: "Backend development, automation, and ML frameworks",
      level: 95,
    },
    {
      name: "React",
      icon: Atom,
      description: "Modern web development and component-based architecture",
      level: 80,
    },
    {
      name: "Machine Learning",
      icon: Brain,
      description: "Supervised learning, unsupervised learning, and MLOps",
      level: 88,
    },
    {
      name: "JavaScript",
      icon: Zap,
      description: "Frontend development and interactive web applications",
      level: 82,
    },
  ]);

  const [achievements] = useState([
    {
      title: "15+ Projects Completed",
      description: "Successfully delivered various AI and web development projects",
      icon: Trophy,
    },
    {
      title: "95% Model Accuracy",
      description: "Achieved high accuracy in machine learning classification tasks",
      icon: Target,
    },
    {
      title: "3+ Years Experience",
      description: "Continuous learning and development in tech field",
      icon: BookOpen,
    },
    {
      title: "Open Source Contributor",
      description: "Active contributor to various open source projects",
      icon: Star,
    },
  ]);

  return (
    <div className="section about-section">
      <h2 className="section-title">About Me</h2>
      <div className="about-content">
        <div className="about-intro">
          <div className="profile-card">
            <div className="profile-avatar">
              <User className="avatar-icon" size={48} />
            </div>
            <h3>Delta - AI Enthusiast</h3>
            <p className="intro-text">
              I'm a passionate student developer specializing in AI and Data Science.
              I love creating innovative solutions that bridge the gap between complex
              data and meaningful insights. My journey in technology is driven by
              curiosity and the desire to make a positive impact through code.
            </p>
          </div>
        </div>

        <div className="skills-section">
          <h3 className="subsection-title">Technical Skills</h3>
          <div className="skills-grid">
            {skills.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <div
                  key={index}
                  className="skill-card"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="skill-header">
                    <IconComponent className="skill-icon" size={32} />
                    <h4 className="skill-name">{skill.name}</h4>
                  </div>
                  <p className="skill-description">{skill.description}</p>
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
              );
            })}
          </div>
        </div>

        <div className="achievements-section">
          <h3 className="subsection-title">Achievements</h3>
          <div className="achievements-grid">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <div
                  key={index}
                  className="achievement-card"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <IconComponent className="achievement-icon" size={40} />
                  <h4 className="achievement-title">{achievement.title}</h4>
                  <p className="achievement-description">
                    {achievement.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="journey-section">
          <h3 className="subsection-title">My Journey</h3>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-icon">
                <Rocket size={24} />
              </div>
              <div className="timeline-content">
                <h4>Started Programming</h4>
                <p>
                  Began my journey with Python and fell in love with the endless
                  possibilities of code
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-icon">
                <Bot size={24} />
              </div>
              <div className="timeline-content">
                <h4>Discovered AI</h4>
                <p>
                  Explored machine learning and deep learning, fascinated by
                  intelligent systems
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-icon">
                <BarChart3 size={24} />
              </div>
              <div className="timeline-content">
                <h4>Data Science Focus</h4>
                <p>
                  Specialized in data analysis and visualization, turning data
                  into insights
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-icon">
                <Star size={24} />
              </div>
              <div className="timeline-content">
                <h4>Building the Future</h4>
                <p>
                  Currently developing innovative AI solutions and expanding my
                  expertise
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;