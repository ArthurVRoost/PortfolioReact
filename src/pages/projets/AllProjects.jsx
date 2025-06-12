import'./allprojects.css'
import ROMYK from '/src/assets/img/about-img.png'
import API from '/src/assets/img/API.png'
import BARBER from '/src/assets/img/BARBER.png'
import CALCULETTE from '/src/assets/img/CALCULETTE.png'
import CBIENBON from '/src/assets/img/CBIENBON.png'
import FETE from '/src/assets/img/Fete.png'
import MG from '/src/assets/img/Molengeek.png'
import PREMIER from '/src/assets/img/Premier.png'
import PUNCHING from '/src/assets/img/PunchingBall.png'
import SPATIAL from '/src/assets/img/SPATIAL.png'
import STARTCSS from '/src/assets/img/STARTCSS.png'
import TODO from '/src/assets/img/TODO.png'
import YC from '/src/assets/img/Youcommunik.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'

export default function AllProjects() {
    return(
        <>
        <section>
            <div className="container">
                <h1>All My Work</h1>
                <div className="work-list">
                    <div className="work">
                        <img src={ROMYK} alt="" />
                        <div className='layer'>
                            <h3>ROMYK</h3>
                            <p>Romyk is the site of an icecream maker where you can find his recipies and where to find him. </p>
                            <a href="https://arthurvroost.github.io/Romyk/"><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
                        </div>
                    </div>
                    <div className="work">
                        <img src={CBIENBON} alt="" />
                        <div className="layer">
                            <h3>CBIENBON</h3>
                            <p>CBienBon is a restaurant website where we can find all sorts of information on the restaurant itself. </p>
                            <a href="https://arthurvroost.github.io/CBIENBONN/"><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
                        </div>
                    </div>
                    <div className="work">
                        <img src={BARBER} alt="" />
                        <div className="layer">
                            <h3>NOUILLES</h3>
                            <p>Nouilles is the portfolio of a barber where you can find all his information regarding himself and his work. </p>
                            <a href="https://arthurvroost.github.io/Nouilles/"><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
                        </div>
                    </div>
                    <div className="work">
                        <img src={CALCULETTE} alt="" />
                        <div className="layer">
                            <h3>CALCULETTE</h3>
                            <p>Calculette scientifique basique.  </p>
                            <a href="https://arthurvroost.github.io/Calculette/"><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
                        </div>
                    </div>
                    <div className="work">
                        <img src={API} alt="" />
                        <div className="layer">
                            <h3>Recepies</h3>
                            <p>A page with 29 recepies.</p>
                            <a href="https://arthurvroost.github.io/ExoMealApi/"><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
                        </div>
                    </div>
                    <div className="work">
                        <img src={PUNCHING} alt="" />
                        <div className="layer">
                            <h3>PUNCHING-BALL</h3>
                            <p>A PunchingBall with a 100hp, every hit is worth 10hp </p>
                            <a href="https://arthurvroost.github.io/PunchingBall/"><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
                        </div>
                    </div>
                    <div className="work">
                        <img src={FETE} alt="" />
                        <div className="layer">
                            <h3>FETE-DES-MERES</h3>
                            <p>This is a gift card with a open-folding animation </p>
                            <a href="https://arthurvroost.github.io/F-teDesMeres/"><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
                        </div>
                    </div>
                    <div className="work">
                        <img src={TODO} alt="" />
                        <div className="layer">
                            <h3>TO-DO-LIST</h3>
                            <p>A simple To-Do-List where you can add/remove tasks </p>
                            <a href="https://arthurvroost.github.io/ToDoList/"><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
                        </div>
                    </div>
                    <div className="work">
                        <img src={SPATIAL} alt="" />
                        <div className="layer">
                            <h3>SPATIAL</h3>
                            <p>Spatial is a basic site filled with lorem just to get the hang of css </p>
                            <a href="https://arthurvroost.github.io/Spatial/"><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
                        </div>
                    </div>
                    <div className="work">
                        <img src={STARTCSS} alt="" />
                        <div className="layer">
                            <h3>START-CSS</h3>
                            <p>Start CSS is a basic site with some fun and basic transitions </p>
                            <a href="https://arthurvroost.github.io/Start-CSS/"><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
                        </div>
                    </div>
                    <div className="work">
                        <img src={YC} alt="" />
                        <div className="layer">
                            <h3>YOUCOMMUNIK</h3>
                            <p>A site that doesn't make much sense other than working and starting to learn HTML/CSS</p>
                            <a href="https://arthurvroost.github.io/YouCommunik/"><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
                        </div>
                    </div>
                    <div className="work">
                        <img src={MG} alt="" />
                        <div className="layer">
                            <h3>MOLENGEEK</h3>
                            <p>This is an exact replica of one the pages of the MolenGeek website </p>
                            <a href="https://arthurvroost.github.io/Site-Molengeek/"><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
                        </div>
                    </div>
                    <div className="work">
                        <img src={PREMIER} alt="" />
                        <div className="layer">
                            <h3>THE-FIRST-ONE</h3>
                            <p>This is the first site i did in HTML/CSS, as you can expect it is horrible but it still does something to me because of it being the first. </p>
                            <a href="https://arthurvroost.github.io/Livre-de-recette/"><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
                        </div>
                    </div>
                </div>
                <div className="btnPage1">
                    <Link className='link' to="/"><button className='btn'>Go Back</button></Link>
                    <Link className='link' to="https://github.com/ArthurVRoost"><button className='btn'>Github Profile</button></Link>
                </div>
            </div>
        </section>
        </>
    )
}