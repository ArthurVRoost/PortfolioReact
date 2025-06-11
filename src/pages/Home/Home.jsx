import './home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare, faPaperPlane, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faHtml5,faReact, faSquareJs,faCss, faSass, faBootstrap, faFacebook, faSquareInstagram, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import PPSECTION1 from '/src/assets/img/PP.jpg'
import ESHOPYY from '/src/assets/img/ESHOPPY.png'
import ESPACE from '/src/assets/img/ESPACE.png'
import MULTIFORM from '/src/assets/img/MULTIFORM.png'
import RPS from '/src/assets/img/PIERREPAPIER.png'
import NFT from '/src/assets/img/NFTCARD.png'
import TRACKER from '/src/assets/img/REACTTRACKER.png'
import { Link } from 'react-router-dom';

export default function Home() {
    return(
        <>
        {/* SECTION1 */}
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
        {/* SECTION 2 */}
        <section id='skills'>
            <div className="container">
                <h1 className='subtitle skillsH1'>My Skills</h1>
                <div className="skills-list slide-left">
                    <div className='divSkills'>
                        <FontAwesomeIcon className='skillsI' icon={faHtml5} />
                        <h2>HTML</h2>
                        <p>HTML (HyperText Markup Language) is the standard language used to create and structure content on the web. It defines elements such as headings, paragraphs, links, images, and more for web pages. To learn the basics, don't hesitate to use the contact form below.</p>
                        <a href="https://developer.mozilla.org/fr/docs/Web/HTML">Learn More</a>
                    </div>
                     <div className='divSkills'>
                        <FontAwesomeIcon className='skillsI' icon={faCss} />
                        <h2>CSS</h2>
                        <p>CSS (Cascading Style Sheets) is used to style HTML elements on web pages. It controls layout, colors, fonts, and spacing, enhancing visual presentation. CSS helps separate content from design, making websites more flexible, organized, and easier to maintain.</p>
                        <a href="https://developer.mozilla.org/fr/docs/Web/CSS">Learn More</a>
                    </div>
                     <div className='divSkills'>
                        <FontAwesomeIcon className='skillsI' icon={faSass} />
                        <h2>SASS</h2>
                        <p>SASS (Syntactically Awesome Stylesheets) is a CSS preprocessor that adds features like variables, nesting, mixins, and functions to make styling more efficient and reusable. It compiles into standard CSS, helping developers write cleaner, more organized, and maintainable style code.</p>
                        <a href="https://sass-lang.com/">Learn More</a>
                    </div>
                    <div className='divSkills'>
                        <FontAwesomeIcon className='skillsI' icon={faBootstrap} />
                        <h2>BOOTSTRAP</h2>
                        <p>Bootstrap is a popular front-end framework for building responsive, mobile-first websites quickly. It includes pre-designed HTML, CSS, and JavaScript components like buttons, grids, and navigation bars, allowing developers to create consistent, modern layouts without writing extensive custom code.</p>
                        <a href="https://sass-lang.com/">Learn More</a>
                    </div>
                    <div className='divSkills'>
                        <FontAwesomeIcon className='skillsI' icon={faReact} />
                        <h2>REACT</h2>
                        <p>ReactJS is a JavaScript library for building user interfaces, developed by Facebook. It uses components to create interactive UIs efficiently, with a virtual DOM for fast updates. React is widely used for single-page applications and dynamic web apps.</p>
                        <a href="https://react.dev/">Learn More</a>
                    </div>
                    <div className='divSkills'>
                        <FontAwesomeIcon className='skillsI' icon={faSquareJs} />
                        <h2>JAVASCRIPT</h2>
                        <p>JavaScript (JS) is a programming language used to create interactive and dynamic content on websites. It enables features like animations, form validation, and real-time updates without reloading the page. To learn the basics, don't hesitate to use the contact form below.</p>
                        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">Learn More</a>
                    </div>
                </div>
            </div>
        </section>
        {/* SECTION 3 */}
        <section id='portfolio'>
            <div className="container">
                <h1 className='subtitle titreWork'>My Work</h1>
                <div className="work-list slide-left">
                    <div className='work'>
                        <img src={ESHOPYY} alt="" />
                        <div className='layer'>
                            <h3>ESHOPYY</h3>
                            <p>EShoppy is a basic website to train the fact that you push things in for example a card in React. </p>
                            <a href="https://arthurvroost.github.io/E-Shoppy/"><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
                        </div>
                    </div>
                    <div className='work'>
                        <img src={ESPACE} alt="" />
                        <div className="layer">
                            <h3>ESPACE</h3>
                            <p>Espace is a site where you can find members of a NASA crew and possible destinies. </p>
                            <a href="https://arthurvroost.github.io/ProjetEspace/"><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
                        </div>
                    </div>
                    <div className='work'>
                        <img src={MULTIFORM} alt="" />
                        <div className="layer">
                            <h3>MULTIFORM</h3>
                            <p>Mutliform is as it sais a multiform than concludes in what type of subscription you want. </p>
                            <a href="https://arthurvroost.github.io/ProjetState/"><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
                        </div>
                    </div>
                </div>

                <div className="work-list slide-right">
                    <div className='work'>
                        <img src={RPS} alt="" />
                        <div className="layer">
                            <h3>ROCK&PAPER&SCISSOR</h3>
                            <p>RPS is the classic game that you play vs the computer.  </p>
                            <a href="https://arthurvroost.github.io/Rock-Paper-Scissors/"><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
                        </div>
                    </div>
                    <div className='work'>
                        <img src={NFT} alt="" />
                        <div className="layer">
                            <h3>EQUILIBRIUM</h3>
                            <p>Equilibrium is a card with some data about a random guy and his posessings in crypto </p>
                            <a href="https://arthurvroost.github.io/ExoCard2/"><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
                        </div>
                    </div>
                    <div className='work'>
                        <img src={TRACKER} alt="" />
                        <div className="layer">
                            <h3>REACT-TIME-TRACKING</h3>
                            <p>React-Time-Tracking is a dashboard thats tracks daily-weekly and -monthly stats about certain activities somebody did through a .json </p>
                            <a href="https://arthurvroost.github.io/React-Time-Tracking/"><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
                        </div>
                    </div>
                </div>
                <Link className='link' to="/allProjects"><button className='btn'>See More</button></Link>
            </div>
        </section>
        {/* SECTION 4 */}
        <section id='contact'>
            <div className="container">
                <div className="row">
                    <div className="contact-left">
                        <h1 className='subtitle'>Contact Me</h1>
                        <p><FontAwesomeIcon className='iContact1' icon={faPaperPlane} />arthur.vanroost@icloud.com</p>
                        <p><FontAwesomeIcon className='iContact1' icon={faPhone} />+32 499 73 63 24</p>
                        <div className="social-icons">
                            <a href="https://www.facebook.com/arthur.vanroost/"><FontAwesomeIcon className='iContact' icon={faFacebook} /></a>
                            <a href="https://www.instagram.com/a.vroost/"><FontAwesomeIcon className='iContact' icon={faSquareInstagram} /></a>
                            <a href="https://www.linkedin.com/in/arthur-van-roost-79a9a8180/"><FontAwesomeIcon className='iContact' icon={faLinkedinIn} /></a>
                            <a href="https://github.com/ArthurVRoost"><FontAwesomeIcon className='iContact' icon={faGithub} /></a>
                        </div>
                        <a href="LIEN VERS MON CV" className="btn btn2">Download CV</a>
                    </div>
                    <div className="contact-right">
                        <form>
                            <input type="text" name='Name' placeholder='Your Name' required />
                            <input type="email" name='email' placeholder='Your Email' required />
                            <textarea name="Message" rows="6" placeholder='Your Message' ></textarea>
                            <button type='submit' className='btn '>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}