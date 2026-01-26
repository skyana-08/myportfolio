import { CheckCircle, Code, TestTube, Brain } from 'lucide-react'
import '../App.css'

const Skills = () => {
  const skillCategories = [
    {
      title: "Analytical Skills",
      icon: Brain,
      skills: [
        "Problem Solving & Critical Thinking",
        "Data Analysis & Interpretation",
        "Requirements Gathering",
        "Process Optimization",
        "Technical Documentation"
      ]
    },
    {
      title: "Programming",
      icon: Code,
      skills: [
        "Entry Level Python Programming",
        "Entry Level C++ Programming",
        "Web Development (HTML, CSS, JavaScript)",
        "React.js Development",
        "REST API Integration"
      ]
    },
    {
      title: "Quality Assurance",
      icon: TestTube,
      skills: [
        "Quality Assurance Testing/Analysis",
        "Test Case Development",
        "Bug Tracking & Reporting",
        "User Acceptance Testing",
        "Regression Testing"
      ]
    },
    {
      title: "Design & Development",
      icon: CheckCircle,
      skills: [
        "UI/UX Design Principles",
        "Responsive Web Design",
        "Frontend Development",
        "Version Control (Git)",
        "Agile/Scrum Methodology"
      ]
    }
  ]

  return (
    <div className="skills-page">
      <h1 className="page-title">My Skills</h1>
      <p className="page-subtitle">Technical expertise and professional competencies</p>
      
      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-category-card">
            <div className="skill-category-header">
              <category.icon size={28} className="category-icon" />
              <h2 className="skill-category-title">{category.title}</h2>
            </div>
            
            <ul className="skills-list">
              {category.skills.map((skill, skillIndex) => (
                <li key={skillIndex} className="skill-item">
                  <CheckCircle size={16} className="check-icon" />
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      
      <div className="additional-skills">
        <h3>Additional Competencies</h3>
        <div className="additional-skills-grid">
          <span className="skill-badge">Team Collaboration</span>
          <span className="skill-badge">Communication</span>
          <span className="skill-badge">Project Management</span>
          <span className="skill-badge">Time Management</span>
          <span className="skill-badge">Attention to Detail</span>
          <span className="skill-badge">Adaptability</span>
        </div>
      </div>
    </div>
  )
}

export default Skills