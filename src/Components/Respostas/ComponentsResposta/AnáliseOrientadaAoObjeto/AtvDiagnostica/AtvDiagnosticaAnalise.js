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
                nomemateria='Análise Orientada a Objeto (ADG)'
              />
            </h2>
          </div>
          <div>
            <div>

              <div className='ContentButton'>
                <ul>

                  <NavLink to='adg1analisediagnostic/questao1diagnostic'>
                    <li>
                      <ButtonResposta
                        adg='adg 1'
                      />
                    </li>
                  </NavLink>

                  <Link to='adg2analisediagnostic2/questao1diagnostic2'>
                    <li><ButtonResposta
                      adg='adg 2'
                    />
                    </li>
                  </Link>


                  <Link to='adg3analisediagnostic3/questao1diagnostic3'>
                    <li><ButtonResposta
                      adg='adg 3'
                    />
                    </li>
                  </Link>

                  <Link to='adg4analisediagnostic4/questao1diagnostic4'>
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