import './about.scss';
import scrolldown from '../../assets/icons/scrolldown.gif';
import wavyWhite from '../../assets/icons/wavy-pink.png';
import downloadIcon from '../../assets/icons/download.png';
import headshot from '../../assets/images/headshot.png';

function About() {
    return(
        <main className='about' id='about' >
            <section className='hero__scroll-box' >
                <img src={scrolldown} alt='scroll down animation' className='hero__scroll-arrow' />
            </section>

            <section className='about__me-box' >
                <article className='about__title-box' >
                    <img src={wavyWhite} className='about__title-line' alt='a decorative line'/>
                    <h2 className='about__title'>ABOUT ME </h2>
                </article>   
            
                    <h1 className='about__info' >Hello, World 🦋
                    </h1>
            </section>
            <section className='about__user' >
                <article className='about__text-box' >
                    <p className='about__text' >Thank you for being here! 
                    I am Victory Onuoha, a Front-End Web Developer
                    
                    </p>
                    <p className='about__text' > I enjoy building delightful, 
                        user-centered and accessible digital experiences.
                    </p>
                    <p className='about__text' >A diligent 
                    <strong> Front-End focused Web Developer </strong>
                    with over 2+ years of experience. I am a graduate 
                    of BrainStation Web Development Intensive Bootcamp and
                    I have a BSc in Neuroscience and Psychology from the 
                    University of Carleton.
                    </p>

                    <p className='about__text' > When I am not reading or hiking, I am
                    passionate about helping <strong> solo entrepreneurs </strong>
                    and <strong>businesses</strong>  <strong> transform their digital presence </strong> 
                        by building stunning, <strong> highly intuituve and performant custom web apps.</strong>
                    </p>
                </article>
                <section className='about__photo-box'>
                    <img src={headshot} alt='a picture of Victory' className='about__photo' />
                </section>
            </section>

                <section className='about__skills-box' >
                    <h2 className='about__skills' >SKILLS 💻</h2>
                </section>
                <p className='about__text'> I am always trying new tools 
                    and technologies but, my current tech stack in my toolbelt is:
                </p>

               
                <ul className='about__text about__text-list'>
                    <li className='about__text-list-item' >✅HTML5</li>
                    <li className='about__text-list-item' >✅CSS3</li>
                    <li className='about__text-list-item' >✅SASS</li>
                    <li className='about__text-list-item' >✅React</li>
                    <li className='about__text-list-item' >✅GIT</li>
                    <li className='about__text-list-item' >✅Javascript</li>
                    <li className='about__text-list-item' >✅REST API</li>
                    <li className='about__text-list-item' >✅Bootstrap</li>
                    <li className='about__text-list-item' >✅Node.js</li>
                    <li className='about__text-list-item' >✅Express.js</li>
                    <li className='about__text-list-item' >✅SQL </li>

                </ul>
                <section className='about__buttons' >
                <button className='about__button'>
                    DOWNLOAD CV
                    <img src={downloadIcon} alt=' download cv icon' className='about__download-button'/>
                </button>
            </section>
          
        </main>
    )
}


export default About;