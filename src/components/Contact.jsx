import React from 'react'
import './styles/Contact.css'

function Contact() {
  return (
    <div className='section contact-section'>
      <h1>Contact Me</h1>
            <form className="wf-form" onSubmit={e => e.preventDefault()}>
              <div className="field" required={true} >
                <label>Name</label>
                <input type="text" placeholder="Your name" />
              </div>
              <div className="field">
                <label>Email</label>
                <input type="email" placeholder="you@example.com" />
              </div>
              <div className="field">
                <label>Message</label>
                <textarea rows={4} placeholder="Hi..." />
              </div>
              <div className="actions field">
                <button type="submit" >Send</button>
              </div>
            </form>
          </div>
  )
}

export default Contact