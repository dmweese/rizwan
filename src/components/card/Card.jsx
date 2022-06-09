import React from 'react'
import './card.css'
import bg from '../../assets/pics/bg.jpg'
import ashe from '../../assets/pics/ashe.jpg'
import ana from '../../assets/pics/ana.jpg'
import ball from '../../assets/pics/ball.jpg'
import bap from '../../assets/pics/bap.jpg'
import bastion from '../../assets/pics/bastion.jpg'
import brig from '../../assets/pics/brig.jpg'
import doom from '../../assets/pics/doom.jpg'
import dva from '../../assets/pics/dva.jpg'
import echo from '../../assets/pics/echo.jpg'
import genji from '../../assets/pics/genji.jpg'
import hanzo from '../../assets/pics/hanzo.jpg'
import hog from '../../assets/pics/hog.jpg'
import junkrat from '../../assets/pics/junkrat.jpg'
import lucio from '../../assets/pics/lucio.jpg'
import mccree from '../../assets/pics/mccree.jpg'
import mei from '../../assets/pics/mei.jpg'
import mercy from '../../assets/pics/mercy.jpg'
import moira from '../../assets/pics/moira.jpg'
import orisa from '../../assets/pics/orisa.jpg'
import pharah from '../../assets/pics/pharah.jpg'
import reaper from '../../assets/pics/reaper.jpg'
import rein from '../../assets/pics/rein.jpg'
import sigma from '../../assets/pics/sigma.jpg'
import sombra from '../../assets/pics/sombra.jpg'
import sym from '../../assets/pics/sym.jpg'
import torb from '../../assets/pics/torb.jpg'
import tracer from '../../assets/pics/tracer.jpg'
import widow from '../../assets/pics/widow.jpg'
import winston from '../../assets/pics/winston.jpg'
import zarya from '../../assets/pics/zarya.jpg'
import zenyatta from '../../assets/pics/zenyatta.jpg'
import soldier from '../../assets/pics/76.jpg';

const Card = (props) => {
  var photo;

  const heros = ['Dva', 'Orisa', 'Rein', 'Hog', 'Sigma', 'Winston', 'Ball', 'Zarya', 'Ashe', 'Bastion', 'Mccree', 'Doom', 'Echo', 'Genji', 'Hanzo', 'Junkrat', 'Mei', 'Pharah', 'Reaper', 'Soldier', 'Sombra', 'Sym', 'Torb', 'Tracer', 'Widow', 'Ana', 'Bap', 'Brig', 'Lucio', 'Mercy', 'Moira', 'Zenyatta']
  const images = [dva, orisa, rein, hog, sigma, winston, ball, zarya, ashe, bastion, mccree, doom, echo, genji, hanzo, junkrat, mei, pharah, reaper, soldier, sombra, sym, torb, tracer, widow, ana, bap, brig, lucio, mercy, moira, zenyatta]

  heros.map((hero, index) => {
    if (props.hero === hero) {
      photo = images[index];
    }
  })

  return (
    <div className={props.cardSize ? "little-card grow" : "big-card"} >
      <img src={photo} alt={props.hero} />
    </div>
  )
}



export default Card;