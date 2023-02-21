import {Link} from 'react-router-dom';
import hero from '../../assets/images/heroimage.svg';
import './hero.scss';
import { useEffect } from 'react';


function Hero() {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return(
        <main className='hero' >
            <section className='hero__about' >
                <section className='hero__about-user' >

                    <article className='hero__user' >
                       

                        <section className='hero__title-box' >
                            <h2 className='hero__job-title'> Hello. I am Victory.</h2>
                            <h2 className='hero__job-title'> I am an Agile Project Manager based in Canada.</h2>
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