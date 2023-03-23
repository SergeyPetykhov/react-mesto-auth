import React from 'react';

function PopupWithForm({ namePopup, nameForm, title, valueSubmitButton, isOpen, onClose, onSubmit, children }) {
  return (
    <div className={`popup ${namePopup} ${isOpen ? "popup_is-opened" : ""}`}>
      <div className={`${namePopup}__container`}>
        <button type="button" className={`popupClose-button ${namePopup}__close-button`} onClick={onClose}></button>
        <h2 className={`${namePopup}__title`}>{title}</h2>
        <form
          className={`popup__form ${nameForm} ${namePopup}__form`}
          name={`${nameForm}`}
          onSubmit={onSubmit}
        >
          {children}
          <input type="submit" className="popup__button-save popup__button-save_avalible popup-avatar__save-button"
            value={valueSubmitButton} />
        </form>
      </div>
    </div>
  )
}

export default PopupWithForm;