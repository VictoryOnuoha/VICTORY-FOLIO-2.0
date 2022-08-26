import heroImage from '../../assets/images/headshot.jpg';
import linkedinIcon from '../../assets/icons/linkedin.svg';
import githubIcon from '../../assets/icons/github.svg';
import contactIcon from '../../assets/icons/contact.png';
import downloadIcon from '../../assets/icons/download.png';
import scrolldown from '../../assets/icons/scrolldown.gif';

function Hero() {
    return(
        <main>
            <section>
                <img src={heroImage} />
            </section>
            <section>
                <h1>Victory Onuoha</h1>
                <h2>Front End Developer</h2>
            </section>

            <section>
                <h2> A specialist in creating Intuitive, Pixel-perfect
                    Responsive and Optimized web apps.
                </h2>
            </section>

            <section>
                <img alt='logo and link for linkledn page' src={linkedinIcon} />
                <img alt='logo and link for github' src={githubIcon} />
            </section>

            <section>
                <button>
                    Work with me
                    <img src={contactIcon} alt=' message us icon' />
                </button>

                <button>
                    Download CV
                    <img src={downloadIcon} alt=' download cv icon' />
                </button>
            </section>

            <section>
                <img src={scrolldown} alt='scroll down animation' />
            </section>
        </main>
    )
}

export default Hero;