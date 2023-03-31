import React from 'react';
import errorImg from '../images/404.png'

function Error404() {
  return (
    <img
      style={{
        display: 'block',
        margin: '50px auto',
        width: '50%',
        height: '50%',
        borderRadius: '50%',
      }}
      src={`${errorImg}`}
      alt="Ошибка 404. Страница не найдена!" />
  )
}

export default Error404;