import React, {useState} from "react";
import './contact.scss';

import contactImage from '../../assets/images/contact-image.svg';
import emailjs from '@emailjs/browser';



function Contact() {
    const [toSend, setToSend] = useState({
            user_name: '',
            user_email: '',
            message: '',
            user_title: '',
    });

    const onSubmit = (e) => {
        e.preventDefault();
        emailjs
        .send('service_jxlcs4e', 'template_7l9aj25', toSend, 'bahH2Ue8uJwWNsMaG')
        .then((response) => {
            alert('Thank you for your email! I will reach out to you as soon as possible', response.status);
        }).catch((err) => {
            alert('Error! Please try again', err)
        });
       
    }

    const handleChange = (e) => {
        setToSend({...toSend, [e.target.name]: e.target.value});
    }

    return(
        <main className='contact' id='contact' >
            <section className='contact__title-box' >
                <h3 className='contact__title' >LET'S CONNECT</h3>
            </section>

            <section className='contact__form-box' >
                <form
                className='contact__form'
                onSubmit={onSubmit}
                >
                    <label htmlFor='fname' className='contact__name' >
                        Full Name
                        <input 
                          id='fname'
                          type='text'
                          value={toSend.user_name}
                          onChange={handleChange}
                          name='user_name'
                          placeholder='First and last name is..'
                          className='contact__input' />
                    </label>
                    <br/>
                  

                    <label htmlFor='email' className='contact__email'>
                        Email
                        <input
                          id='email'
                          type='email'
                          value={toSend.user_email}
                          onChange={handleChange}
                          name='user_email'
                          placeholder='example@live.com'
                          className='contact__input'/>
                    </label>
                    <br/>
                    <label htmlFor='customer' className='contact__customer'>
                        I am a/ an 
                        <br/>
                        <select 
                          id='customer'
                          type='text'
                          name='user_title'
                          value={toSend.user_title}
                          onChange={handleChange}
                          className='contact__input' >
                            <option >Recruiter</option>
                            <option>Business Owner</option>
                            <option>Press/ Media</option>
                        </select>
                    </label> 
                    <br/>
                    <label htmlFor='message' className='contact__message' >
                        Message
                        <textarea
                            id='message'
                            name='message'
                            value={toSend.message}
                            onChange={handleChange}
                            placeholder='I want to work with you'
                            className='contact__input contact__message-box'/>
                    </label>
                    <article>
                        <section className='contact__button-box'>
                        <input type='submit' name='submit' value="CONTACT ME" className='contact__button'/>
                        </section>
                       
                    </article>
                </form>
                <section>
                    <img className='contact__image' alt='people chatting' src={contactImage} />
                </section>
            </section>
        </main>
    )
};

export default Contact;
