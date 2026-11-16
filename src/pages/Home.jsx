import { Link } from 'react-router-dom'
import coverImage from '../assets/Tracked-studash.png'

const sections = [
  { to: '/projects', title: 'Projects', text: 'TrackED, Ctrl + Alt + Delight and Edren Inventory, with screenshots.' },
  { to: '/skills', title: 'Skills', text: 'Web development, Python, C++ and quality assurance.' },
  { to: '/about', title: 'About', text: 'Background, education and a downloadable CV.' },
  { to: '/contact', title: 'Contact', text: 'Email, LinkedIn and Facebook, plus a message form.' },
]

const Home = () => (
  <>
    <section className="cover">
      <div>
        <div className="kicker">Cover story</div>
        <h1 className="cover-title">
          Software that works, <i>tested until it does.</i>
        </h1>
        <p className="cover-deck">
          I'm an Information Technology student specializing in quality assurance, with experience in both
          backend testing and frontend validation. I build web applications, document defects, and care
          about shipping reliable work.
        </p>
        <div className="btn-row">
          <Link to="/projects" className="btn">View projects</Link>
          <Link to="/contact" className="btn btn-ghost">Get in touch</Link>
        </div>
      </div>

      <figure className="cover-figure">
        <img src={coverImage} alt="TrackED student dashboard" />
        <figcaption>On the cover: the student dashboard from TrackED.</figcaption>
      </figure>
    </section>

    <section className="toc" aria-labelledby="toc-title">
      <h2 className="toc-title" id="toc-title">In this issue</h2>
      <ul className="toc-list">
        {sections.map((s) => (
          <li key={s.to}>
            <Link to={s.to} className="toc-row">
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  </>
)

export default Home
