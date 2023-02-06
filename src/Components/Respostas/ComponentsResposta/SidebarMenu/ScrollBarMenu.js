import './SidebarMenu.css'
import React from 'react'
import { Link } from 'react-router-dom'
import '../../Respostas.css'

const SidebarMenu = (props) => {
    return (
        <div>
            <div>
                <section className='ContentMenu2' >
                    <h3 style={{ textAlign: 'center' }}>MENU</h3>
                    <div className='ScrollBar' >
                        <div >
                            <ul >
                                <div style={{ textAlign: 'center' }} >

                                    <h3>Análise Orientada a Objetvo</h3>
                                </div>

                                <div style={{
                                    padding: '10px 20px ', backgroundColor: '#E7E7FF'
                                }}>
                                    <li>

                                            Aprendizagem
                                    </li>
                                    <li>
                                            Diagnóstica
                                    </li>
                                    <li>
                                        <Link className='teste' to='av1analisevirtual1/av1analisevirtual/questao1virtual'>
                                            Av Virtual
                                        </Link>
                                    </li>
                                </div>
                            </ul>
                        </div>



                        <div>
                            <ul>
                                <div className='div1' style={{ textAlign: 'center' }}>
                                    <h3>Linguagem Orientada a Objetvo</h3></div>
                                <div style={{ padding: '10px 20px ', backgroundColor: '#E7E7FF' }}>
                                    <li>
                                            Aprendizagem
                                    </li>
                                    <li>
                                            Diagnóstica
                                    </li>
                                    <li>
                                        <Link className='teste' to='av1linguagemvirtual1/av1linguagemvirtual2/questao1virtuallinguagem'>
                                            Av Virtual
                                        </Link>
                                    </li>
                                </div>
                            </ul>
                        </div>


                        <div >
                            <ul >
                                <div className='div1' style={{ textAlign: 'center' }}>
                                    <h3>Prog. e Desenv. de Banco de Dados</h3></div>
                                <div style={{ padding: '10px 20px ', backgroundColor: '#E7E7FF' }}>
                                    <li>
                                            Aprendizagem
                                    </li>
                                    <li>
                                            Diagnóstica
                                    </li>
                                    <li>
                                        <Link className='teste' to='av1bancodadosvirtual1/av1bancodadosvirtual2/questao1virtualbancodados'>
                                            Av Virtual
                                        </Link>
                                    </li>
                                </div>
                            </ul>
                        </div>


                        <div>
                            <ul>
                                <div className='div1' style={{ textAlign: 'center' }}>
                                    <h3>Linguagem de Programação</h3></div>
                                <div style={{ padding: '10px 20px ', backgroundColor: '#E7E7FF' }}>
                                    <li>

                                            Aprendizagem

                                    </li>
                                    <li>
                                            Diagnóstica
                                    </li>
                                    <li>
                                        <Link className='teste' to='av1programacaovirtual1/av1programacaovirtual2/questao1virtualprogramacao'>

                                            Av Virtual
                                        </Link>

                                    </li>
                                </div>
                            </ul>
                        </div>

                        <div>
                            <ul>
                                <div className='div1' style={{ textAlign: 'center' }}>
                                    <h3>Interface e Usabilidade</h3></div>
                                <div style={{ padding: '10px 20px ', backgroundColor: '#E7E7FF' }}>
                                    <li>

                                            Aprendizagem

                                    </li>
                                    <li>
                                            Diagnóstica
                                    </li>
                                    <li>
                                        <Link className='teste' to='av1uivirtual1/av1uivirtual2/questao1virtualui'>

                                            Av Virtual
                                        </Link>

                                    </li>
                                </div>
                            </ul>
                        </div>

                        <div>
                            <ul>
                                <div className='div1' style={{ textAlign: 'center' }}>
                                    <h3 >Educação Digital - Design Think</h3></div>
                                <div style={{ padding: '10px 20px ', backgroundColor: '#E7E7FF' }}>
                                    <li>

                                            Aprendizagem

                                    </li>
                                    <li>
                                            Diagnóstica
                                    </li>
                                    <li>
                                        <Link className='teste' to='av1designvirtual1/av1designvirtual2/questao1virtualdesign'>

                                            Av Virtual
                                        </Link>

                                    </li>
                                </div>
                            </ul>
                        </div>
                    </div>



                </section>
            </div >
        </div >
    )
}

export default SidebarMenu