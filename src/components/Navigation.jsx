import { Link, useLocation } from 'react-router-dom'
import { Home, FolderKanban, Code2, User, Mail } from 'lucide-react'
import '../App.css'

const Navigation = () => {
  const location = useLocation()
  
  const navItems = [
    { path: '/', icon: Home, label: 'Home' },
    { path: '/projects', icon: FolderKanban, label: 'Projects' },
    { path: '/skills', icon: Code2, label: 'Skills' },
    { path: '/about', icon: User, label: 'About Me' },
    { path: '/contact', icon: Mail, label: 'Contact' },
  ]

  return (
    <nav className="navigation">
      <ul className="nav-list">
        {navItems.map((item) => (
          <li key={item.path} className="nav-item">
            <Link 
              to={item.path} 
              className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
            >
              <item.icon size={20} />
              <span>{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navigation