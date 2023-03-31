import React from 'react';
import InfoTooltipPopup from './InfoTooltipPopup.js';
import success from "../images/registration_success.png";


function RegistrationSuccessPopup({ isOpen, onClose }) {

  return (
    <InfoTooltipPopup
      title="Вы успешно зарегистрировались!"
      namePopup="popup-infoTooltip"
      linkImg={success}
      altImg="Успех"
      isOpen={isOpen}
      onClose={onClose}
    />
  )
}

export default RegistrationSuccessPopup;