import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import ButtonResposta from '../../../ButtonResposta'
import AlternativasProps from './AlternativasProps'
import SideBarMenu from '../../SidebarMenu/SidebarMenu'

const AtvAprendizagem = (props) => {
  return (
    <div className='ContainerRespostas' >
      <div>
        <section className='GridResposta'>

          <div className='teste'>
            <h2>
              <AlternativasProps
                nomemateria='Linguagem de Programação (ADG)'
              />
            </h2>
          </div>
          <div>
            <div>

              <div className='ContentButton'>
                <ul>

                  <NavLink to='adg1diagnosticprogramacao/questao1diagnosticprogramacao'>
                    <li>
                      <ButtonResposta
                        adg='adg 1'
                      />
                    </li>
                  </NavLink>

                  <Link to='adg2diagnosticprogramacao2/questao1diagnosticprogramacao2'>
                    <li><ButtonResposta
                      adg='adg 2'
                    />
                    </li>
                  </Link>


                  <Link to='adg3diagnosticprogramacao3/questao1diagnosticprogramacao3'>
                    <li><ButtonResposta
                      adg='adg 3'
                    />
                    </li>
                  </Link>

                  <Link to='adg4diagnosticprogramacao4/questao1diagnosticprogramacao4'>
                    <li>
                      <ButtonResposta
                        adg='adg 4'
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