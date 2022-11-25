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
              nomemateria='Ed - Design Think (APP)'
            />
            </h2>
          </div>
          <div>
            <div>

              <div className='ContentButton'>
                <ul>
                  
                  <NavLink to='designapp1/questao1aprendizagemdesign'>
                    <li>
                      <ButtonResposta
                        adg='aap 1'
                      />
                    </li>
                  </NavLink>

                  <Link to='designapp2/questao1aprendizagemdesign2'>
                    <li><ButtonResposta
                      adg='aap 2'
                    />
                    </li>
                  </Link>


                  <Link to='designapp3/questao1aprendizagemdesign3'>
                    <li><ButtonResposta
                      adg='aap 3'
                    />
                    </li>
                  </Link>

                  <Link to='designapp4/questao1aprendizagemdesign4'>
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