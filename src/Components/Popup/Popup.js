import React, { useState, useRef } from 'react';
import Popup from './Popup2';
import './Popup.css';
import DOC from '../Popup/modelo-projeto-integrado.doc'
import Propaganda from './propaganda-bruno.jpeg'
import Alerta from './alerta.png'


function App() {
    const [showPopup, setShowPopup] = useState(true);
    const popupRef = useRef();

    function handleClosePopup() {
        setShowPopup(false);
    }

    function handleClickOutside(event) {
        if (popupRef.current && !popupRef.current.contains(event.target)) {
            setShowPopup(false);
        }
    }

    function handleLinkClick() {
        setShowPopup(false);
    }

    // adiciona um listener para o evento click no document
    // e chama a função handleClickOutside quando ocorre
    // fora da janela do popup
    React.useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <div className="App">
            {showPopup && (
                <Popup ref={popupRef} closePopup={handleClosePopup}>
                    <div
                        className='Aviso'>

                        <p>
                            Não consegue ler? Toque na imagem para ampliar
                        </p>
                    </div>

                    <div className="popup-image">
                        <a href="https://i.imgur.com/IWZ5SVP.jpg" target="_blank">
                            <img src={Propaganda} alt="Minha imagem" className="popup-image" />
                        </a>

                    </div>
                    <div
                        className='Aviso2'>

                        <a href="https://encurtador.com.br/zAQUX" target="_blank">
                            <p style={{ color: 'green', textDecoration: 'underline' }}>
                                GARANTIR AGORA MEU PROJETO INTEGRADO!!!
                            </p>
                        </a>
                    </div>

                    <p style={{ fontSize: '20px', textAlign: 'center' }}>
                        <a href={DOC} rel="noopener noreferrer" onClick={handleLinkClick}>
                            DOWNLOAD MODELO PROJETO INTEGRADO!
                        </a>
                    </p>


                    {/* 
                     <p>
                        <span style={{ fontSize: '18px', color: 'tomato' }}>
                            Considere ajudar o site fazendo uma doação PIX!<br />
                            localizado abaixo do botão RESPOSTAS!!!
                        </span>
                    </p>
                    */}


                </Popup>
            )}
        </div>

    );
}

export default App;
