import React from 'react'
import '../pages/PagesCss/Atualizacao.css'
import update from '../image/update.png'
const Atualizacao = () => {
  return (
    <div className='att'>
      <div className='word'>
        <div className='container-att'>
          <h1>Atualizações recorrentes do site</h1>
          <img className='logoup' src={update} />
          <h1>Últimas respostas postadas</h1>
          <p>
            <lu className='resp'>
              <li>
                <span className='dataPost'>15/08:</span> AAP3 de Lógica Computacional está Disponível.
              </li>
              <li>
                <span className='dataPost'>11/08:</span> ADG2 e AAP2 de Algoritmos e Programação Estruturada está Disponível.
              </li>
              <li>
                <span className='dataPost'>09/08:</span> AAP1 e ADG1 de Algoritmos e Programação Estruturada está Disponível.
              </li>
              <li>
                <span className='dataPost'>09/08:</span> AAP2, ADG3 e AV2 de Lógica Computacional está disponível.
              </li>
              <li>
                <span className='dataPost'></span>
              </li>
              <li>
                <span className='dataPost'></span>
              </li>
            </lu>
          </p>
          <h1>Sobre Melhorias internas</h1>
          <p>O site passou por uma mudança interna completa, dentre elas estão:</p>
          <p>
            <lu>
              <li>Mudança de tecnologias do html e css básicos para react.js</li>
              <li>Adesão de Hooks. Uma maneira mais rápida e otimizada de navegar entre os links disponíveis no site.</li>
              <li>Facilidade para atualizações futuras do site, seja para adicionar novos conteúdos ou novas melhorias.</li>
            </lu></p>
          <h1>Sobre as respostas</h1>
          <p>Visando melhorar a experiência do usuário e a velocidade de navegação no site, as respostas não serão mais imagens. </p>
          <p>Além do carregamento do site ficar mais rápido, a adesão de textos no lugar das imagens possibilitará que o site fique melhor otimizado para o usuário final.</p>
          <h1>Sobre Atualizações gerais</h1>
          <p>Algumas adições e remoções pertinentes e pernamentes do site.</p>
          <p>
            <lu>
              <li>A seção de mensagens fixadas foi removida do site</li>
              <li>A seção de atualizações do site foi removida da home e agora pode ser consultada na seção de atualizações.</li>
              <li>A seção de cursos foi removida da aba de menus. Ela ainda estará disponível no antigo site do primeiro semestre. Link na seção downloads.</li>
            </lu>
          </p>

        </div>
      </div>
    </div>
  )
}

export default Atualizacao