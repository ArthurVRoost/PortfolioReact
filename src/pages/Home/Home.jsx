import './home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  } from '@fortawesome/free-solid-svg-icons';
import { faHtml5,faReact, faSquareJs,faCss, faSass, faBootstrap } from '@fortawesome/free-brands-svg-icons';
import PPSECTION1 from '/src/assets/img/PP.jpg'
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
        </>
    )
}