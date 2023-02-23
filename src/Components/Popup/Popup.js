import React, { useState, useRef } from 'react';
import Popup from './Popup2';
import './Popup.css';
import { Link } from 'react-router-dom';
import DOC from '../Popup/modelo-projeto-integrado.doc'


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
                    <h2> Informativo Site Respostas! </h2>
                    <p><span style={{ textDecoration: 'underline', fontWeight: '600' }}>Respostas OPTATIVA 3° SEMESTRE!</span>
                    </p>

                    <p><span style={{ fontWeight: '700' }}>AV1 EMPREENDEDORISMO</span><br />
                        1.E, 2.E, 3.C, 4.E, 5.B<br />

                        <span style={{ fontWeight: '700' }}>AV2 EMPREENDEDORISMO</span><br />
                        1.A, 2.D, 3.E, 4.C, 5.B
                    </p>
                    <p style={{ fontSize: '20px' }}><a href={DOC} target="_blank" rel="noopener noreferrer" onClick={handleLinkClick}>DOWNLOAD MODELO PROJETO INTEGRADO!</a></p>


                    <p>
                        <span style={{fontSize: '18px', color:'tomato'}}>
                            Considere ajudar o site fazendo uma doação PIX!<br />
                            localizado abaixo do botão RESPOSTAS!!
                        </span>
                    </p>
                </Popup>
            )}
        </div>
    );
}

export default App;
