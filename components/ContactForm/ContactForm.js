import { useState } from 'react'

const ContactForm = () => {

  const [ firstName, setFirstName ] = useState('')
  const [ lastName, setLastName ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ message, setMessage ] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    }

  return (
    <div className="contact__form mt-5 mb-5">
      <form onSubmit={handleSubmit}>
        <div className="contact__form__inputs">
            <label>
              <span><h5>First name</h5></span>
              <input
                type="text"
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}
                required
              />
              </label>
          </div>
        <div className="contact__form__inputs">
            <label>
              <span><h5>Last name</h5></span>
                <input
                  type="text"
                  onChange={(e) => setLastName(e.target.value)}
                  value={lastName}
                  required
                />
              </label>
          </div>
        <div className="contact__form__inputs">
            <label>
              <span><h5>Email</h5></span>
              <input
                type="text"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
              />
          </label>
        </div>
        <div className="contact__form__inputs">
          <label>
            <span><h5>Message</h5></span>
            <textarea
              type="text"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
              required
            />
          </label>
        </div>
                <p>We aim to respond within 24 hours.</p>
        <button className="contact__btn">Submit</button>
      </form>
    </div>
  )
}

export default ContactForm
