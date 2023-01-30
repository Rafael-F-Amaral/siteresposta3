import React from 'react'

const Calendar = () => {
    return (
        <div className='ContainerPix'>
            <h2>Calendário de Atividades</h2>
            <div className='ContentPix'>
                <div>
                    <div>
                        <div className='ContentP2'>
                            <p>
                                <ul>
                                    <li>

                                    </li>

                                    <li>

                                    </li>

                                    <li>

                                    </li>

                                    <li>

                                    </li>

                                    <li>
                                        <span style={{ textDecoration: 'underline' }}>
                                            Fevereiro/2023
                                        </span>
                                        <lu>
                                            <li>
                                                <h4 style={{ fontWeight: '600' }}>Análise Orientado ao Objeto</h4>
                                            </li>
                                            <li>07 á 12 - Avaliação Virtual</li>

                                            <hr className='Divider' />


                                            <li>
                                                <h4 style={{ fontWeight: '600' }}>Banco de Dados</h4>
                                            </li>
                                            <li>06 - Abertura do 3° Semestre Letivo</li>
                                            <li>07 á 12 - Avaliação Virtual</li>
                                        </lu>
                                    </li>
                                    <hr className='Divider' />

                                    <li>
                                        <h4 style={{ fontWeight: '600' }}>Início do Semestre Letivo 2023</h4>
                                    </li>
                                    <li>06 - Abertura do 3° Semestre Letivo</li>



                                </ul>
                            </p>
                        </div>
                        <div>


                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Calendar