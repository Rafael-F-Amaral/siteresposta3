import React from 'react'
import ImageH1 from './Image/ImageH1'
import Card from './Card/Card'
import Button from '../Button/Button'
import './Card/Card.css'
import Respostas from '../Respostas/Respostas'

const Body = () => {
  return (
    <div  className='ContainerBody'>
      <div className='ImageH1'>
        <ImageH1 />
      </div>

      <div className='wrapper'>
        <Card
          download='DOWNLOADS GERAIS'
          textDownload='Aqui você encontrará download dos livros atuais e semestres passados, aulas, videoaulas e documentos gerais sobre programação.'
          ButtonDownload='downloads'
        />

        <Card
          download='GRUPOS E REDES SOCIAIS'
          textDownload='Aqui você encontrará download dos livros atuais e semestres passados, aulas, videoaulas e documentos gerais sobre programação.'
          ButtonGrupos='grupos'
        />
        <Card
          download='DATAS LETIVAS 3º SEMESTRE'
          textDownload='Aqui você encontrará download dos livros atuais e semestres passados, aulas, videoaulas e documentos gerais sobre programação.'
          ButtonDatas='datas'
        />
      </div>

    </div>
  )
}

export default Body