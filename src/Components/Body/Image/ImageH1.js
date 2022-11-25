import React from 'react'
import './ImageH1.css'
import ImageHome from '../../imagensSITE/ImageHome.png'
import Button from '../../Button/Button'

const ImageH1 = () => {
    return (
        <section>
            <div className='ImageH1Container '>
                <section>
                    <h1>
                        Site colaborativo para o curso de desenvolvimento de sistemas
                    </h1>

                </section>
                
                <div>
                    <img
                        src={ImageHome}
                    />
                </div>
            </div>
        </section>
    )
}

export default ImageH1