import { Link } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'

const Header = ({ isDarkMode, toggleTheme }) => {
  const issueDate = new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })

  return (
    <header>
      <div className="topbar">
        <div className="wrap topbar-inner">
          <span className="label">Portfolio edition</span>
          <span className="label topbar-date">{issueDate}</span>
          <ThemeToggle isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        </div>
      </div>

      <div className="wrap masthead">
        <Link to="/" className="masthead-link" aria-label="Bryle Portfolio, home">
          <div className="masthead-title">Bryle Portfolio</div>
          <p className="masthead-tag">Web development and quality assurance, by Brielle Edrian Balatayo</p>
        </Link>
      </div>
    </header>
  )
}

export default Header
