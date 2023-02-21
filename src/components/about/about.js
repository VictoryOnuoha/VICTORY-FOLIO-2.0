import './about.scss';
import headshot from '../../assets/images/headshot.svg';
import background from '../../assets/images/background.svg';
import interests from '../../assets/images/interests.svg';
import resume from '../../assets/files/VictoryOnuoha_ProjectManager_Resume.pdf';
import { useEffect } from 'react';

function About() {
    
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <main className='about' id='about' >


            
                <article className='about__title-box' >
                    <h2 className='about__title about__title-about'>ABOUT ME 👋🏾 </h2>
                </article>

                {/* about user=============== */}
            <section className='about__user' >
                <article className='about__text-box' >
                    <p className='about__text' >Hi, my name is Victory Onuoha. 
                    </p>

                    <p className='about__text' >I love all things technology, productivity and
                        wellness related. Have fun exploring!
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
                            Agile Project Manager with a background in healthcare and operations.
                        </p>
                        <p className='about__text' >
                            I have a Bachelors of Science in Neuroscience and a diploma in Web Development.
                            I am also currently taking a Project Management Certification.<br/> 
                            I am passionate about using technolgy to solve client-facing problems using my strong communication
                            and organizational skills.
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
                        Some of which can be found on <a href='https://github.com/VictoryOnuoha' target='_blank'> Github</a>.
                    </p>
                    <p className='about__text' >
                        My other interests include design, artifical intelligence, automation, reading, writing & emerging technologies.
                    </p>

                </article>
                <section className='about__photo-box'>
                    <img src={interests} alt='Victory' className='about__photo' />
                </section>

            </section>

            
            

                <section className='about__buttons' >

                    <a className='about__button' target="_blank" href={resume} download>
                        DOWNLOAD CV
                    </a>

                </section>
           
        </main>
    )
}


export default About;