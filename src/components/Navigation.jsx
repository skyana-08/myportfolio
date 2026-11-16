import { NavLink } from 'react-router-dom'

const navItems = [
  { path: '/', label: 'Home' },
  { path: '/projects', label: 'Projects' },
  { path: '/skills', label: 'Skills' },
  { path: '/about', label: 'About' },
  { path: '/contact', label: 'Contact' },
]

const Navigation = () => (
  <nav className="nav-bar" aria-label="Main">
    <ul className="nav-list">
      {navItems.map((item) => (
        <li key={item.path}>
          <NavLink
            to={item.path}
            end={item.path === '/'}
            className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
          >
            {item.label}
          </NavLink>
        </li>
      ))}
    </ul>
  </nav>
)

export default Navigation
