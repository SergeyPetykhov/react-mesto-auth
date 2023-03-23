import React from 'react';
import PopupWithForm from './PopupWithForm.js';

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar, isLoading }) {
  const linkAvatar = React.useRef();

  React.useEffect(() => {
    linkAvatar.current.value = '';
  }, [isOpen]);

  function handleSubmitForm(e) {
    e.preventDefault();
    const newLink = linkAvatar.current.value;
    onUpdateAvatar(newLink);
  }

  return (
    <PopupWithForm
      title="Обновить аватар"
      namePopup="popup-avatar"
      nameForm="form-avatar"
      valueSubmitButton={isLoading ? "Сохранение..." : "Сохранить"}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmitForm}
    >
      <fieldset className="form-avatar__input-container">
        <input type="url"
          className="popup__input form-avatar__item form-avatar__item_el_link"
          id="linkAvatar"
          name="linkAvatar"
          placeholder="Ссылка на аватар"
          required
          ref={linkAvatar}
        />
        <span id="linkAvatar-error" className="error"></span>
      </fieldset>
    </PopupWithForm>
  )
}

export default EditAvatarPopup;