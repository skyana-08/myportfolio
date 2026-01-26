import { useState, useEffect } from 'react'
import { 
  FolderKanban, 
  Code2, 
  User, 
  Mail,
  Moon,
  Sun,
  X,
  CheckCircle,
  Brain,
  TestTube,
  Download,
  Linkedin,
  Facebook,
  Palette
} from 'lucide-react'

// Import all images from src/assets/
import trackedPrograd from './assets/Tracked-prograd.png'
import trackedStudash from './assets/Tracked-studash.png'
import trackedProdash from './assets/Tracked-prodash.png'
import trackedProanalytics from './assets/Tracked-proanalytics.png'
import projdash from './assets/projdash.png'
import projdash2 from './assets/projdash2.png'
import edrendash from './assets/Edrendash.png'
import edrenlog from './assets/Edrenlog.png'
import edreninven from './assets/Edreninven.png'
import bryleCV from './assets/Bryle CV.jpeg'
import bryleCVpdf from './assets/Bryle CV.pdf'

import './App.css'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [activeModal, setActiveModal] = useState(null)

  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    setIsDarkMode(prefersDark)
    
    if (prefersDark) {
      document.documentElement.classList.add('dark-mode')
    }
  }, [])

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
    document.documentElement.classList.toggle('dark-mode')
  }

  const openModal = (modal) => {
    setActiveModal(modal)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setActiveModal(null)
    document.body.style.overflow = 'auto'
  }

  // Handle ESC key to close modal
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') closeModal()
    }
    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [])

  const projects = [
    {
      name: "TrackED",
      description: "A comprehensive educational platform with progress tracking, analytics, and dashboard features for students and professors.",
      tags: ["Web App", "Education", "Dashboard", "Analytics"],
      images: [
        { src: trackedPrograd, alt: "TrackED Progress Dashboard" },
        { src: trackedStudash, alt: "TrackED Student Dashboard" },
        { src: trackedProdash, alt: "TrackED Professor Dashboard" },
        { src: trackedProanalytics, alt: "TrackED Analytics Dashboard" }
      ]
    },
    {
      name: "Ctrl + Alt + Delight",
      description: "A project management dashboard with task tracking, team collaboration, and productivity analytics.",
      tags: ["Dashboard", "Productivity", "Task Management"],
      images: [
        { src: projdash, alt: "Project Dashboard 1" },
        { src: projdash2, alt: "Project Dashboard 2" }
      ]
    },
    {
      name: "Edren Inventory",
      description: "Inventory management system with dashboard, login system, and inventory tracking features.",
      tags: ["Inventory", "Management", "Dashboard", "Login System"],
      images: [
        { src: edrendash, alt: "Edren Dashboard" },
        { src: edrenlog, alt: "Edren Login System" },
        { src: edreninven, alt: "Edren Inventory Management" }
      ]
    }
  ]

  const skills = [
    {
      category: "Analytical Skills",
      icon: Brain,
      items: [
        "Problem Solving & Critical Thinking",
        "Data Analysis & Interpretation", 
        "Technical Documentation"
      ]
    },
    {
      category: "Programming",
      icon: Code2,
      items: [
        "Entry Level Python Programming",
        "Entry Level C++ Programming",
        "Web Development (HTML, CSS, JavaScript)",
      ]
    },
    {
      category: "Quality Assurance",
      icon: TestTube,
      items: [
        "Quality Assurance Testing/Analysis",
        "Test Case Development",
        "Bug Tracking & Reporting",
      ]
    },
  ]

  const contactInfo = [
    {
      platform: "Email",
      icon: Mail,
      value: "brielleanabalatayo@gmail.com",
      action: () => window.location.href = "mailto:brielleanabalatayo@gmail.com"
    },
    {
      platform: "LinkedIn",
      icon: Linkedin,
      value: "linkedin.com/in/brielle-edrian-balatayo",
      action: () => window.open("https://www.linkedin.com/in/brielle-edrian-balatayo-1850a83a3", "_blank")
    },
    {
      platform: "Facebook",
      icon: Facebook,
      value: "facebook.com/bryleana.balatayo",
      action: () => window.open("https://www.facebook.com/bryleana.balatayo", "_blank")
    }
  ]

  const handleDownloadCV = () => {
    const link = document.createElement('a')
    link.href = bryleCVpdf
    link.download = 'Bryle_Balatayo_CV.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className={`app ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      {/* Theme Toggle */}
      <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
        {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
      </button>
      
      {/* Main Container */}
      <div className="container">
        <header>
          <h1>Bryle Portfolio</h1>
          <h2>Information Technology Student</h2>
        </header>
        
        <main className="main-content">
          {/* Main Sections */}
          <div className="sections-grid">
            <div className="section-card" onClick={() => openModal('projects')}>
              <div className="section-icon">
                <FolderKanban size={32} />
              </div>
              <h3 className="section-title">Projects</h3>
              <p className="section-description">
                View my web development projects including TrackED, Ctrl + Alt + Delight, and Edren Inventory.
              </p>
            </div>
            
            <div className="section-card" onClick={() => openModal('skills')}>
              <div className="section-icon">
                <Code2 size={32} />
              </div>
              <h3 className="section-title">Skills</h3>
            </div>
          </div>
          
          {/* About & Contact Cards */}
          <div className="info-sections">
            <div className="info-card" onClick={() => openModal('about')}>
              <div className="info-header">
                <div className="info-icon">
                  <User size={24} />
                </div>
                <h3 className="info-title">About Me</h3>
              </div>
              <p className="info-content">
                Learn about my background, experience, and download my CV to see my complete qualifications.
              </p>
            </div>
            
            <div className="info-card" onClick={() => openModal('contact')}>
              <div className="info-header">
                <div className="info-icon">
                  <Mail size={24} />
                </div>
                <h3 className="info-title">Contact</h3>
              </div>
              <p className="info-content">
                Get in touch with me through email, LinkedIn, or Facebook for collaborations and opportunities.
              </p>
            </div>
          </div>
        </main>
      </div>
      
      {/* Projects Modal */}
      {activeModal === 'projects' && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h2 className="modal-title">
                <FolderKanban size={28} />
                My Projects
              </h2>
              <button className="close-button" onClick={closeModal}>
                <X size={20} />
              </button>
            </div>
            
            <div className="modal-body">
              <div className="projects-grid">
                {projects.map((project, index) => (
                  <div key={index} className="project-item">
                    <div className="project-header">
                      <h3 className="project-name">{project.name}</h3>
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
                            src={image.src} 
                            alt={image.alt}
                            className="project-image"
                            onError={(e) => {
                              e.target.onerror = null
                              e.target.src = `https://via.placeholder.com/300x200/2B6CB0/FFFFFF?text=${encodeURIComponent(project.name)}+${imgIndex + 1}`
                            }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Skills Modal */}
      {activeModal === 'skills' && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h2 className="modal-title">
                <Code2 size={28} />
                My Skills
              </h2>
              <button className="close-button" onClick={closeModal}>
                <X size={20} />
              </button>
            </div>
            
            <div className="modal-body">
              <div className="skills-grid">
                {skills.map((category, index) => (
                  <div key={index} className="skill-category">
                    <h3 className="skill-category-title">
                      <category.icon size={20} />
                      {category.category}
                    </h3>
                    <ul className="skills-list">
                      {category.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="skill-item">
                          <CheckCircle size={16} className="check-icon" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              
              <div style={{ marginTop: 'var(--spacing-2xl)', padding: 'var(--spacing-xl)', background: 'rgba(255, 255, 255, 0.05)', borderRadius: 'var(--radius-lg)' }}>
                <h3 style={{ color: 'var(--accent-blue)', marginBottom: 'var(--spacing-md)' }}>
                  Additional Competencies
                </h3>
                <div style={{ display: 'flex', gap: 'var(--spacing-sm)', flexWrap: 'wrap' }}>
                  {['Team Collaboration', 'Communication', 'Project Management', 'Time Management', 'Attention to Detail', 'Adaptability'].map((skill, index) => (
                    <span key={index} className="project-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* About Modal */}
      {activeModal === 'about' && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h2 className="modal-title">
                <User size={28} />
                About Me
              </h2>
              <button className="close-button" onClick={closeModal}>
                <X size={20} />
              </button>
            </div>
            
            <div className="modal-body">
              <div className="about-content">
                <div className="cv-image-container">
                  <img 
                    src={bryleCV} 
                    alt="Bryle Balatayo CV"
                    className="cv-image"
                    onError={(e) => {
                      e.target.onerror = null
                      e.target.src = "https://via.placeholder.com/300x400/2B6CB0/FFFFFF?text=CV+Preview"
                    }}
                  />
                </div>
                
                <div className="about-details">
                  <h3>Brielle Edrian Balatayo</h3>
                  <p className="about-text">
                    Detail-oriented Information Technology Student specializing in quality assurance experienced in both backend testing 
                    and frontend validation. Able to Identify bugs, documenting defects, and ensure software reliability. Eager to learn 
                    and deliver good outputs.
                  </p>
                  
                  
                  <div style={{ marginBottom: 'var(--spacing-xl)' }}>
                    <h4 style={{ color: 'var(--accent-blue)', marginBottom: 'var(--spacing-md)' }}>Education</h4>
                    <p style={{ color: 'var(--text-gray)' }}>Bachelor of Science in Information Technology Student at Cavite STate University - Imus Campus</p>
                  </div>
                  
                  <button className="download-button" onClick={handleDownloadCV}>
                    <Download size={20} />
                    Download CV (PDF)
                  </button>
                  
                  <p style={{ marginTop: 'var(--spacing-sm)', fontSize: 'var(--text-sm)', opacity: 0.7, color: 'var(--text-gray)' }}>
                    Click to download my Info in PDF format.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Contact Modal */}
      {activeModal === 'contact' && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h2 className="modal-title">
                <Mail size={28} />
                Contact
              </h2>
              <button className="close-button" onClick={closeModal}>
                <X size={20} />
              </button>
            </div>
            
            <div className="modal-body">
              <div className="contact-content">
                <div className="contact-info">
                  <h3>Get in Touch</h3>
                  <p style={{ marginBottom: 'var(--spacing-lg)', opacity: 0.9, color: 'var(--text-gray)' }}>
                    I'm always open to discussing new opportunities, creative projects, or just having a chat about technology and design.
                  </p>
                  
                  <ul className="contact-list">
                    {contactInfo.map((contact, index) => (
                      <li key={index} className="contact-item" onClick={contact.action}>
                        <div className="contact-icon">
                          <contact.icon size={20} />
                        </div>
                        <div className="contact-text">
                          <div className="contact-label">{contact.platform}</div>
                          <div className="contact-value">{contact.value}</div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="contact-info">
                  
                  <div style={{ 
                    background: 'rgba(255, 255, 255, 0.05)', 
                    padding: 'var(--spacing-lg)', 
                    borderRadius: 'var(--radius-lg)',
                    border: '1px solid rgba(255, 255, 255, 0.1)'
                  }}>
                    <h4 style={{ color: 'var(--accent-blue)', marginBottom: 'var(--spacing-md)' }}>
                      Preferred Contact Method
                    </h4>
                    <p style={{ opacity: 0.9, color: 'var(--text-gray)' }}>
                      Email is the best way to reach me for professional inquiries. For quick questions or networking, LinkedIn works great too!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App