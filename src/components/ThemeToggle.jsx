import { Moon, Sun } from 'lucide-react'
import '../App.css'

const ThemeToggle = ({ isDarkMode, toggleTheme }) => {
  return (
    <button
      className={`theme-toggle ${isDarkMode ? 'dark' : 'light'}`}
      onClick={toggleTheme}
      aria-label={isDarkMode ? 'Switch to morning mode' : 'Switch to night mode'}
    >
      <div className="toggle-circle">
        {isDarkMode ? <Moon size={20} /> : <Sun size={20} />}
      </div>
    </button>
  )
}

export default ThemeToggle