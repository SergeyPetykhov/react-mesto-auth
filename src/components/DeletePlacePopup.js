import React from 'react';
import PopupWithForm from './PopupWithForm.js';

function DeletePlacePopup({ isOpen, onClose, onCardDeleteSubmitButtonClick, isLoading }) {

  function handleSubmitForm(e) {
    e.preventDefault();
    onCardDeleteSubmitButtonClick();
  }

  return (
    <PopupWithForm
      title="Вы уверены?"
      namePopup="popup-delete-elements"
      nameForm="form-delete-elements"
      valueSubmitButton={isLoading ? "Удаление..." : "Да"}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmitForm}
    />
  )
}

export default DeletePlacePopup;