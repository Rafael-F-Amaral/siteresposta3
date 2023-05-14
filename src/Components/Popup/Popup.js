import React, { useState, useRef } from 'react';
import Popup from './Popup2';
import './Popup.css';
import DOC from '../Popup/modelo-projeto-integrado.doc';
import Propaganda from './propaganda-bruno.jpeg';
import Alerta from './alerta.png';


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

          <div className="popup-image">
<h1><span style={{color:'red', textDecoration:'underline'}}>ATENÇÃO:</span> DEVIDO AO VENCIMENTO<br /> DO DOMÍNIO .COM.BR <br /> O SITE MIGRARÁ PARA:<br /> <a>https://siterespostas3.netlify.app/</a>  <br /><span style={{color:'red', textDecoration:'underline'}}>a partir do dia 29/05</span> </h1>
          </div>

          {/*
          <p style={{ fontSize: '20px', textAlign: 'center' }}>
            <a href={DOC} rel="noopener noreferrer" onClick={handleLinkClick}>
              DOWNLOAD MODELO PROJETO INTEGRADO!
            </a>
          </p>
          */}
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
