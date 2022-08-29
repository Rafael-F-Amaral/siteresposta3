import React from 'react'
import '../pages/PagesCss/Pix.css'

import pix from '../image/logopix.png'
import coracao from '../image/coracao.png'
import qrpix from '../image/qrcodepix.jpg'



const Pix = () => {
    return (        
        <div className='pix'>
            <div className='word'>
                <div className='container-pix'>
                    <h1><img className='logopix' src={pix} />Pix Site Respostas</h1>
                    <p>A todos que queiram me ajudar <span className='red-span'>MEU MUITO OBRIGADO! <img className='logocor' src={coracao} /> </span>
                        Através do seu incentivo eu pude melhorar e manter o custeio do site.
                        <p>Também pude assinar e manter um domínimo .com.br e assim ajudar outros alunos e acharem o site de uma forma mais fácil.</p>

                        <p>Abaixo meu  PIX em QRCODE e em chave aleatória.
                        </p></p>
                    <p><span className='red-span'>Chave Aleatória: </span>5f4001b8-82a7-4ab7-9399-b9de9186d3ab</p>
                    <p className='qrpix'><img className='qrpix' src={qrpix} /></p>

                </div>
            </div>
        </div>
    )
}

export default Pix