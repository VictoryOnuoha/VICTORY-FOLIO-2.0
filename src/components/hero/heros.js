import { HashLink } from 'react-router-hash-link';
import {Link} from 'react-router-dom';
import lineBlack from '../../assets/icons/line-black.png';
import hero from '../../assets/images/heroimage.svg';
import './hero.scss';

function Hero() {
    return(
        <main className='hero' >
            <section className='hero__about' >
                <section className='hero__about-user' >

                    <article className='hero__user' >
                        {/* <section className='hero__user-name' >
                            <img src={lineBlack} className='hero__user-line' alt='irregular line' />
                            <p className='hero__user-title' >Victory-Rita Onuoha</p>
                        </section> */}

                        <section className='hero__title-box' >
                            <h2 className='hero__job-title'> Hello. I am Victory.</h2>
                            <h2 className='hero__job-title'> I am a Full Stack Web Developer based in Canada.</h2>
                        </section>
                        
                        <section className='hero__buttons' >
                            
                                <Link className='hero__button'  to='/contact' >
                                  WORK WITH ME
                                </Link>
                            
                        </section>
                    </article>

                    <article className='hero__image-box'>
                        <img src={hero} className='hero__image' alt=' victory the front end web developer' />
                    </article>

                </section>
              
   
            
            </section>
            

            
        </main>
    )
}

export default Hero;