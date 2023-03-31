import React from 'react';

function InfoTooltipPopup({ namePopup, title, isOpen, onClose, linkImg, altImg }) {
  return (
    <div className={`popup ${namePopup} ${isOpen ? "popup_is-opened" : ""}`}>
      <div className={`${namePopup}__container`}>
        <button type="button" className={`popupClose-button ${namePopup}__close-button`} onClick={onClose}></button>
        <img className={`${namePopup}__img`}
            src={linkImg}
            alt={altImg}
          />
        <h2 className={`${namePopup}__title`}>{title}</h2>
      </div>
    </div>
  )
}

export default InfoTooltipPopup;