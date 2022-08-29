import heroImage from '../../assets/images/headshot.jpg';
import linkedinIcon from '../../assets/icons/linkedin.svg';
import githubIcon from '../../assets/icons/github.svg';
import contactIcon from '../../assets/icons/contact.png';
import downloadIcon from '../../assets/icons/download.png';
import scrolldown from '../../assets/icons/scrolldown.gif';
import './hero.scss';

function Hero() {
    return(
        <main className='hero' >
            <section className='hero__image-box' >
                <img src={heroImage} className='hero__image' />
            </section>

            <section className='hero__title-box' >
                <h1 className='hero__title' >VICTORY-RITA ONUOHA</h1>
                <h2 className='hero__job-title'> 💻 Front End Developer</h2>
            </section>

            <section className='hero__description-box' >
                <h2 className='hero__description' > A specialist in creating 
                </h2>
                <span className='hero__description--selected'> Intuitive, Pixel-perfect,
                    Responsive and Optimized web apps. ⭐</span>
            </section>

            <section className='hero__link-box' >
                <img alt='logo and link for linkledn page' src={linkedinIcon} className='hero__linkedin-link' />
                <img alt='logo and link for github' src={githubIcon} className='hero__github-link' />
            </section>

            <section className='hero__buttons' >
                <button className='hero__button' >
                    Work with me
                    <img src={contactIcon} alt=' message us icon' className='hero__contact-button' />
                </button>

                <button className='hero__button'>
                    Download CV
                    <img src={downloadIcon} alt=' download cv icon' className='hero__download-button'/>
                </button>
            </section>

            <section className='hero__scroll-box' >
                <img src={scrolldown} alt='scroll down animation' className='hero__scroll-arrow' />
            </section>
        </main>
    )
}

export default Hero;