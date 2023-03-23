import React from 'react';
import PopupWithForm from './PopupWithForm.js';

function AddPlacePopup({ isOpen, onClose, onAddPlace, isLoading }) {
  const nameElement = React.useRef();
  const linkElement = React.useRef();

  React.useEffect(() => {
    nameElement.current.value = '';
    linkElement.current.value = '';
  }, [isOpen]);

  function handleSubmitForm(e) {
    e.preventDefault();
    const newNameElement = nameElement.current.value;
    const newLinkElement = linkElement.current.value;
    onAddPlace({ name: newNameElement, link: newLinkElement });
  }

  return (
    <PopupWithForm
      title="Новое место"
      namePopup="popup-elements"
      nameForm="form-elements"
      valueSubmitButton={isLoading ? "Сохранение..." : "Сохранить"}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmitForm}
    >
      <fieldset className="form-elements__input-container">
        <input
          type="text"
          className="popup__input form-elements__item form-elements__item_el_name"
          id="nameElement"
          name="nameElement"
          placeholder="Название"
          required
          minLength="2"
          maxLength="30"
          ref={nameElement}
        />
        <span id="nameElement-error" className="error"></span>
        <input
          type="url"
          className="popup__input form-elements__item form-elements__item_el_link"
          id="linkElement"
          name="linkElement"
          placeholder="Ссылка на картинку"
          required
          ref={linkElement}
        />
        <span id="linkElement-error" className="error"></span>
      </fieldset>
    </PopupWithForm>
  )
}

export default AddPlacePopup;