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
                nomemateria='Interface e Usabilidade (ADG)'
              />
            </h2>
          </div>
          <div>
            <div>

              <div className='ContentButton'>
                <ul>

                  <NavLink to='adg1diagnosticui/questao1diagnosticui'>
                    <li>
                      <ButtonResposta
                        adg='adg 1'
                      />
                    </li>
                  </NavLink>

                  <Link to='adg2diagnosticui2/questao1diagnosticui2'>
                    <li><ButtonResposta
                      adg='adg 2'
                    />
                    </li>
                  </Link>


                  <Link to='adg3diagnosticui3/questao1diagnosticui3'>
                    <li><ButtonResposta
                      adg='adg 3'
                    />
                    </li>
                  </Link>

                  <Link to='adg4diagnosticui4/questao1diagnosticui4'>
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