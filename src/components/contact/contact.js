import React from "react";
import './contact.scss';
import email from '../../assets/images/email 2.svg'
import contactImage from '../../assets/images/contact-image.svg';
import linkedin from '../../assets/icons/linkedin.svg';
import github from '../../assets/icons/github.svg';
import { useEffect } from "react";

function Contact() {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return(
        <main className='contact' id='contact' >
            <section className='contact__title-box' >
                <h3 className='contact__title' >LET'S CONNECT</h3>
            </section>

            <section className='contact__form-box' >
                <article className='contact__cta' >
                    <section className='contact__title-box'>
                        <h4 className='contact__title-item'>
                        As an Agile and experienced Project Manager with a background in healthcare and operations, I specialize in managing the development and deployment of technical and non technical solutions that meet the needs of companies and innovators. <br/><br/>I have a proven track record of delivering successful projects on time and within budget, while ensuring that all project requirements are met.
                        </h4>
                        <h4 className='contact__title-item' > Let's connect if you're looking for a skilled Project Manager to drive innovation and collaboration in your team.</h4>
                    </section>
                    <section className="contact__links-box" >
                        <a href="mailto: victoryonuoha@cmail.carleton.ca" 
                        target='_blank'>
                            <img src={email} alt='logo for email' className='contact__link-email' />
                        </a>
                        <a href='https://www.linkedin.com/in/victoryrita-onuoha/'
                         target='_blank'>
                            <img alt='logo and link for linkledn page' src={linkedin} className='contact__link' />
                        </a>
                        <a href='https://github.com/VictoryOnuoha' 
                        target='_blank' >
                            <img alt='logo and link for github' src={github} className='contact__link' />
                        </a>
                    </section>
                   

                </article>
                
                <section>
                    <img className='contact__image' alt='people chatting' src={contactImage} />
                </section>
            </section>
        </main>
    )
};

export default Contact;
