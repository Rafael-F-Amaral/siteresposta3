import React from 'react'
import PixImage from '../imagensSITE/qrcodepix.png'
import { Outlet } from 'react-router-dom'
import Error from '../Error/erro.svg'

const Pix = () => {
  return (
    <div className='ContainerPix'>
      <div className='ContentPix'>
        <div>
          <div>
            
            <div>
              <img style={{maxWidth:'100vh'}}
                src={Error}
              />
            </div>

          </div>
        </div>
      </div>
    </div>
  )

}

export default Pix