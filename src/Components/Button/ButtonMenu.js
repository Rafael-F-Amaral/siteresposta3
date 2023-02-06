import React from 'react'
import { Link} from 'react-router-dom'
import '../Button/Button.css'

const Button = (props) => {
  return (

    <div>
      <Link to='resposta/av1analisevirtual1/av1analisevirtual/questao1virtual'>
        <button className='ButtonMenu'>
          {props.ButtonRespostas}
        </button>
      </Link>

    </div >
  )
}

export default Button