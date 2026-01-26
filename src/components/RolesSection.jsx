import { Palette, Users, Star } from 'lucide-react'
import '../App.css'

const RolesSection = () => {
  const roles = [
    {
      title: "Illustrator",
      icon: Palette,
      skills: ["Creative", "Graphic Designer"]
    },
    {
      title: "Collaborator",
      icon: Users, // Changed from Handshake to Users
      skills: ["Digital Artist", "FrontEnd", "UI/UX"]
    }
  ]

  return (
    <div className="roles-container">
      {roles.map((role, index) => (
        <div key={index} className="role-section">
          <h3 className="role-title">
            <role.icon />
            {role.title}
          </h3>
          <ul className="skills-list">
            {role.skills.map((skill, skillIndex) => (
              <li key={skillIndex}>
                <Star size={16} />
                {skill}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export default RolesSection