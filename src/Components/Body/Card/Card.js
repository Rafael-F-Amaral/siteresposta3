import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../../Button/Button'
import './Card.css'


const Card = (props) => {
  return (

    <div className='card' style={{ backgroundColor: '#D4D3F6' }}>
      <div className='card__body' >
        <img />
        <h2 className='card__title'>{props.download}</h2>
        <hr class="solid" />
        <p className='card__description'>{props.textDownload}</p>
      </div>      
        <button className='Button'>
          {props.ButtonDownload}
          {props.ButtonGrupos}
          {props.ButtonDatas}
        </button>


    </div>

  )
}

export default Card