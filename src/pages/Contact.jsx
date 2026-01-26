import { Mail, Linkedin, Facebook, Send } from 'lucide-react'
import '../App.css'

const Contact = () => {
  const socialLinks = [
    {
      platform: "Email",
      icon: Mail,
      link: "mailto:brielleanabalatayo@gmail.com",
      text: "brielleanabalatayo@gmail.com",
      color: "#EA4335"
    },
    {
      platform: "LinkedIn",
      icon: Linkedin,
      link: "https://www.linkedin.com/in/brielle-edrian-balatayo-1850a83a3",
      text: "linkedin.com/in/brielle-edrian-balatayo",
      color: "#0077B5"
    },
    {
      platform: "Facebook",
      icon: Facebook,
      link: "https://www.facebook.com/bryleana.balatayo",
      text: "facebook.com/bryleana.balatayo",
      color: "#1877F2"
    }
  ]

  const handleEmailClick = () => {
    window.location.href = "mailto:brielleanabalatayo@gmail.com"
  }

  return (
    <div className="contact-page">
      <h1 className="page-title">More About Me</h1>
      <p className="page-subtitle">Let's connect! Feel free to reach out through any of these channels</p>
      
      <div className="contact-content">
        <div className="social-links">
          <h2>Connect With Me</h2>
          <p className="contact-intro">
            I'm always open to discussing new opportunities, creative projects, or just having a chat about technology and design.
          </p>
          
          <div className="social-cards">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="social-card"
                style={{ '--social-color': social.color }}
              >
                <div className="social-icon-wrapper">
                  <social.icon size={24} />
                </div>
                <div className="social-info">
                  <h3>{social.platform}</h3>
                  <p>{social.text}</p>
                </div>
                <Send size={16} className="send-icon" />
              </a>
            ))}
          </div>
        </div>
        
        <div className="contact-form-section">
          <h2>Send a Message</h2>
          <p>Prefer to send me a direct message? Use the form below:</p>
          
          <div className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input type="text" id="name" placeholder="Enter your name" />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input type="email" id="email" placeholder="Enter your email" />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea 
                id="message" 
                rows="5" 
                placeholder="Type your message here..."
              ></textarea>
            </div>
            
            <button onClick={handleEmailClick} className="submit-button">
              <Send size={18} />
              Send Message via Email
            </button>
            
            <p className="form-note">
              This will open your default email client with a pre-filled message.
            </p>
          </div>
        </div>
      </div>
      
      <div className="availability">
        <h3>Availability</h3>
        <p>
          I'm currently available for freelance projects, collaborations, and full-time opportunities. 
          I typically respond to messages within 24 hours.
        </p>
      </div>
    </div>
  )
}

export default Contact