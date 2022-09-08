import React, {useState} from "react";
import './contact.scss';

function Contact() {








    return(
        <main className='contact' >
            <section className='contact__title-box' >
                <h3 className='contact__title' >LET'S CHAT</h3>
            </section>

            <section className='contact__form-box' >
                <form
                className='contact__form'
                >
                    <label for='fname' className='contact__name' >
                        Full Name
                        <input 
                          id='fname'
                          type='text'
                          value=''
                          name=''
                          placeholder='First and last name is..'
                          className='contact__input' />
                    </label>
                    <br/>
                  

                    <label for='email' className='contact__email'>
                        Email
                        <input
                          id='email'
                          type='email'
                          value=''
                          name=''
                          placeholder='example@live.com'
                          className='contact__input'/>
                    </label>
                    <br/>
                    <label for='customer' className='contact__customer'>
                        I am a/ an 
                        <br/>
                        <select 
                          id='customer'
                          type='text'
                          value=''
                          className='contact__input' >
                            <option >Recruiter</option>
                            <option>Business Owner</option>
                            <option>Press/ Media</option>
                        </select>
                    </label> 
                    <br/>
                    <label for='message' className='contact__message' >
                        Message
                        <textarea
                            id='message'
                            name='message'
                            value=''
                            placeholder='I want to work with you'
                            className='contact__input contact__message-box'/>
                    </label>
                    <section className='contact__button-box'>
                      <input type='submit' name='submit' value="CONTACT ME" className='contact__button'/>
                    </section>
                </form>
            </section>
        </main>
    )
};

export default Contact;
