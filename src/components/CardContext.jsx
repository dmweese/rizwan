import { useState, useEffect, createContext } from 'react'

const CardContext = createContext();

const CardProvider = props => {
    const [selectedCard, setSelectedCard] = useState([]);
    const [idealCards, setIdealCards] = useState([]);
    const [cards, setCards] = useState(
        {
            tanks: ['Dva', 'Orisa', 'Rein', 'Hog', 'Sigma', 'Winston', 'Ball', 'Zarya'],
            damage: ['Ashe', 'Bastion', 'Mccree', 'Doom', 'Echo', 'Genji', 'Hanzo', 'Junkrat', 'Mei', 'Pharah', 'Reaper', 'Soldier', 'Sombra', 'Sym', 'Torb', 'Tracer', 'Widow'],
            support: ['Ana', 'Bap', 'Brig', 'Lucio', 'Mercy', 'Moira', 'Zenyatta']
        }
    )

    return (
        <CardContext.Provider value={{ selectedCard, setSelectedCard, cards, setCards, idealCards, setIdealCards }} >
            {props.children}
        </CardContext.Provider>
    )
}


export { CardProvider, CardContext }