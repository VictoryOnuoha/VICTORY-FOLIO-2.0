import './about.scss';
import headshot from '../../assets/images/headshot.svg';
import background from '../../assets/images/background.svg';
import interests from '../../assets/images/interests.svg';
import resume from '../../assets/files/Victory_Onuoha_Resume_Front_End_Software_Developer.pdf';

function About() {
    return (
        <main className='about' id='about' >


            
                <article className='about__title-box' >
                    {/* <img src={wavyWhite} className='about__title-line' alt='a decorative line'/> */}
                    <h2 className='about__title'>ABOUT ME 👋🏾 </h2>
                </article>

                {/* about user=============== */}
            <section className='about__user' >
                <article className='about__text-box' >
                    <p className='about__text' >Hi, my name is Victory Onuoha. 
                    </p>

                    <p className='about__text' >I love all things technology, productivity and
                        nature related. Have fun exploring!
                    </p>


                </article>
                <section className='about__photo-box'>
                    <img src={headshot} alt='Victory' className='about__photo' />
                </section>
            </section>

            <article className='about__skills-box' >
                <h2 className='about__title' >BACKGROUND 💻</h2>
            </article>

            {/* about background=============== */}
            <section className='about__user'>
              
                    <section className='about__photo-box'>
                        <img src={background} alt='Victory' className='about__photo' />
                    </section>

                    <article className='about__text-box' >
                        <p className='about__text'>
                            Software Engineer with additional experience in healthcare & operations.
                        </p>
                        <p className='about__text' >
                            I have a Bachelors of Science in Neuroscience and a diploma in Web Development.
                            I am passionate about using technolgy to solve client-facing problems.
                        </p>
                    </article>

            </section>

            <article className='about__skills-box' >
                <h2 className='about__title' > INTERESTS 🤹🏽</h2>
            </article>

            {/* about interests=============== */}
            <section className='about__user'>
                <article className='about__text-box' >
                    <p className='about__text'>
                        In my spare time, I create and experiment with web and app development.
                        Some of which can be found on Github.
                    </p>
                    <p className='about__text' >
                        My other interests include personal finance, artifical intelligence, automation, reading, writing,
                        design, emerging technologies and pop culture.
                    </p>

                </article>
                <section className='about__photo-box'>
                    <img src={interests} alt='Victory' className='about__photo' />
                </section>

            </section>

            
                {/* <section className='about__skills-box' >
                    <h2 className='about__skills' >SKILLS 💻</h2>
                </section>
                <p className='about__text'> I am always open to using new tools 
                    and technologies but, my current tech stack are skills such as:
                </p>

               
                <ul className='about__text about__text-list'>
                    <li className='about__text-list-item' >✅HTML5</li>
                    <li className='about__text-list-item' >✅CSS3</li>
                    <li className='about__text-list-item' >✅SASS</li>
                    <li className='about__text-list-item' >✅FIGMA </li>
                    <li className='about__text-list-item' >✅React</li>
                    <li className='about__text-list-item' >✅GIT</li>
                    <li className='about__text-list-item' >✅Javascript</li>
                    <li className='about__text-list-item' >✅REST API</li>
                    <li className='about__text-list-item' >✅Bootstrap</li>
                    <li className='about__text-list-item' >✅Node.js</li>
                    <li className='about__text-list-item' >✅Express.js</li>
                    <li className='about__text-list-item' >✅Firebase </li>
                    <li className='about__text-list-item' >✅SQL </li>

                </ul> */}

                <section className='about__buttons' >

                    <a className='about__button' target="_blank" href={resume} download>
                        DOWNLOAD CV
                    </a>

                </section>
           
        </main>
    )
}


export default About;