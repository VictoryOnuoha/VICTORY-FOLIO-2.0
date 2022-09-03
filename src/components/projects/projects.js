import React, {useState, useEffect} from 'react';
import projectCards from '../../assets/data/card';

function Projects() {

    const [cards, setCards] = useState(projectCards);

    return (
        <main className='projects' >
            <section className='projects__title-box' >
                <h3 className='projects__title' >PROJECTS</h3>
            </section>

            <section className='projects__buttons' >
                <button className='projects__button' >VIEW ALL</button>
                <button className='projects__button' >WEB APP</button>
                <button className='projects__button' >WEBSITES</button>
            </section>

            <section className='projects__cards' >
                {cards.map((card) => {
                    return(
                        <article key={card.id} className='projects__card' >
                            <div>
                                <img src={card.image} alt='image of project' className='projects__image' />
                                <h4 className='projects__title' >{card.title}</h4>
                                <p className='projects__description'>{card.description}</p>
                            </div>
                        </article>
                    )
                })}
            </section>

        </main>
    )
}

export default Projects;