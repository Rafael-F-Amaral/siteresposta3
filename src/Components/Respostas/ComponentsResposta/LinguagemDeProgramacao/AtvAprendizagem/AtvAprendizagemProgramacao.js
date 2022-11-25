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

          <div className='teste'>
            <h2><AlternativasProps
              nomemateria='Linguagem de Programação (APP)'
            />
            </h2>
          </div>
          <div>
            <div>

              <div className='ContentButton'>
                <ul>
                  
                  <NavLink to='programacaoapp1/questao1aprendizagemprogramacao'>
                    <li>
                      <ButtonResposta
                        adg='aap 1'
                      />
                    </li>
                  </NavLink>

                  <Link to='programacaoapp2/questao1aprendizagemprogramacao2'>
                    <li><ButtonResposta
                      adg='aap 2'
                    />
                    </li>
                  </Link>


                  <Link to='programacaoapp3/questao1aprendizagemprogramacao3'>
                    <li><ButtonResposta
                      adg='aap 3'
                    />
                    </li>
                  </Link>

                  <Link to='programacaoapp4/questao1aprendizagemprogramacao4'>
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