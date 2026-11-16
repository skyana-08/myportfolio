import trackedPrograd from '../assets/Tracked-prograd.png'
import trackedStudash from '../assets/Tracked-studash.png'
import trackedProdash from '../assets/Tracked-prodash.png'
import trackedProanalytics from '../assets/Tracked-proanalytics.png'
import projdash from '../assets/projdash.png'
import projdash2 from '../assets/projdash2.png'
import edrendash from '../assets/Edrendash.png'
import edrenlog from '../assets/Edrenlog.png'
import edreninven from '../assets/Edreninven.png'

const projects = [
  {
    title: 'TrackED',
    description:
      'A comprehensive educational platform with progress tracking, analytics, and dashboard features for students and professors.',
    tags: ['Web app', 'Education', 'Dashboard', 'Analytics'],
    images: [
      { src: trackedPrograd, caption: 'Progress dashboard' },
      { src: trackedStudash, caption: 'Student dashboard' },
      { src: trackedProdash, caption: 'Professor dashboard' },
      { src: trackedProanalytics, caption: 'Analytics dashboard' },
    ],
  },
  {
    title: 'Ctrl + Alt + Delight',
    description:
      'A project management dashboard with task tracking, team collaboration, and productivity analytics.',
    tags: ['Dashboard', 'Productivity', 'Task management'],
    images: [
      { src: projdash, caption: 'Main dashboard' },
      { src: projdash2, caption: 'Task and team view' },
    ],
  },
  {
    title: 'Edren Inventory',
    description: 'Inventory management system with dashboard, login system, and inventory tracking features.',
    tags: ['Inventory', 'Management', 'Dashboard', 'Login system'],
    images: [
      { src: edrendash, caption: 'Dashboard' },
      { src: edrenlog, caption: 'Login screen' },
      { src: edreninven, caption: 'Inventory management' },
    ],
  },
]

const Projects = () => (
  <>
    <header className="page-head">
      <div className="kicker">Features</div>
      <h1 className="page-title">Projects</h1>
      <p className="standfirst">Three web applications, each with the screens behind it. Select an image to view it full size.</p>
    </header>

    {projects.map((project) => (
      <article key={project.title} className="feature">
        <div className="feature-meta">
          <h2 className="feature-title">{project.title}</h2>
          <div className="tag-line">
            {project.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
          <p className="feature-desc">{project.description}</p>
        </div>

        <div className="gallery">
          {project.images.map((image) => (
            <figure key={image.src}>
              <a href={image.src} target="_blank" rel="noopener noreferrer">
                <img src={image.src} alt={`${project.title}: ${image.caption}`} loading="lazy" />
              </a>
              <figcaption>{image.caption}</figcaption>
            </figure>
          ))}
        </div>
      </article>
    ))}
  </>
)

export default Projects
