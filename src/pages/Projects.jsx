import { ExternalLink } from 'lucide-react'
import '../App.css'

const Projects = () => {
  const projects = [
    {
      title: "TrackED",
      description: "A comprehensive educational platform with progress tracking, analytics, and dashboard features for students and professors.",
      images: [
        "/src/assets/Tracked-prograd.png",
        "/src/assets/Tracked-studash.png", 
        "/src/assets/Tracked-prodash.png",
        "/src/assets/Tracked-proanalytics.png"
      ],
      tags: ["Web App", "Education", "Dashboard", "Analytics"]
    },
    {
      title: "Ctrl + Alt + Delight",
      description: "A project management dashboard with task tracking, team collaboration, and productivity analytics.",
      images: [
        "/src/assets/projdash.png",
        "/src/assets/projdash2.png"
      ],
      tags: ["Dashboard", "Productivity", "Task Management"]
    },
    {
      title: "Edren Inventory",
      description: "Inventory management system with dashboard, login system, and inventory tracking features.",
      images: [
        "/src/assets/Edrendash.png",
        "/src/assets/Edrenlog.png",
        "/src/assets/Edreninven.png"
      ],
      tags: ["Inventory", "Management", "Dashboard", "Login System"]
    }
  ]

  return (
    <div className="projects-page">
      <h1 className="page-title">My Projects</h1>
      <p className="page-subtitle">A showcase of my recent work and web applications</p>
      
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-header">
              <h2 className="project-title">{project.title}</h2>
              <div className="project-tags">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="project-tag">{tag}</span>
                ))}
              </div>
            </div>
            
            <p className="project-description">{project.description}</p>
            
            <div className="project-images">
              {project.images.map((image, imgIndex) => (
                <div key={imgIndex} className="project-image-container">
                  <img 
                    src={image} 
                    alt={`${project.title} screenshot ${imgIndex + 1}`}
                    className="project-image"
                    onError={(e) => {
                      e.target.onerror = null
                      e.target.src = "https://via.placeholder.com/400x250/1e7bb9/ffffff?text=Project+Image"
                    }}
                  />
                </div>
              ))}
            </div>
            
            <div className="project-actions">
              <button className="view-button">
                <ExternalLink size={16} />
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects