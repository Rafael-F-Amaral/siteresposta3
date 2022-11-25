import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import ButtonResposta from '../../../../ButtonRespostaAv'
import AlternativasProps from '../AlternativasProps'


const Aap2 = () => {
    return (
        <div>
            <div className='ContentButton'>
                <ul className='Av'>
                    <li>
                        <Link to='questao1virtuallinguagem'>
                            <ButtonResposta
                                questao='questão 1'
                            />
                        </Link>
                    </li>
                    <li>
                        <Link to='questao2virtuallinguagem'>
                            <ButtonResposta
                                questao='questão 2'

                            />
                        </Link>
                    </li>

                    <li>
                        <Link to='questao3virtuallinguagem'>
                            <ButtonResposta
                                questao='questão 3'

                            />
                        </Link>
                    </li>

                    <li>
                        <Link to='questao4virtuallinguagem'>
                            <ButtonResposta
                                questao='questão 4'
                            />
                        </Link>
                    </li>
                    <li>
                        <Link to='questao5virtuallinguagem'>
                            <ButtonResposta
                                questao='questão 5'
                            />
                        </Link>
                    </li>
                </ul>
            </div>
            <Outlet />
        </div >
    )
}

export default Aap2