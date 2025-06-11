import './home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  } from '@fortawesome/free-solid-svg-icons';
import {  } from '@fortawesome/free-brands-svg-icons';
import PPSECTION1 from '/src/assets/img/PP.jpg'
export default function Home() {
    return(
        <>
        <section id='about'>
            <div className="container">
                <div className="row">
                    <div className="about-col-1 slide-left">
                        <img src={PPSECTION1} alt="" />
                    </div>
                    <div className="about-col-2 slide-left">
                        <h1 className='subtitle'> About Me</h1>
                        <p>My name is Arthur Van Roost i'm 24 years old and currently in training at MolenGeek to become a full-stack developper. I developped my passion for coding pretty late but once i started i just couldn't stop. With this portfolio I'll show you the best of my recent work.</p>
                        <div className="tab-titles">
                            <p className='tab-links active-link'>Skills</p>
                            <p className='tab-links'>Experience</p>
                            <p className='tab-links'>Education</p>
                        </div>
                        <div className="tab-contents active-tab" id='skills'>
                            <ul>
                                <li><span>Front-End</span><br />HTML/CSS/SASS/JS/REACTJS</li>
                                <li><span>Back-End</span><br />PLUS TARD</li>
                            </ul>
                        </div>
                        <div className="tab-contents" id='experience'>
                            <ul>
                                <li><span>Front-End</span><br />5 month training at MolenGeek, you can visit my Github Projects via the links below.</li>
                                <li><span>Back-End</span><br />2 month training at MolenGeek</li>
                            </ul>
                        </div>
                        <div className="tab-contents" id='education'>
                            <ul>
                                <li><span>Front-End</span><br/>5 month training at MolenGeek</li>
                                <li><span>Back-End</span><br/>2 month training at MolenGeek</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}