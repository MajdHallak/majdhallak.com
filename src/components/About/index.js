import './index.scss'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faLaravel,
  faPython,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import {
  faArrowAltCircleLeft,
  faBasketball,
  faDatabase,
} from '@fortawesome/free-solid-svg-icons'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

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
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['a', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15} // 1.5s delay
            />
          </h1>
          <p>
            I'm very ambitious Front-end/Backend developer looking for a role in
            established IT company with the opportunity to work with the latest
            technologies on challenging and diverse projects.
          </p>
          <p>
            I'm quietly confident, naturally curious, and perpetually working on
            improving my chops one design problem at a time.
          </p>
          {/* <div className="prog-skills">
            <p className="lang">
              <span>Python</span>
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot-none"></div>
            </p>
          </div> */}
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faHtml5} />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faCss3} />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faJsSquare} />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faPython} />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} />
            </div>
            <div className="face7">
              <FontAwesomeIcon icon={faDatabase} />
            </div>
            {/* <div className="face8">
              <FontAwesomeIcon icon={faLaravel} />
            </div> */}
          </div>
        </div>
      </div>
      <Loader type="line-scale" />
    </>
  )
}

/* Storing user's device details in a variable*/
let details = navigator.userAgent

/* Creating a regular expression
containing some mobile devices keywords
to search it in details string*/
let regexp = /android|iphone|kindle|ipad/i

/* Using test() method to search regexp in details
it returns boolean value*/
let isMobileDevice = regexp.test(details)

if (isMobileDevice) {
  document.write('<h3>Its a Mobile Device !</h3>')
} else {
  document.write('<h3>Its a Desktop !</h3>')
}

export default About
