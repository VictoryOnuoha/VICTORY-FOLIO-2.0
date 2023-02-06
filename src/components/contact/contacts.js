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
                        <h4 className='contact__title-item'>As a product manager in the health and tech space, I assist companies & innovators in crafting, developing, experimenting with, and launching web-based solutions.
                        </h4>
                        <h4 className='contact__title-item' > Get in touch with me if you're seeking a nimble and imaginative digital product manager to enhance your team.</h4>
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
