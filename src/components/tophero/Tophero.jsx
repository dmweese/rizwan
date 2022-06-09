import React from 'react'
import Card from '../card/Card.jsx'
import BigCard from '../card/BigCard.jsx'
import './hero.css'



const hero = (props) => {
  return (
    <div>
      <p>Them</p>
      <div className='row'>
        <Card className='big-card'/>
        <Card/>
      </div>
      <p>Your team</p>
      <div className='row'>
        <Card/>
        <Card/>
      </div>
    </div>
  )
}

export default hero;