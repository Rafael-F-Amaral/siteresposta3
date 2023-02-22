import React, { useState } from 'react';
import Popup from './Popup2';
import './Popup.css';
import { Link } from 'react-router-dom';

function App() {
    const [showPopup, setShowPopup] = useState(true);

    function handleClosePopup() {
        setShowPopup(false);
    }

    return (
        <div className="App">
            {showPopup && (
                <Popup closePopup={handleClosePopup}>
                    <h2> Informativo Site Respostas! </h2>
                    <p><span style={{ textDecoration: 'underline', fontWeight: '600' }}>Respostas OPTATIVA 3° SEMESTRE!</span>
                    </p>

                    <p><span style={{ fontWeight: '700' }}>AV1 EMPREENDEDORISMO</span><br />
                        1.E, 2.E, 3.C, 4.E, 5.B<br />

                        <span style={{ fontWeight: '700' }}>AV2 EMPREENDEDORISMO</span><br />
                        1.A, 2.D, 3.E, 4.C, 5.B
                    </p>
                    <p style={{ fontSize: '20px' }}><a href='https://drive.google.com/drive/folders/1yveFhBzFudJT7hqBqsuJwANE04Ia_uln?usp=share_link' target="_blank" rel="noopener noreferrer">DOWNLOAD MODELO PROJETO INTEGRADO!</a></p>


                    <p>
                        <span style={{fontSize: '18px', color:'tomato'}}>
                            Se quiser e puder ajudar o site a continuar a dar suport<br /> considere fazer uma doação.
                            clicando em <a href='https://siterespostas.com.br/pix'>Meu Pix</a>!
                        </span>
                    </p>
                </Popup>

            )}

        </div>
    );
}

export default App;
