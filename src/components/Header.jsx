import { Link } from 'react-router-dom'
import '../App.css'

const Header = () => {
  return (
    <header>
      <Link to="/" className="header-link">
        <h1>Bryle Portfolio</h1>
        <h2>Creative Designer & Developer</h2>
      </Link>
    </header>
  )
}

export default Header