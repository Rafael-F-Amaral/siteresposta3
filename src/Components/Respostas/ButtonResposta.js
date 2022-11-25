import React from 'react'
import './ButtonResposta.css'



const ButtonResposta = (props) => {
  return (
      <button  className='ContentButtonResposta'>
        {props.questao}
        {props.adg}
        {props.app}
        {props.av}

      </button>
  )
}

export default ButtonResposta