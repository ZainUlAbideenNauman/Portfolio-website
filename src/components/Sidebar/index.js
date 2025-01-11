import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import LogoZ from '../../assets/images/logo-z.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faGraduationCap, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
const Sidebar = () =>(
    <div className='nav-bar'>
        <Link className = 'logo' to = '/'>
        <img src={LogoZ} alt = "logo"/>
        <img className = "sub-logo" src={LogoSubtitle} alt = "zain"/>
        </Link>
        <nav>
    <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
        <FontAwesomeIcon icon={faHome} color="4d4d4e" />
    </NavLink>
    <NavLink to="/about" className={({ isActive }) => (isActive ? "active about-link" : "about-link")}>
        <FontAwesomeIcon icon={faUser} color="4d4d4e" />
    </NavLink>
    <NavLink to="/projects" className={({ isActive }) => (isActive ? "active projects-link" : "projects-link")}>
        <FontAwesomeIcon icon={faGraduationCap} color="4d4d4e" />
    </NavLink>
    <NavLink to="/contact" className={({ isActive }) => (isActive ? "active contact-link" : "contact-link")}>
        <FontAwesomeIcon icon={faEnvelope} color="4d4d4e" />
    </NavLink>
</nav>

        <ul>
            <li>
                <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/zain-ul-abideen-3788102a9/'>
                    <FontAwesomeIcon icon = {faLinkedin} color = "#ffffff" />
                </a>
            </li>
            <li>
                <a target="_blank" rel='noreferrer' href='https://github.com/ZainUlAbideenNauman'>
                    <FontAwesomeIcon icon = {faGithub} color = "#ffffff" />
                </a>
            </li>
        </ul>
    </div>

) 
export default Sidebar