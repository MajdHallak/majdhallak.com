import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoMjd from '../../assets/images/MJD_02.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const linkedin = 'https://www.linkedin.com/in/majd-hallak-41868a129/'
const github = 'https://github.com/MajdHallak'

const Sidebar = () => (
  <div className="nav-bar">
    <Link className="logo" to="/">
      <img className="sub-logo" src={LogoMjd} color="white" alt="Amigo" />
    </Link>

    <nav>
      <NavLink exact="true" activeclassname="active" to="/">
        <FontAwesomeIcon icon={faHome} color="white" />
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className="about-link"
        to="/about"
      >
        <FontAwesomeIcon icon={faUser} color="white" />
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className="contact-link"
        to="/contact"
      >
        <FontAwesomeIcon icon={faEnvelope} color="white" />
      </NavLink>
    </nav>
    <ul>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/majd-hallak-41868a129/"
        >
          <FontAwesomeIcon icon={faLinkedin} size="2x" color="white" />
        </a>
      </li>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/MajdHallak"
        >
          <FontAwesomeIcon icon={faGithub} size="2x" color="white" />
        </a>
      </li>
    </ul>
  </div>
)

export default Sidebar
