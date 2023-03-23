import React from 'react';

function ImagePopup({ card, onClose }) {
  return (
    <div className={`popup popup-image ${card ? "popup_is-opened" : ""}`}>
      <div className="popup-image__container">
        <button type="button" className="popupClose-button popup-image__close-button" onClick={onClose}></button>
        <figure className="popup-image__figure">
          <img className="popup-image__img"
            src={card?.link}
            alt={card?.name}
          />
          <figcaption className="popup-image__figcaption">{card?.name}</figcaption>
        </figure>
      </div>
    </div>
  )
}

export default ImagePopup;