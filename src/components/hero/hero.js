import heroImage from '../../assets/images/headshot.jpg';
import linkedinIcon from '../../assets/icons/linkedin.svg';
import githubIcon from '../../assets/icons/github.svg';
import downloadIcon from '../../assets/icons/download.png';
import lineBlack from '../../assets/icons/line-black.png';
import hero from '../../assets/images/heroimage.jpg';
import './hero.scss';

function Hero() {
    return(
        <main className='hero' >
            <section className='hero__about' >
                <section className='hero__about-user' >

                    <article className='hero__user' >
                        <section className='hero__user-name' >
                            <img src={lineBlack} className='hero__user-line'/>
                            <p className='hero__user-title' >Victory-Rita Onuoha</p>
                        </section>

                        <section className='hero__title-box' >
                            <h2 className='hero__job-title'> Hello, my name is Victory.</h2>
                            <h2 className='hero__job-title'> I am a Front-end Web Developer.</h2>
                        </section>
                        
                        <section className='hero__buttons' >
                            <button className='hero__button'>
                                DOWNLOAD CV
                                <img src={downloadIcon} alt=' download cv icon' className='hero__download-button'/>
                            </button>
                        </section>
                    </article>

                    <article className='hero__image-box'>
                        <img src={hero} className='hero__image' alt=' victory the front end web developer' />
                    </article>

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

            {/* <section className='hero__scroll-box' >
                <img src={scrolldown} alt='scroll down animation' className='hero__scroll-arrow' />
            </section> */}
        </main>
    )
}

export default Hero;