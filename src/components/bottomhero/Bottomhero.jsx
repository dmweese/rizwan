import Card from '../card/Card.jsx'
import './bottomhero.css'
import { useState, useContext, useEffect } from 'react'
import { CardContext } from '../CardContext'
import '../App.css'
import { isEqual, sortBy } from 'lodash'

const Bottomhero = () => {

    // accessing all above mentioned states from CardContext.js
    const { selectedCard, setSelectedCard, cards, setCards, idealCards, setIdealCards } = useContext(CardContext);
    const [idealTeam, setItdealTeam] = useState([])
    useEffect(() => {
        addHeroToIdealTeam(cards);
    }, [cards])

    //function called when the selectedCard on top is clicked
    const removeHeroFromTheTop = (removeCard) => {

        // remove the selected card from the selecetedCard array based on the cardName
        setSelectedCard(selectedCard.filter(card => card.cardName !== removeCard.cardName))

        //switch statements for the category of the selectedCard
        switch (removeCard.category) {
            case 'tanks': setCards(prevCard => ({
                ...prevCard,
                tanks: [removeCard.cardName, ...prevCard.tanks]
            })); break;
            case 'damage': setCards(prevCard => ({
                ...prevCard,
                damage: [removeCard.cardName, ...prevCard.damage]
            })); break;
            default: setCards(prevCard => ({
                ...prevCard,
                support: [removeCard.cardName, ...prevCard.support]
            }));
        }

    }


    // function called when a hero is selected
    const addHeroToTheTop = (card) => {

        //creating a new object with name and category as the key 
        const newCard = {
            cardName: card,
            category: null
        }

        //looping through tanks array in cards to check if the selected card's category belong to the array
        cards.tanks.map(tcard => {
            if (tcard === card) {
                newCard.category = 'tanks'
            }
        })

        //looping through tanks array in cards to check if the selected card's category belong to the array
        cards.damage.map(tcard => {
            if (tcard === card) {
                newCard.category = 'damage'
            }
        })

        //looping through tanks array in cards to check if the selected card's category belong to the array
        cards.support.map(tcard => {
            if (tcard === card) {
                newCard.category = 'support'
            }
        })

        //moving the selected card to the selectedCard array based on condition
        if (selectedCard.length > 0) {
            let count = 0;

            // looping through the selectedCard array to find the number of cards of the selected card's category and increamenting the count if true
            selectedCard.map(card => {
                if (card.category === newCard.category) {
                    count += 1
                }
            })

            // condition to add the card to selectedCard array only if number of cards of the same category is less than two
            if (count < 2) {
                setSelectedCard(e => [...e, newCard]);
                setCards(state => ({ ...state, [newCard.category]: state[newCard.category].filter(card => card !== newCard.cardName) }))
            }
        } else {

            // Add card to selectedCard array if the array is empty
            setSelectedCard(e => [...e, newCard]);
            setCards(state => ({ ...state, [newCard.category]: state[newCard.category].filter(card => card !== newCard.cardName) }))

        }

    }

    const addHeroToIdealTeam = () => {

        //if tank 1 = bob and tank 2 = joe and damage 1 = john and damage 2 = jack
        //and healer 1 = jane and healer 2 = sophia
        //

        //then output other ideal team x

        //if tank 1 = bob and tank 2 = joe then output team y
        //if tank 1 = john and tank 2 = joe then output team x

    }

    useEffect(() => {


        console.log(selectedCard)
        const combinations = [
            {
                combination: ['Rein', 'Zarya', 'Soldier','Pharah','Bap','Ana'],
                iC: ['Rein', 'Zarya', 'Hanzo','Mei','Mercy','Ana']
            },
            {
                combination: ['Ball','Zarya','Ashe','Reaper','Bap','Mercy'],
                iC: ['Rein', 'Orisa', 'Junkrat','Soldier','Ana','Mercy']
            },
            {
                combination: ['Orisa','Sigma','Bastion','Soldier','Ana','Mercy'],
                iC: ['Rein','Zarya','Junkrat','Soldier','Ana','BapR']
            }
        ]

        if (selectedCard.length === 6) {


            let a = selectedCard.map(x => x.cardName)
            let iC = [];
            for (let i = 0; i < combinations.length; i++) {
                if (isEqual(sortBy(a), sortBy(combinations[i].combination))) {
                    iC = combinations[i].iC;
                    break;
                }
            }
            setItdealTeam(iC)
        } else {
            setItdealTeam([])
        }


    }, [selectedCard])

    return (
        <div>
            <div>
                <h3>IDEAL TEAM</h3>
                <div className='row'>
                    {
                        idealTeam.map(card => {
                            return <Card cardSize={'little-card'} hero={card} />
                        })
                    }

                </div>
            </div>
            <div>
                <h3>ENEMY TEAM</h3>
                <div className='row'>
                    {
                        selectedCard.length > 0 ? selectedCard.map((card, index) => (<div key={index} onClick={() => removeHeroFromTheTop(card)} ><Card key={index} cardSize={'little-card'} hero={card.cardName} /> </div>)) : <Card cardSize={'little-card'} />
                    }
                </div>

            </div>



            <h3>SELECT ENEMY TEAM HEROES</h3>
            <div className="row">

                <div className="row">
                    <div className="row">
                        <i className="gg-shield"></i>
                        {
                            cards.tanks.map((card, index) => <div key={index} onClick={() => addHeroToTheTop(card)} ><Card cardSize={'little-card'} hero={card} /> <p>{card}</p> </div>)
                        }
                    </div>
                    <div className="row">
                        <i className="gg-track"></i>
                        {
                            cards.damage.map((card, index) => <div key={index} onClick={() => addHeroToTheTop(card)}> <p>{card}</p>
                                <Card cardSize={'little-card'} hero={card} />
                            </div>)
                        }
                    </div>
                    <div className="row">
                        <i className="gg-swiss"></i>
                        {
                            cards.support.map((card, index) => <div key={index} onClick={() => addHeroToTheTop(card)}> <p>{card}</p>
                                <Card cardSize={'little-card'} hero={card} />
                            </div>
                            )
                        }
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Bottomhero;