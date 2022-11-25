import React from 'react'
import AlternativasProps from '../AlternativasProps'
import RespostasDATA from '../../../../../ArraysRespostas/EdDesignThink/AvVirtual/Av1/Questao1DATA'


const Questao1Analise = () => {
    return (
        <div>
            {RespostasDATA.map(({ item, id, index, titulo, questaonumero, enunciado, alternativas, questao1, questao2, questao3, questao4, questao5 }) => (
                <div className='ContentQuestoes'>
                    <div>
                        <div className='ContentResposta'>

                            <div
                                className='RespostaCenter'>


                                <h3 key={id}>{titulo}</h3>

                                <h2>{questaonumero}</h2>
                            </div>
                            <p key={id}>
                                {enunciado}
                            </p>

                            <div >
                                <h2 key={id}>Alternativas</h2>
                            </div>
                            <ul className='ContentAlternativas'>
                                <li>
                                    <AlternativasProps
                                        key={id}
                                        questao1={questao1}
                                    />
                                </li>
                                <li><AlternativasProps
                                    questao2={questao2}
                                />
                                </li>

                                <li><AlternativasProps
                                    questao3={questao3}
                                />
                                </li>

                                <li><AlternativasProps
                                    questao4={questao4}
                                />
                                </li>

                                <li><AlternativasProps
                                    questao5={questao5}
                                />
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            ))}

        </div>
    )
}

export default Questao1Analise