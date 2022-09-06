import './about.scss';
import scrolldown from '../../assets/icons/scrolldown.gif';
import wavyPink from '../../assets/icons/wavy-pink.png';
import downloadIcon from '../../assets/icons/download.png';

function About() {
    return(
        <main className='about' >
            <section className='hero__scroll-box' >
                <img src={scrolldown} alt='scroll down animation' className='hero__scroll-arrow' />
            </section>

            <section className='about__me-box' >
                <article className='about__title-box' >
                    <img src={wavyPink} className='about__title-line' alt='a decorative line'/>
                    <h2 className='about__title'>ABOUT ME </h2>
                </article>   
            
                    <h1 className='about__info' >Creativity + Curiosity
                        are my superpowers 🦋
                    </h1>
            </section>
                <p className='about__text' >I enjoy building delightful, 
                    user-centered digital experiences.
                </p>
                <p className='about__text' >A diligent 
                <strong> Front-End focused Web Developer </strong>
                with over 2+ years of experience. 
                </p>

                <p className='about__text' ><strong> Collobarated </strong>
                     with solo entrepreneurs and businesses
                    to <strong> transform their digital presence </strong> 
                    by building stunning, <strong> highly intuituve and performant custom web apps.</strong>

                </p>
                <section className='about__skills' >
                    <h2>IDEATE.</h2>
                    <h2>SOLVE.</h2>
                    <h2>COLLABORATE.</h2>
                    <h2>EXECUTE.</h2>
                </section>
                <p className='about__text'> I am always trying new tools 
                    and technology but, my current tech stack in my toolbelt is:

                </p>

               
                
                <ul className='about__text about__text-list'>
                    <li>✅HTML5</li>
                    <li>✅CSS3</li>
                    <li>✅React.js</li>
                    <li>✅Javascript</li>
                    <li>✅Bootstrap</li>
                    <li>✅Node.js</li>
                    <li>✅Express.js</li>
                    <li>✅SQL etc.</li>

                </ul>
                <section className='about__buttons' >
                <button className='about__button'>
                    Download CV
                    <img src={downloadIcon} alt=' download cv icon' className='about__download-button'/>
                </button>
            </section>
          
        </main>
    )
}


export default About;