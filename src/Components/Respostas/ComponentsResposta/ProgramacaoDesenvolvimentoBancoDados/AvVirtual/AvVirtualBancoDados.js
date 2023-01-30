import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import ButtonResposta from '../../../ButtonRespostaAv'
import RespostasDATA from '../../../../ArraysRespostas/AnáliseOrientadaAoObjetoDATA/AvVirtual/Av2/Questao1DATA'

const AvVirtualAnalise = (props) => {
  return (
    <div className='ContainerRespostas' >
      {RespostasDATA.map(({ item, id, index, titulo, questaonumero, enunciado, alternativas, questao1, questao2, questao3, questao4, questao5 }) => (
        <div>
          <section className='GridResposta'>

            <div className='teste'  style={{marginBottom:'50px'}}>
              <h2>
                Programação e Desenvolvimento <br /> de Banco de Dados (APP)
              </h2>
            </div>
            <div>
              <div>

                <div className='ContentButton2'>
                  <ul>

                    <NavLink to='av1bancodadosvirtual2/questao1virtualbancodados'>
                      <li>
                        <ButtonResposta
                          adg='av 1'
                        />
                      </li>
                    </NavLink>

                    <Link to='av2bancodadosvirtual2/questao1virtualbancodados2'>
                      <li><ButtonResposta
                        adg='av 2'
                      />
                      </li>
                    </Link>




                  </ul>
                  <Outlet />
                </div>
              </div>
            </div >
          </section >
        </div >
      ))}
    </div >

  )
}


export default AvVirtualAnalise