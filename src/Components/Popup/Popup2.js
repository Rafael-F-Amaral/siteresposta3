import React from 'react';

function Popup(props) {
  return (
    <div className="popup">
      <div className="popup-inner">
        <button className="close-btn" onClick={props.closePopup}>X</button>
        {props.children}
      </div>
    </div>
  );
}

export default Popup;
