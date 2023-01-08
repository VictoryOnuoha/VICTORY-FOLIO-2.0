import linkedin from '../../assets/icons/linkedin-white.svg';
import github from '../../assets/icons/github-white.svg'

import './footer.scss';
function Footer() {
    return (
        <main className='footer'>
            <section className='footer__social-box'>
                <h3 className='footer__social-title' > FIND ME ON SOCIAL ! </h3>
            </section>
            <section className="footer__link-box">
                <a href='https://www.linkedin.com/in/victoryrita-onuoha/' target='_blank' >
                    <img alt='logo and link for linkledn page' src={linkedin} className='footer__linkedin-link' />
                </a> 
                <a href='https://github.com/VictoryOnuoha' target='_blank' >
                <img alt='logo and link for github' src={github} className='footer__github-link' />
                </a>
            </section>
            <section className='footer__author-box' >
                <h4 className='footer__author' >Designed and Developed with ☕ by Victory Onuoha </h4>
            </section>
           
            <section className="footer__copyright-box" >
             <span className='footer__copyright' > &copy; 2023 VICTORY ONUOHA</span>  
            </section>
    </main>
    )
}

export default Footer;  