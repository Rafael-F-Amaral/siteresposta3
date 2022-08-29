import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import ADG from '../Components/abasRespostas/TabsLogica';
import Algoritmo from '../image/algoritmo.png'
import AnaliseSistema from '../image/analiseSistemas.png'
import EngenhariaSoftware from '../image/EngenhariaSoftware.png'
import LogicaComputacional from '../image/logicaComputacional.png'
import MindSet from '../image/mindset.png'
import Modelagem from '../image/modelagemDados.png'


const AcordionResp = () => {
    return (
        <div >
            <Accordion defaultActiveKey={['0']} alwaysOpen >
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Respostas ADS 2 Semestre</Accordion.Header>
                    <Accordion.Body>

                        <Accordion>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header> <img className='DownNuvem' src={LogicaComputacional} />  Lógica Computacional</Accordion.Header>
                                <Accordion.Body>

                                    <Accordion>
                                        <Accordion.Item eventKey="2">
                                            <Accordion.Header>Atividade Diagnóstica (ADG)</Accordion.Header>
                                            <Accordion.Body>

                                                <ADG />

                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header>Atividade de Aprendizagem (AAP)</Accordion.Header>
                                            <Accordion.Body>

                                                AAP

                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="1">
                                            <Accordion.Header>Avaliação Virtual (AV)</Accordion.Header>
                                            <Accordion.Body>


                                                AV

                                            </Accordion.Body>
                                        </Accordion.Item>

                                    </Accordion>


                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="5">
                                <Accordion.Header>  <img className='DownNuvem' src={Algoritmo} /> Algoritmos e Programação Estruturada</Accordion.Header>
                                <Accordion.Body>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>

                        <Accordion>
                            <Accordion.Item eventKey="6">
                                <Accordion.Header><img className='DownNuvem' src={AnaliseSistema} />Análise e Modelagem de Sistemas</Accordion.Header>
                                <Accordion.Body>




                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="7">
                                <Accordion.Header><img className='DownNuvem' src={EngenhariaSoftware} />Engenharia de Software</Accordion.Header>
                                <Accordion.Body>

                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>

                        <Accordion>
                            <Accordion.Item eventKey="8">
                                <Accordion.Header><img className='DownNuvem' src={Modelagem} />Modelagem de Dados</Accordion.Header>
                                <Accordion.Body>




                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="9">
                                <Accordion.Header><img className='DownNuvem' src={MindSet} />Ed - Mindset Ágil</Accordion.Header>
                                <Accordion.Body>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>



                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    )
}

export default AcordionResp