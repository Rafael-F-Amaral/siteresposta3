import React from 'react'
import SideBarMenu from '../../Components/Respostas/ComponentsResposta/SidebarMenu/SidebarMenu'
import { Outlet } from 'react-router-dom'

const Respostas = (props) => {
  return (
    <div className='ContainerRespostas'>

      <div>
        <SideBarMenu />
        <Outlet />
      </div>




    </div >

  );
}

export default Respostas