import { useEffect, useState } from 'react'
import '../App.css'

const HelloSection = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className={`hello-section ${isVisible ? 'visible' : ''}`}>
      <h3>hello!</h3>
    </div>
  )
}

export default HelloSection