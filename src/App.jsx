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
} from 'lucide-react'

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
    const media = window.matchMedia('(prefers-color-scheme: dark)')

    const applyTheme = (dark) => {
      setIsDarkMode(dark)
      document.documentElement.classList.toggle('dark-mode', dark)
      document.body.classList.toggle('dark-mode', dark)
    }

    applyTheme(media.matches)

    const handleChange = (event) => applyTheme(event.matches)
    media.addEventListener?.('change', handleChange)

    return () => media.removeEventListener?.('change', handleChange)
  }, [])

  const toggleTheme = () => {
    const nextMode = !isDarkMode
    setIsDarkMode(nextMode)
    document.documentElement.classList.toggle('dark-mode', nextMode)
    document.body.classList.toggle('dark-mode', nextMode)
  }

  const openModal = (modal) => {
    setActiveModal(modal)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setActiveModal(null)
    document.body.style.overflow = 'auto'
  }

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') closeModal()
    }

    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [])

  const projects = [
    {
      name: 'TrackED',
      description:
        'A comprehensive educational platform with progress tracking, analytics, and dashboard features for students and professors.',
      tags: ['Web App', 'Education', 'Dashboard', 'Analytics'],
      images: [
        { src: trackedPrograd, alt: 'TrackED Progress Dashboard' },
        { src: trackedStudash, alt: 'TrackED Student Dashboard' },
        { src: trackedProdash, alt: 'TrackED Professor Dashboard' },
        { src: trackedProanalytics, alt: 'TrackED Analytics Dashboard' },
      ],
    },
    {
      name: 'Ctrl + Alt + Delight',
      description:
        'A project management dashboard with task tracking, team collaboration, and productivity analytics.',
      tags: ['Dashboard', 'Productivity', 'Task Management'],
      images: [
        { src: projdash, alt: 'Project Dashboard 1' },
        { src: projdash2, alt: 'Project Dashboard 2' },
      ],
    },
    {
      name: 'Edren Inventory',
      description:
        'Inventory management system with dashboard, login system, and inventory tracking features.',
      tags: ['Inventory', 'Management', 'Dashboard', 'Login System'],
      images: [
        { src: edrendash, alt: 'Edren Dashboard' },
        { src: edrenlog, alt: 'Edren Login System' },
        { src: edreninven, alt: 'Edren Inventory Management' },
      ],
    },
  ]

  const skills = [
    {
      category: 'Analytical Skills',
      icon: Brain,
      items: [
        'Problem Solving & Critical Thinking',
        'Data Analysis & Interpretation',
        'Technical Documentation',
      ],
    },
    {
      category: 'Programming',
      icon: Code2,
      items: [
        'Entry Level Python Programming',
        'Entry Level C++ Programming',
        'Web Development (HTML, CSS, JavaScript)',
      ],
    },
    {
      category: 'Quality Assurance',
      icon: TestTube,
      items: [
        'Quality Assurance Testing/Analysis',
        'Test Case Development',
        'Bug Tracking & Reporting',
      ],
    },
  ]

  const contactInfo = [
    {
      platform: 'Email',
      icon: Mail,
      value: 'brielleanabalatayo@gmail.com',
      action: () => {
        window.location.href = 'mailto:brielleanabalatayo@gmail.com'
      },
    },
    {
      platform: 'LinkedIn',
      icon: Linkedin,
      value: 'linkedin.com/in/brielle-edrian-balatayo',
      action: () => {
        window.open('https://www.linkedin.com/in/brielle-edrian-balatayo-1850a83a3', '_blank')
      },
    },
    {
      platform: 'Facebook',
      icon: Facebook,
      value: 'facebook.com/bryleana.balatayo',
      action: () => {
        window.open('https://www.facebook.com/bryleana.balatayo', '_blank')
      },
    },
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
      <div className="scene-overlay" aria-hidden="true">
        <div className="sky-orb" />
        <div className="cloud cloud-one" />
        <div className="cloud cloud-two" />
        <div className="cloud cloud-three" />
        <div className="stars" />
        <div className="city city-back" />
        <div className="city city-front" />
        <div className="meadow-hill meadow-hill-back" />
        <div className="meadow-hill meadow-hill-front" />
      </div>

      <button
        className="theme-toggle"
        onClick={toggleTheme}
        aria-label={isDarkMode ? 'Switch to morning sky mode' : 'Switch to night city mode'}
      >
        <span className="theme-toggle-icon">{isDarkMode ? <Sun size={22} /> : <Moon size={22} />}</span>
      </button>

      <div className="container">
        <header>
          <div className="eyebrow">Portfolio</div>
          <h1>Bryle Portfolio</h1>
          <h2>Information Technology Student</h2>
          <p className="hero-copy">
            A calm meadow by day, a glowing city by night — designed to feel polished, modern,
            and smooth on every screen size.
          </p>
        </header>

        <main className="main-content">
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
              <p className="section-description">
                Explore my technical strengths across development, analytical thinking, and quality assurance.
              </p>
            </div>
          </div>

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

      {activeModal === 'projects' && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
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
                          <span key={tagIndex} className="project-tag">
                            {tag}
                          </span>
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

      {activeModal === 'skills' && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
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

              <div className="additional-competencies">
                <h3>Additional Competencies</h3>
                <div className="additional-tags">
                  {[
                    'Team Collaboration',
                    'Communication',
                    'Project Management',
                    'Time Management',
                    'Attention to Detail',
                    'Adaptability',
                  ].map((skill, index) => (
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

      {activeModal === 'about' && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
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
                      e.target.src = 'https://via.placeholder.com/300x400/2B6CB0/FFFFFF?text=CV+Preview'
                    }}
                  />
                </div>

                <div className="about-details">
                  <h3>Brielle Edrian Balatayo</h3>
                  <p className="about-text">
                    Detail-oriented Information Technology Student specializing in quality assurance experienced in both backend testing and frontend validation. Able to identify bugs, document defects, and ensure software reliability while continuously learning and delivering quality outputs.
                  </p>

                  <div className="education-block">
                    <h4>Education</h4>
                    <p>Bachelor of Science in Information Technology Student at Cavite State University - Imus Campus</p>
                  </div>

                  <button className="download-button" onClick={handleDownloadCV}>
                    <Download size={20} />
                    Download CV (PDF)
                  </button>

                  <p className="download-note">Click to download my information in PDF format.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeModal === 'contact' && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
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
                  <p className="contact-intro">
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
                  <div className="contact-note-card">
                    <h4>Preferred Contact Method</h4>
                    <p>
                      Email is the best way to reach me for professional inquiries. For quick questions or networking, LinkedIn works great too.
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
