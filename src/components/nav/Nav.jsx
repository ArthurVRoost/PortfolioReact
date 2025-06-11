import './nav.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faBars } from '@fortawesome/free-solid-svg-icons';
import PPNAV from '/src/assets/img/pp2-removebg-preview.png'
export default function Nav() {
    return(
        <>
        <header id='header'>
            <div className="container">
                <nav>
                    <h2 className='navH2'>ARTHUR.</h2>
                    <ul id='sideMenu'>
                        <li><a href="#header">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#portfolio">Portfolio</a></li>
                        <li><a href="#contact">Contact</a></li>
                        {/* <FontAwesomeIcon icon={faXmark} /> */}
                    </ul>
                    {/* <FontAwesomeIcon icon={faBars} /> */}
                </nav>
                <div className="header-text">
                    <p>Full-Stack Developper</p>
                    <h1>Hi, I'm <span>Arthur</span> <br/> Van Roost from Belgium</h1>
                </div>
                <img className='imgHeader' src={PPNAV} alt="" />
            </div>
        </header>
        </>
    )
}