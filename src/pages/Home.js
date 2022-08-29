import React from 'react'
import '../pages/PagesCss/Home.css'

import { Link } from 'react-router-dom'


const Home = () => {
    return (

        <div className='home'>
            <h1>
                Bem-vindo ao site resposta!
            </h1>
            <h2>
                SEGUNDO SEMESTRE
            </h2>
            <div className='container'>
                <p>O site passou por atualizações em sua estrutura interna, para assim, tornar o acesso as informações do curso mais rápidas, otimizadas e com menos burocracia.</p>
                <p>Se você ainda quiser me ajudar doando qualquer valor </p>
                
            </div>
            <Link to='/Pix'>home</Link>
        </div>

    )
}

export default Home