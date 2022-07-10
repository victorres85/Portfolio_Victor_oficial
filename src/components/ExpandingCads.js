import React, { useState, useEffect } from 'react';
import Card from './Card';
import LettersAnimation from './Cover/LettersAnimation';


const ExpandingCards = (props) => {
    const projectsArray = ['P', 'r', 'o', 'j', 'e', 'c', 't', 's']
    const [letterClass, setLetterClass] = useState('text-animate')


    useEffect(() => {
        const timeout = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000);

        return () => clearTimeout(timeout)
    }, []);


    const [data, setData] = useState(props.data);

    const onCardClick = (id) => {
        const newState = [...data];
        newState.map((item) => item.openModal = false)

        newState.map((item) => item.id === id ? item.active = true : item.active = false);
        setData(newState);
    }

    if (!data || data.lenght <= 0) {
        return "No data to render cards!";
    }
    return (
        <>
            <h1><LettersAnimation letterClass={letterClass} letters={projectsArray} idx={300} /></h1>
            <section className='cards'>

                {
                    data.map((card) =>
                        <Card
                            key={card.id}
                            data={card}

                            onCardClick={onCardClick} />
                    )
                }
            </section >
        </>
    )
}

export default ExpandingCards;