import React from 'react'
import './ButtonResposta.css'



const ButtonResposta = (props) => {
  return (
      <button  className='ContentButtonRespostaAv'>
        {props.questao}
        {props.adg}
        {props.app}
        {props.av}

      </button>
  )
}

export default ButtonResposta