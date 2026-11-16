import { Moon, Sun } from 'lucide-react'

const ThemeToggle = ({ isDarkMode, toggleTheme }) => (
  <button
    type="button"
    className="theme-toggle"
    onClick={toggleTheme}
    aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
  >
    {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
    {isDarkMode ? 'Light' : 'Dark'}
  </button>
)

export default ThemeToggle
