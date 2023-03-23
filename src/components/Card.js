import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

function Card({ card, onCardClick, onCardLikeClick, onCardDeleteButtonClick }) {
  const currentUser = React.useContext(CurrentUserContext);
  const isOwn = card.owner._id === currentUser._id;
  const isLiked = card.likes.some(i => i._id === currentUser._id);

  const cardLikeButtonClassName = (
    `elements__like-button ${isLiked && 'elements__like-button_active'}`
  );;

  function handleImgClick() {
    onCardClick(card);
  }

  function handleLikeClick() {
    onCardLikeClick(card);
  }

  function handleDeleteClick() {
    onCardDeleteButtonClick(card);
  }


  return (
    <li className="elements__list-item">
      {isOwn && <button
        type="button"
        className="elements__delete-button"
        aria-label="Удалить"
        onClick={handleDeleteClick}
        >
      </button>}
      <img className="elements__image"
        alt={card.name}
        src={card.link}
        onClick={handleImgClick}
      />
      <div className="elements__group">
        <h2 className="elements__name">{card.name}</h2>
        <div>
          <button type="button"
            className={cardLikeButtonClassName}
            aria-label="Лайк"
            onClick={handleLikeClick}
          >
          </button>
          <p className="elements__like-counter">{card.likes.length}</p>
        </div>
      </div>
    </li>
  )
}

export default Card;