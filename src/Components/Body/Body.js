import React from 'react'
import ImageH1 from './Image/ImageH1'
import Card from './Card/Card'
import './Card/Card.css'


const Body = () => {
  return (
    <div className='ContainerBody '>
      <div className='ImageH1 '>

        <ImageH1 />
      </div>

      <div className='wrapper'>

        <a className='CardStyle' href='https://linktr.ee/SiteResposta' target="_blank" rel="noreferrer">
          <Card
            download='DOWNLOADS DE LIVROS'
            textDownload='Aqui você encontrará download dos livros atuais e semestres passados, aulas, videoaulas e documentos gerais sobre programação.'
            ButtonDownload='downloads'
          />
        </a>

        <a className='CardStyle' href='https://linktr.ee/grupossiteresposta' target='_blank' rel="noreferrer" style={{ textDecoration: 'none !important' }}>
          <Card
            download='GRUPOS E REDES SOCIAIS'
            textDownload='Aqui você encontrará download dos livros atuais e semestres passados, aulas, videoaulas e documentos gerais sobre programação.'
            ButtonGrupos='grupos'
          />
        </a>


        <a className='CardStyle' href='https://linktr.ee/SiteResposta' target='_blank' rel="noreferrer" style={{ textDecoration: 'none !important' }}>
          <Card
            download='DATAS LETIVAS 3º SEMESTRE'
            textDownload='Aqui você encontrará download dos livros atuais e semestres passados, aulas, videoaulas e documentos gerais sobre programação.'
            ButtonDatas='datas'
          />
        </a>
      </div>
    </div >
  )
}

export default Body