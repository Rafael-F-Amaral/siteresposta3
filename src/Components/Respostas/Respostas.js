import React from 'react'
import SideBarMenu from '../../Components/Respostas/ComponentsResposta/SidebarMenu/SidebarMenu'
import ScrollBarMenu from '../../Components/Respostas/ComponentsResposta/SidebarMenu/ScrollBarMenu'
import { Outlet } from 'react-router-dom'

const Respostas = (props) => {
  return (
    <div className='ContainerRespostas'>

      <div>
        <SideBarMenu />
        <div className='ScrollBar2'>
          <ScrollBarMenu />
        </div>
        <Outlet />
      </div>




    </div >

  );
}

export default Respostas