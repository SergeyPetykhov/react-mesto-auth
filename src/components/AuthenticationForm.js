import React from 'react';

function AuthenticationForm({ name, title, email, password, handleSubmitForm, handleChangeEmail, handleChangePassword, valueSubmitButton, children }) {
  return (
    <div className={`${name}`}>
      <div className={`${name}__container`}>
        <h2 className={`${name}__title`}>{title}</h2>
        <form
          className={`form-${name} ${name}__form`}
          name={`form-${name}`}
          onSubmit={handleSubmitForm}
        >
          <fieldset className={`form-${name}__input-container`}>
            <input
              type="email"
              className={`form-${name}__item form-${name}__item_el_name`}
              id="email"
              name="email"
              placeholder="Email"
              required
              minLength="5"
              maxLength="100"
              value={email || ''}
              onChange={handleChangeEmail} />
            <span id="name-error" className="error"></span>
            <input type="password"
              className={`form-${name}__item form-${name}__item_el_activity`}
              id="password"
              name="password"
              placeholder="Пароль"
              required
              minLength="5"
              maxLength="30"
              value={password || ''}
              onChange={handleChangePassword} />
            <span id="activity-error" className="error"></span>
          </fieldset>
          <input type="submit" className={`${name}__save-button`}
            value={valueSubmitButton} />
        </form>
        {children}
      </div>
    </div>
  )
}

export default AuthenticationForm;

