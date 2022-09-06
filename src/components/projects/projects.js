import React, {useState, useEffect} from 'react';
import projectCards from '../../assets/data/card';
import './projects.scss';

function Projects() {

    const [cards, setCards] = useState(projectCards);
    const [currentCard, setCurrentCard] = useState('ALL');

    const handleClick = (e) => {
        let word = e.target.value;
        setCurrentCard(word);
    }

    useEffect(() => {
        if(currentCard === 'ALL') {
            setCards(projectCards);
            
        } else {
            const filteredCards = projectCards.filter((card) => {
                return (
                    card.category === currentCard || card.category.includes(currentCard)
                );
            });
            setCards(filteredCards);

        }
    }, [currentCard] );

    return (
        <main className='projects' >
            <section className='projects__title-box' >
                <h3 className='projects__header' >PROJECTS</h3>
            </section>

            <section className='projects__buttons' >
                <button className='projects__button'  type='button' value='ALL' >VIEW ALL</button>
                <button className='projects__button' type='button' value='FEATURED' >FEATURED</button>
                <button className='projects__button' type='button' value='WEB APP' >WEB APP</button>
                <button className='projects__button' type='button' value='WEBSITES' >WEBSITES</button>
            </section>

            <section className='projects__cards' >
                {cards.map((card) => {
                    return(
                        <article key={card.id} className='projects__card' >
                            <img src={card.image} alt='image of project' className='projects__image' />
                            <div className='projects__card-box' >
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