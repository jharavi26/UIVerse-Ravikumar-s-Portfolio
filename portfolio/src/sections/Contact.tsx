import { useState, type FormEvent } from 'react'
import { m, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, Check, Copy, Send } from 'lucide-react'
import SectionLabel from '../components/SectionLabel'
import SocialLinks from '../components/SocialLinks'
import { emailAddress } from '../data/portfolio'
import './Contact.scss'

type DraftUrls = {
  gmail: string
  mailto: string
}

export default function Contact() {
  const prefersReducedMotion = useReducedMotion()
  const [copied, setCopied] = useState(false)
  const [formNotice, setFormNotice] = useState('')
  const [draftUrls, setDraftUrls] = useState<DraftUrls | null>(null)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(emailAddress)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2200)
    } catch {
      setFormNotice(`Clipboard access is unavailable. You can email me at ${emailAddress}.`)
    }
  }

  const submitContact = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const name = String(form.get('name') ?? '').trim()
    const email = String(form.get('email') ?? '').trim()
    const message = String(form.get('message') ?? '').trim()

    if (!name || !email || !message) {
      setFormNotice('Please complete all three fields before continuing.')
      return
    }

    const subject = `Portfolio enquiry from ${name}`
    const body = `${message}\n\nFrom: ${name} (${email})`
    const gmail = `https://mail.google.com/mail/?${new URLSearchParams({
      view: 'cm',
      fs: '1',
      to: emailAddress,
      su: subject,
      body,
    }).toString()}`
    const mailto = `mailto:${emailAddress}?${new URLSearchParams({ subject, body }).toString()}`

    setDraftUrls({ gmail, mailto })
    window.open(gmail, '_blank', 'noopener,noreferrer')
    setFormNotice('A pre-filled Gmail compose window was requested. If it did not open, use one of the links below. Send the message from Gmail or your email app to notify me.')
  }

  return (
    <section className="contact-section section-wrap" id="contact">
      <SectionLabel number="06">YOUR TURN</SectionLabel>
      <div className="contact-grid">
        <div className="contact-copy">
          <span className="contact-kicker"><span className="availability-dot" /> OPEN TO THE RIGHT OPPORTUNITY</span>
          <h2>Have a project<br />or opportunity<br />in <span className="serif-italic">mind?</span></h2>
          <p>I’m open to Frontend Developer and React Developer opportunities. Let’s connect and build something meaningful.</p>
          <button className="email-copy" onClick={copyEmail}>
            <span className="email-copy-icon">{copied ? <Check size={16} /> : <Copy size={16} />}</span>
            <span><small>EMAIL ADDRESS</small><b>{emailAddress}</b></span>
            <span className="copy-state">{copied ? 'COPIED' : 'COPY'}</span>
          </button>
          <div className="contact-social-label mono">OR FIND ME HERE</div>
          <SocialLinks />
        </div>
        <m.form
          className="contact-form"
          onSubmit={submitContact}
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <div className="form-heading"><span>Send a little note</span><span className="mono">OPENS GMAIL COMPOSE</span></div>
          <label htmlFor="contact-name">Your name</label>
          <input id="contact-name" name="name" autoComplete="name" placeholder="What should I call you?" required />
          <label htmlFor="contact-email">Your email</label>
          <input id="contact-email" name="email" type="email" autoComplete="email" placeholder="you@somewhere.com" required />
          <label htmlFor="contact-message">What’s on your mind?</label>
          <textarea id="contact-message" name="message" rows={4} placeholder="A project, a role, a good question…" required />
          <button type="submit" className="button button-primary form-submit">Open Gmail draft <Send size={15} /></button>
          <p className={`form-note${formNotice ? ' form-note-active' : ''}`} aria-live="polite">
            {formNotice || `This opens a draft addressed to ${emailAddress}. Send it from your email app; this website does not send messages directly.`}
          </p>
          {draftUrls && (
            <div className="draft-fallbacks">
              <a href={draftUrls.gmail} target="_blank" rel="noreferrer">Open Gmail compose <ArrowUpRight size={13} /></a>
              <a href={draftUrls.mailto}>Open default email app <ArrowUpRight size={13} /></a>
            </div>
          )}
        </m.form>
      </div>
    </section>
  )
}
