import { Download } from 'lucide-react'
import cvImage from '../assets/Bryle CV.jpeg'
import cvPdf from '../assets/Bryle CV.pdf'

const facts = [
  { title: 'Experience', items: ['Web developer and designer', 'Quality assurance analyst', 'Project team collaboration'] },
  { title: 'Education', items: ['BS Information Technology', 'Cavite State University – Imus Campus', 'Focus on web development and QA'] },
  { title: 'Recognition', items: ['Capstone project', 'Academic recognition', 'Project implementation'] },
]

const About = () => (
  <>
    <header className="page-head">
      <div className="kicker">Profile</div>
      <h1 className="page-title">About</h1>
    </header>

    <div className="about-grid">
      <figure className="plate">
        <img src={cvImage} alt="Preview of Bryle Balatayo's CV" />
        <figcaption>Curriculum vitae preview.</figcaption>
      </figure>

      <div>
        <h2 className="about-name">Brielle Edrian Balatayo</h2>
        <p className="about-lede">
          A detail-oriented Information Technology student specializing in quality assurance, experienced in
          backend testing and frontend validation.
        </p>

        <div className="about-body">
          <p>
            I identify bugs, document defects, and help make sure software is reliable before it reaches
            the people who use it. My interest began with curiosity about how things work, and grew into
            building and testing web applications.
          </p>
          <p>
            Through academic projects and my own exploration I have built skills in web development,
            quality assurance and problem solving. I want the things I make to be technically sound and
            pleasant to use.
          </p>
          <p>
            Right now I'm deepening my knowledge of modern web technologies while keeping a firm focus on
            clean code, user-centered design and thorough testing.
          </p>
        </div>

        <blockquote className="pull">Solutions that are technically sound and a pleasure to use.</blockquote>

        <div className="facts">
          {facts.map((fact) => (
            <section key={fact.title} className="fact">
              <h3>{fact.title}</h3>
              <ul>
                {fact.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <div className="btn-row">
          <a href={cvPdf} download="Bryle_Balatayo_CV.pdf" className="btn">
            <Download size={18} />
            Download CV (PDF)
          </a>
        </div>
      </div>
    </div>
  </>
)

export default About
