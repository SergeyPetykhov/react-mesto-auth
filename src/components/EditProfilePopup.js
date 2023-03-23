import React from 'react';
import PopupWithForm from './PopupWithForm.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

function EditProfilePopup({ isOpen, onClose, onUpdateUser, isLoading }) {
  const currentUser = React.useContext(CurrentUserContext);
  const [name, setName] = React.useState('');
  const [about, setAbout] = React.useState('');

  React.useEffect(() => {
    setName(currentUser.name);
    setAbout(currentUser.about);
  }, [isOpen, currentUser]);

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeAbout(e) {
    setAbout(e.target.value);
  }

  function handleSubmitForm(e) {
    e.preventDefault();
    onUpdateUser({name, about});
  }

  return (
    <PopupWithForm
      title="Редактировать профиль"
      namePopup="popup-profile"
      nameForm="form-profile"
      valueSubmitButton={isLoading ? "Сохранение..." : "Сохранить"}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmitForm}
    >
      <fieldset className="form-profile__input-container">
        <input
          type="text"
          className="popup__input form-profile__item form-profile__item_el_name"
          id="name"
          name="name"
          placeholder="Ваше имя"
          required
          minLength="2"
          maxLength="40"
          value={name || ''}
          onChange={handleChangeName} />
        <span id="name-error" className="error"></span>
        <input type="text"
          className="popup__input form-profile__item form-profile__item_el_activity"
          id="activity"
          name="activity"
          placeholder="О себе"
          required
          minLength="2"
          maxLength="200"
          value={about || ''}
          onChange={handleChangeAbout} />
        <span id="activity-error" className="error"></span>
      </fieldset>
    </PopupWithForm>
  )
}

export default EditProfilePopup;