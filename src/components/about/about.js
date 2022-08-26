import './about.scss';

function About() {
    return(
        <main className='about' >

            <section className='about__me-box' >
                <h2 className='about__title'>ABOUT ME </h2>
                <h1 className='about__info' >Creativity + Curiosity
                     are my superpowers 🦋
                </h1>
            </section>

            <p className='about__text' >A diligent
            Front-End focused Web Developer
              with over 2+ years of experience. 
            </p>

            <p className='about__text' >Collobarated with solo entrepreneurs and businesses
               to transform their digital presence by building 
               stunning, highly intuituve and performant custom web apps

            </p>

            <p className='about__text'>
                My primary tech stack in my toolbelt is HTML5, CSS3, React.js, 
                Javascript, Bootstrap, Node.js, Express.Js etc.
            </p>

            <p className='about__text'> I always follow best practices 
                and current tools
            </p>

          
        </main>
    )
}


export default About;