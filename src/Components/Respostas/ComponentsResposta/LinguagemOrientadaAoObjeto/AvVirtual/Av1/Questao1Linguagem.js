import React from 'react'
import AlternativasProps from '../AlternativasProps'
import RespostasDATA from '../../../../../ArraysRespostas/LinguagemOrientadaAoObjetoDATA/AvVirtual/Av1/Questao1DATA'


const Questao1Analise = () => {
    return (
        <div>
            {RespostasDATA.map(({ item, id, index, titulo, questaonumero, enunciado, alternativas, questao1, questao2, questao3, questao4, questao5, correto1, correto2, correto3, correto4, correto5 }) => (
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
                                    <AlternativasProps
                                        correto1={correto1}
                                    />
                                </li>
                                <li><AlternativasProps
                                    questao2={questao2}
                                />
                                    <AlternativasProps
                                        correto1={correto2}
                                    />
                                </li>

                                <li><AlternativasProps
                                    questao3={questao3}
                                />
                                    <AlternativasProps
                                        correto1={correto3}
                                    />
                                </li>

                                <li><AlternativasProps
                                    questao4={questao4}
                                />
                                    <AlternativasProps
                                        correto1={correto4}
                                    />
                                </li>

                                <li><AlternativasProps
                                    questao5={questao5}
                                />
                                    <AlternativasProps
                                        correto1={correto5}
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