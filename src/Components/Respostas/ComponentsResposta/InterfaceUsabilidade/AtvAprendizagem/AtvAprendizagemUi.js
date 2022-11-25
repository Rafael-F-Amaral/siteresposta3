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
              nomemateria='Interface e Usabilidade (APP)'
            />
            </h2>
          </div>
          <div>
            <div>

              <div className='ContentButton'>
                <ul>
                  
                  <NavLink to='uiapp1/questao1aprendizagemui'>
                    <li>
                      <ButtonResposta
                        adg='aap 1'
                      />
                    </li>
                  </NavLink>

                  <Link to='uiapp2/questao1aprendizagemui2'>
                    <li><ButtonResposta
                      adg='aap 2'
                    />
                    </li>
                  </Link>


                  <Link to='uiapp3/questao1aprendizagemui3'>
                    <li><ButtonResposta
                      adg='aap 3'
                    />
                    </li>
                  </Link>

                  <Link to='uiapp4/questao1aprendizagemui4'>
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