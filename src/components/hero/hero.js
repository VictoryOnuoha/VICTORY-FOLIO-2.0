import scrollDown from '../../assets/icons/scrolldown.gif';
import lineBlack from '../../assets/icons/line-black.png';
import hero from '../../assets/images/heroimage.png';
import './hero.scss';

function Hero() {
    return(
        <main className='hero' >
            <section className='hero__about' >
                <section className='hero__about-user' >

                    <article className='hero__user' >
                        <section className='hero__user-name' >
                            <img src={lineBlack} className='hero__user-line' alt='irregular line' />
                            <p className='hero__user-title' >Victory-Rita Onuoha</p>
                        </section>

                        <section className='hero__title-box' >
                            <h2 className='hero__job-title'> Hello, my name is Victory.</h2>
                            <h2 className='hero__job-title'> I am a Front-End Web Developer.</h2>
                        </section>
                        
                        <section className='hero__buttons' >
                            <button className='hero__button'>
                                WORK WITH ME
                            </button>
                        </section>
                    </article>

                    <article className='hero__image-box'>
                        <img src={hero} className='hero__image' alt=' victory the front end web developer' />
                    </article>

                </section>
                <section className='hero__scroll-box' >
                     <img src={scrollDown} alt='scroll down animation' className='hero__scroll-arrow' />
                </section>
   
            
                {/* <article className='hero__links' >
                    <section className='hero__link-box' >
                        <img alt='logo and link for linkledn page' src={linkedinIcon} className='hero__linkedin-link' />
                        <img alt='logo and link for github' src={githubIcon} className='hero__github-link' />
                    </section>
                </article> */}
            </section>
            
           
            {/* <section className='hero__buttons' >
                <button className='hero__button'>
                    Download CV
                    <img src={downloadIcon} alt=' download cv icon' className='hero__download-button'/>
                </button>
            </section> */}

            
        </main>
    )
}

export default Hero;