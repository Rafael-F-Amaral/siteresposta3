import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'


const Footer = () => {
    const handleClick = (event) => {
        window.scrollTo(0, 0);
    };
    return (
        <footer className='ContainerFooter'>
            <div className='ContentFooter '>
                <div>
                    <h3>Ajude o site!</h3>
                    <p>Gosta do site? Acha que ele deveria receber mais reconhecimento?<p> Ajude o site com um pix. Qualquer valor é muito bem-vindo e de extrema importância para a continuidade do site.
                        <p>
                            Você pode acessar o PIX
                            <Link
                                to='pix'
                                onClick={handleClick}

                            >
                                <span style={{ color: "blue", fontWeight: "600" }}> clicando aqui</span>
                            </Link>.
                        </p></p></p>
                </div>
                <hr class="solid" />
                <div>
                    <h3>Acesso Rápido</h3>
                    <p className='A'>
                        <p>
                            <Link
                                onClick={handleClick}

                                className='teste' to='resposta/av1analisevirtual1/av1analisevirtual/questao1virtual'>Análise Orientada a Objetvo</Link><br /></p>

                        <p>
                            <Link
                                onClick={handleClick}

                                className='teste' to='resposta/av1linguagemvirtual1/av1linguagemvirtual2/questao1virtuallinguagem'>Linguagem Orientada a Objetvo</Link> <br /></p>

                        <p>
                            <Link
                                onClick={handleClick}

                                className='teste' to='resposta/av1bancodadosvirtual1/av1bancodadosvirtual2/questao1virtualbancodados'>Programação e Desenvolvimento de Banco de Dados</Link><br /></p>

                        <p>
                            <Link
                                onClick={handleClick}

                                className='teste' to='resposta/av1programacaovirtual1/av1programacaovirtual2/questao1virtualprogramacao'>Linguagem de Programação</Link><br /></p>

                        <p>
                            <Link
                                onClick={handleClick}

                                className='teste' to='resposta/av1uivirtual1/av1uivirtual2/questao1virtualui'>Interface e Usabilidade</Link><br /></p>

                        <p>
                            <Link
                                onClick={handleClick}

                                className='teste' to='resposta/av1designvirtual1/av1designvirtual2/questao1virtualdesign'> Ed - Design Think</Link><br /></p>


                    </p>
                </div>
                <hr class="solid" />
                <div>
                    <h3>Contato</h3>
                    <p>Se você quiser entrar em contato por qualquer motivo, sejam eles: Elogio, críticas, dúvidas ou sugestões, você pode mandar um email para: <span style={{ color: "red", fontWeight: "600" }}>rafaelbmo@live.com</span> com o assunto “SITE RESPOSTA”.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer