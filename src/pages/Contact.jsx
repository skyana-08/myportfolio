import { useState } from 'react'
import { Send } from 'lucide-react'

const EMAIL = 'brielleanabalatayo@gmail.com'

const channels = [
  { name: 'Email', text: EMAIL, href: `mailto:${EMAIL}`, external: false },
  {
    name: 'LinkedIn',
    text: 'linkedin.com/in/brielle-edrian-balatayo',
    href: 'https://www.linkedin.com/in/brielle-edrian-balatayo-1850a83a3',
    external: true,
  },
  { name: 'Facebook', text: 'facebook.com/bryleana.balatayo', href: 'https://www.facebook.com/bryleana.balatayo', external: true },
]

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const update = (field) => (e) => setForm((prev) => ({ ...prev, [field]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`)
    const body = encodeURIComponent(`${form.message}\n\n${form.name}\n${form.email}`)
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`
  }

  return (
    <>
      <header className="page-head">
        <div className="kicker">Letters</div>
        <h1 className="page-title">Contact</h1>
        <p className="standfirst">For opportunities, collaborations, or a conversation about technology and design.</p>
      </header>

      <div className="contact-grid">
        <section>
          <h2>Find me online</h2>
          <div className="channels">
            {channels.map((c) => (
              <a
                key={c.name}
                href={c.href}
                className="channel"
                {...(c.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              >
                <span className="label">{c.name}</span>
                <p>{c.text}</p>
              </a>
            ))}
          </div>

          <div className="note">
            <h3>Availability</h3>
            <p>
              Open to freelance projects, collaborations and full-time opportunities. I usually reply
              within 24 hours.
            </p>
          </div>
        </section>

        <section>
          <h2>Send a message</h2>
          <form className="form" onSubmit={handleSubmit}>
            <div className="field">
              <label htmlFor="name">Your name</label>
              <input id="name" type="text" autoComplete="name" required value={form.name} onChange={update('name')} />
            </div>
            <div className="field">
              <label htmlFor="email">Your email</label>
              <input id="email" type="email" autoComplete="email" required value={form.email} onChange={update('email')} />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea id="message" rows="6" required value={form.message} onChange={update('message')} />
            </div>
            <div>
              <button type="submit" className="btn">
                <Send size={18} />
                Open in email app
              </button>
            </div>
            <p className="form-note">This opens your email app with the message filled in. Nothing is sent until you press send there.</p>
          </form>
        </section>
      </div>
    </>
  )
}

export default Contact
