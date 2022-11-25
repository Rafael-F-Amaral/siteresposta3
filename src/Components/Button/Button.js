import React from 'react'
import '../Button/Button.css'

const Button = (props) => {
  return (

    
    <button className='Button'>
        {props.ButtonDownload}
        {props.ButtonGrupos}
        {props.ButtonDatas}
        {props.ButtonRespostas}
    </button>
  )
}

export default Button