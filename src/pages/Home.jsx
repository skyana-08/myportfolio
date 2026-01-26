import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import '../App.css'

const Home = () => {
  return (
    <div className="home-page">
      <div className="hero-section">
        <h1 className="hero-title">Welcome to My Portfolio</h1>
        <p className="hero-subtitle">Creative Designer & Developer</p>
        <p className="hero-description">
          I create beautiful, functional web applications with attention to detail 
          and user experience. Explore my work and skills to see what I can bring to your project.
        </p>
        
        <div className="hero-actions">
          <Link to="/projects" className="primary-button">
            View Projects <ArrowRight size={20} />
          </Link>
          <Link to="/contact" className="secondary-button">
            Get in Touch
          </Link>
        </div>
      </div>
      
      <div className="quick-links">
        <div className="quick-link-card">
          <h3>Recent Projects</h3>
          <p>TrackED, Ctrl + Alt + Delight, Edren Inventory</p>
          <Link to="/projects" className="link-button">
            View All Projects →
          </Link>
        </div>
        
        <div className="quick-link-card">
          <h3>My Skills</h3>
          <p>Web Development, Python, C++, Quality Assurance</p>
          <Link to="/skills" className="link-button">
            Explore Skills →
          </Link>
        </div>
        
        <div className="quick-link-card">
          <h3>About Me</h3>
          <p>Learn more about my background and experience</p>
          <Link to="/about" className="link-button">
            About Me →
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home