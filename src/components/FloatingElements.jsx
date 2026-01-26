import { Palette, Code, Brush, Smartphone, Zap, Layers, Cloud, Sparkles } from 'lucide-react'
import '../App.css'

const FloatingElements = ({ isDarkMode }) => {
  const dayElements = [
    { Icon: Palette, delay: 0, size: 24, x: '10%', y: '20%' },
    { Icon: Code, delay: 2, size: 28, x: '85%', y: '15%' },
    { Icon: Brush, delay: 4, size: 22, x: '15%', y: '70%' },
    { Icon: Smartphone, delay: 1, size: 26, x: '90%', y: '65%' },
    { Icon: Zap, delay: 3, size: 30, x: '5%', y: '40%' },
    { Icon: Cloud, delay: 5, size: 32, x: '70%', y: '30%' },
  ]

  const nightElements = [
    { Icon: Layers, delay: 0, size: 20, x: '10%', y: '20%' },
    { Icon: Sparkles, delay: 2, size: 22, x: '85%', y: '15%' },
    { Icon: Zap, delay: 4, size: 18, x: '15%', y: '70%' },
    { Icon: Smartphone, delay: 1, size: 24, x: '90%', y: '65%' },
    { Icon: Code, delay: 3, size: 20, x: '5%', y: '40%' },
    { Icon: Sparkles, delay: 5, size: 18, x: '70%', y: '30%' },
  ]

  const elements = isDarkMode ? nightElements : dayElements

  return (
    <div className="floating-elements">
      {/* Sun/Moon elements */}
      {!isDarkMode && <div className="sun-element" />}
      {isDarkMode && <div className="moon-element" />}
      
      {/* Floating icons */}
      {elements.map(({ Icon, delay, size, x, y }, index) => (
        <div
          key={index}
          className="floating-element"
          style={{
            animationDelay: `${delay}s`,
            left: x,
            top: y,
            opacity: 0.4 + (index * 0.05),
          }}
        >
          <Icon size={size} className="element-icon" />
        </div>
      ))}
    </div>
  )
}

export default FloatingElements