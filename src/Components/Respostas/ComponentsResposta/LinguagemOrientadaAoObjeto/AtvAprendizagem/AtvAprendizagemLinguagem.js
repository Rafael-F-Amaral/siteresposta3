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
              nomemateria='Linguagem Orientada a Objetvo (APP)'
            />
            </h2>
          </div>
          <div>
            <div>

              <div className='ContentButton'>
                <ul>
                  
                  <NavLink to='linguagemapp1/questao1aprendizagemlinguagem'>
                    <li>
                      <ButtonResposta
                        adg='aap 1'
                      />
                    </li>
                  </NavLink>

                  <Link to='linguagemapp2/questao1aprendizagemlinguagem2'>
                    <li><ButtonResposta
                      adg='aap 2'
                    />
                    </li>
                  </Link>


                  <Link to='linguagemapp3/questao1aprendizagemlinguagem3'>
                    <li><ButtonResposta
                      adg='aap 3'
                    />
                    </li>
                  </Link>

                  <Link to='linguagemapp4/questao1aprendizagemlinguagem4'>
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