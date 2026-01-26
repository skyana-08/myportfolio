import { Download, User, Briefcase, GraduationCap, Award } from 'lucide-react'
import '../App.css'

const About = () => {
  const cvImage = "/src/assets/Bryle CV.jpeg"
  const cvPdf = "/src/assets/Bryle CV.pdf"
  
  const handleDownloadCV = () => {
    // Create a temporary link to trigger download
    const link = document.createElement('a')
    link.href = cvPdf
    link.download = 'Bryle_Balatayo_CV.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const experiences = [
    {
      icon: Briefcase,
      title: "Experience",
      items: [
        "Web Developer & Designer",
        "Quality Assurance Analyst",
        "Project Team Collaboration"
      ]
    },
    {
      icon: GraduationCap,
      title: "Education",
      items: [
        "Bachelor's Degree in Information Technology",
        "Specialization in Web Development",
        "Continuous Learning & Skill Development"
      ]
    },
    {
      icon: Award,
      title: "Achievements",
      items: [
        "Capstone Project Excellence",
        "Academic Recognition",
        "Project Implementation Success"
      ]
    }
  ]

  return (
    <div className="about-page">
      <h1 className="page-title">About Me</h1>
      <p className="page-subtitle">Get to know my background, experience, and qualifications</p>
      
      <div className="about-content">
        <div className="cv-section">
          <div className="cv-image-container">
            <img 
              src={cvImage} 
              alt="Bryle Balatayo CV" 
              className="cv-image"
              onError={(e) => {
                e.target.onerror = null
                e.target.src = "https://via.placeholder.com/300x400/1e7bb9/ffffff?text=CV+Preview"
              }}
            />
          </div>
          
          <div className="cv-details">
            <h2>Brielle Edrian Balatayo</h2>
            <p className="cv-title">Creative Designer & Developer</p>
            
            <div className="cv-highlights">
              {experiences.map((exp, index) => (
                <div key={index} className="highlight-item">
                  <exp.icon size={20} className="highlight-icon" />
                  <div>
                    <h4>{exp.title}</h4>
                    <ul>
                      {exp.items.map((item, itemIndex) => (
                        <li key={itemIndex}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
            
            <button onClick={handleDownloadCV} className="download-button">
              <Download size={20} />
              Download CV (PDF)
            </button>
            
            <p className="download-note">
              Click above to download my complete resume in PDF format.
            </p>
          </div>
        </div>
        
        <div className="about-story">
          <h3>My Journey</h3>
          <p>
            I'm a passionate designer and developer with a strong foundation in Information Technology. 
            My journey began with a curiosity for how things work, which evolved into creating functional 
            and beautiful web applications.
          </p>
          <p>
            Through my academic projects and personal exploration, I've developed skills in web development, 
            quality assurance, and problem-solving. I believe in creating solutions that are not only 
            technically sound but also provide exceptional user experiences.
          </p>
          <p>
            Currently, I'm focused on expanding my expertise in modern web technologies while maintaining 
            a strong emphasis on clean code, user-centered design, and quality assurance practices.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About