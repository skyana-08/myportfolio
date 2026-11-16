const departments = [
  {
    title: 'Analytical skills',
    skills: [
      'Problem solving and critical thinking',
      'Data analysis and interpretation',
      'Requirements gathering',
      'Process optimization',
      'Technical documentation',
    ],
  },
  {
    title: 'Programming',
    skills: [
      'Entry-level Python',
      'Entry-level C++',
      'Web development (HTML, CSS, JavaScript)',
      'React.js development',
      'REST API integration',
    ],
  },
  {
    title: 'Quality assurance',
    skills: [
      'QA testing and analysis',
      'Test case development',
      'Bug tracking and reporting',
      'User acceptance testing',
      'Regression testing',
    ],
  },
  {
    title: 'Design and development',
    skills: [
      'UI/UX design principles',
      'Responsive web design',
      'Frontend development',
      'Version control (Git)',
      'Agile/Scrum methodology',
    ],
  },
]

const extras = ['Team collaboration', 'Communication', 'Project management', 'Time management', 'Attention to detail', 'Adaptability']

const Skills = () => (
  <>
    <header className="page-head">
      <div className="kicker">Departments</div>
      <h1 className="page-title">Skills</h1>
      <p className="standfirst">Technical strengths and working habits, grouped by discipline.</p>
    </header>

    <div className="dept-grid">
      {departments.map((dept) => (
        <section key={dept.title} className="dept">
          <h2>{dept.title}</h2>
          <ul>
            {dept.skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </section>
      ))}
    </div>

    <section className="also">
      <h2>Also in this issue</h2>
      <div className="tag-line tag-line--lg">
        {extras.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </section>
  </>
)

export default Skills
