import React from 'react'
import '../pages/PagesCss/Download.css'
import download from '../image/download.png'
import AcordionDown from '../Components/AcordionDown'





const Download = () => {
  return (
    <div className='att'>
      <div className='word'>
        <div className='container-att'>
          <h1>Seção de downloads</h1>
          <img className='logodown' src={download} />
          <AcordionDown />

        </div>
      </div>
    </div>
  )
}

export default Download