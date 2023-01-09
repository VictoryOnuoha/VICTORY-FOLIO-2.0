import React, {useState, useEffect} from 'react';
import projectCards from '../../assets/data/cards';
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
        <main className='projects' id='projects' >
            <section className='projects__title-box' >
                <h3 className='projects__header' >PROJECTS</h3>
            </section>

            <section className='projects__buttons' >
                <button className='projects__button' onClick={handleClick} type='button' value='ALL' >VIEW ALL</button>
                <button className='projects__button' onClick={handleClick} type='button' value='FEATURED' >FEATURED</button>
                <button className='projects__button' onClick={handleClick} type='button' value='WEB APP' >WEB APP</button>
                <button className='projects__button' onClick={handleClick} type='button' value='WEBSITE' >WEBSITES</button>
            </section>

            <section className='projects__cards' >
                {cards.map((card) => {
                    return(
                        <article key={card.id} className='projects__card' >
                            <img src={card.image} alt='project demo' className='projects__image' />
                            <div className='projects__card-box' >
                                <h4 className='projects__title' >{card.title}</h4>
                                <p className='projects__description'>{card.description}</p>
                                
                                <div className='projects__tech-box' >
                                    <p className='projects__tech' > Technologies used: {card.technology}</p>
                                </div>
                                <div className='projects__links' >
                                    <a href={card.live} target='_blank' rel="noreferrer" className='projects__link'>View Live</a>
                                    <a href={card.repo} target='_blank' rel="noreferrer" className='projects__link'>Repo</a>
                                </div>
                                
                            </div>
                        </article>
                    )
                })}
            </section>

        </main>
    )
}

export default Projects;