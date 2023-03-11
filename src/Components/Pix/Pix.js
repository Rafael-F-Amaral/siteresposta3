import React from 'react'
import './Pix.css'
import PixImage from '../imagensSITE/qrcodepix.png'
import ButtonTeste from './ButtonTeste'
import { Outlet } from 'react-router-dom'

const Pix = () => {
  return (
    <div className='ContainerPix'>
      <h1>AJUDE O SITE!</h1>
      <div className='ContentPix'>
        <div>
          <div>
            <div className='ContentP'>
              <p>A todos que ajudarem! Muito obrigado! Vocês são o pilar da comunidade. Qualquer valor é muito importante e todos terão um lugar no meu coração!</p>
            </div>
            <div>
              <img className='imagePix'
                src={PixImage}
              />
            </div>
            <div className='ContentButtonPix'>
              <h3>CHAVE ALEATÓRIA</h3>
              <div>
                <ButtonTeste />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

}

export default Pix