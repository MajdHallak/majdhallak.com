import './index.scss'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const refForm = useRef()

  const sendEmail = (event) => {
    event.preventDefault()

    emailjs
      .sendForm(
        'service_ukk6yet',
        'template_slnz9fm',
        refForm.current,
        'ZcJEt2FRdSr7_fWIL'
      )
      .then(
        () => {
          alert('Message Succefully Sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }

  function setTime() {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }
  useEffect(() => {
    setTime()
  }, [])

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['c', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I am interested in freelance opportunities especially ambitious or
            large projects. However, if you have other request or question,
            don't hesitate to contact me using below form either.
          </p>

          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>

        <div className="info-card">
          Majd Hallak,
          <br />
          United Kingdom, bournemouth <br />
          Charminster Road <br />
          <span>
            {/* +44 7575600068 */}
            {/* <br /> */}
            majdhallak@gmail.com
          </span>
        </div>
      </div>
      <Loader type="line-scale" />
    </>
  )
}

export default Contact
