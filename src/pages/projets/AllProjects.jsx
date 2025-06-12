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
import { faArrowUpRightFromSquare, faPaperPlane, faPhone } from '@fortawesome/free-solid-svg-icons';
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
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}