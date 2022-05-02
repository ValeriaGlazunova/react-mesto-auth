import React from "react";

function Card({ link, name, likes, onCardClick }) {
  function handleClick() {
    onCardClick({ link, name });
  }

  return (
    <div className="element">
      <button
        className="element__trash-btn"
        aria-label="удалить"
        type="button"
      ></button>
      <img
        className="element__image"
        alt="карточка"
        src={link}
        onClick={handleClick}
      />
      <div className="element__description">
        <h2 className="element__title">{name}</h2>
        <div className="element__like-box">
          <button
            aria-label="лайк"
            className="element__like-btn"
            type="button"
          ></button>
          <span className="element__like-nmb">{likes.length}</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
