import React, {useState} from "react";


function Contact() {








    return(
        <main>
            <section>
                <h3>LET'S CHAT</h3>
            </section>

            <section>
                <form>
                    <label for='fname' >
                        <input 
                          id='fname'
                          type='text'
                          value=''
                          name=''
                          placeholder='First and last name is..' />
                    </label>

                    <label for='email'>
                        <input
                          id='email'
                          type='email'
                          value=''
                          name=''
                          placeholder='example@live.com'/>
                    </label>
                    <label for='customer'>
                        I am a/ an 
                        <select 
                          id='customer'
                          type='text'
                          value='' >
                            <option >Recruiter</option>
                            <option>Business Owner</option>
                            <option>Press/ Media</option>
                        </select>
                    </label> 

                    <label for='message'>
                        <textarea
                            id='message'
                            name='message'
                            value=''
                            placeholder='I want to work with you'/>
                    </label>
                    <section>
                      <input type='submit' name='submit' value="Submit"/>
                    </section>
                </form>
            </section>
        </main>
    )
};

export default Contact;
