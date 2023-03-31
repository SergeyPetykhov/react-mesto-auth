import React from 'react';
import InfoTooltipPopup from './InfoTooltipPopup.js';
import failure from "../images/registration_failure.png";


function RegistrationFailurePopup({ isOpen, onClose }) {

  return (
    <InfoTooltipPopup
      title="Что-то пошло не так! Попробуйте ещё раз."
      namePopup="popup-infoTooltip"
      linkImg={failure}
      altImg="Ошибка"
      isOpen={isOpen}
      onClose={onClose}
    />
  )
}

export default RegistrationFailurePopup;