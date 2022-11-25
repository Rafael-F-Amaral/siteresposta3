import React from 'react'
import { Link} from 'react-router-dom'
import '../Button/Button.css'

const Button = (props) => {
  return (

    <div>
      <Link to='resposta/atvaprendizagemanalise/analiseaap1/questao1analise'>
        <button className='ButtonMenu'>
          {props.ButtonRespostas}
        </button>
      </Link>

    </div >
  )
}

export default Button