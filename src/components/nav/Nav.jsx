import './nav.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faBars } from '@fortawesome/free-solid-svg-icons';
export default function Nav() {
    return(
        <>
        <nav>
            <h2 className='navH2'>ARTHUR.</h2>
            <ul id='sideMenu'>
                <li><a href="#header">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#contact">Contact</a></li>
                <FontAwesomeIcon icon={faXmark} />
            </ul>
            <FontAwesomeIcon icon={faBars} />
        </nav>
        </>
    )
}