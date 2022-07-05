import React, { useState } from 'react';
import Card from './Card';

const ExpandingCards = (props) => {
    const [data, setData] = useState(props.data);


    const onCardClick = (id) => {
        const newState = [...data];

        newState.map((item) => item.id === id ? item.active = true : item.active = false);
        setData(newState);
    }

    if (!data || data.lenght <= 0) {
        return "No data to render cards!";
    }
    return (
        <>
            <h1>Projects</h1>
            <section className="cards">

                {
                    data.map((card) =>
                        <Card key={card.id} data={card}
                            onCardClick={onCardClick} />
                    )
                }
            </section >
        </>
    )
}

export default ExpandingCards;