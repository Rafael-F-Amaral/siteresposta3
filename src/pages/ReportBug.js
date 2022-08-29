import React from 'react'
import '../pages/PagesCss/ReportBug.css'

import whats from '../image/whats.png'
import error from '../image/error.png'


const ReportBug = () => {
  return (
    <div className='pix'>
      <div className='word'>
        <div className='container-pix'>
          <h1>Como reportar um bug</h1>
          <img className='error' src={error} />
          <p>Caso você esteja enfrentando algum problema com qualquer link <br /> ou tenha encontrado algum erro de digitação, informação ou qualquer coisa que você considere errada, por gentileza, peço que entre em contato comigo.<br /> Você pode me mandar uma mensagem via whatsapp <a className='hyperlink' href='https://api.whatsapp.com/send?phone=5519984422767&text=Ol%C3%A1%2C%20encontrei%20um%20bug'target="_blank">clicando aqui. <img className='whats' src={whats}/> </a></p>

        </div>
      </div>
    </div>
  )
}

export default ReportBug