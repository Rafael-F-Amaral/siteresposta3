import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import ButtonResposta from '../../../ButtonResposta'
import AlternativasProps from './AlternativasProps'
import SideBarMenu from '../../SidebarMenu/SidebarMenu'
import Aap1 from './Aap1/Aap1'







const AtvAprendizagem = () => {
  return (
    <div className='ContainerRespostas' >
      <div>
        <section className='GridResposta'>

          <div className='teste'  style={{marginBottom:'50px'}}>
            <h2>Programação e Desenvolvimento <br /> de Banco de Dados (APP)
            </h2>
          </div>
          <div>
            <div>

              <div className='ContentButton'>
                <ul>
                  
                  <NavLink to='bancodadosapp1/questao1aprendizagembancodados'>
                    <li>
                      <ButtonResposta
                        adg='aap 1'
                      />
                    </li>
                  </NavLink>

                  <Link to='bancodadosapp2/questao1aprendizagembancodados2'>
                    <li><ButtonResposta
                      adg='aap 2'
                    />
                    </li>
                  </Link>


                  <Link to='bancodadosapp3/questao1aprendizagembancodados3'>
                    <li><ButtonResposta
                      adg='aap 3'
                    />
                    </li>
                  </Link>

                  <Link to='bancodadosapp4/questao1aprendizagembancodados4'>
                    <li>
                      <ButtonResposta
                        adg='aap 4'
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
    </div >

  )
}

export default AtvAprendizagem