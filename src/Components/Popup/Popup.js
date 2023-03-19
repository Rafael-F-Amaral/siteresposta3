import React, { useState, useRef } from 'react';
import Popup from './Popup2';
import './Popup.css';
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
                    <p style={{ fontSize: '20px' }}><a href={DOC}   rel="noopener noreferrer" onClick={handleLinkClick}>DOWNLOAD MODELO PROJETO INTEGRADO!</a></p>


                    <p>
                        <span style={{ fontSize: '18px', color: 'tomato' }}>
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
