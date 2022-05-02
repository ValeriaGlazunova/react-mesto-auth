import React, { useState } from "react";
import { api } from "../utils/Api";

function Main({onEditProfile, onAddPlace, onEditAvatar}) {

  let [userName, setUserName] = useState();
  let [userDescription, setUserDescription] = useState();
  let [userAvatar, setUserAvatar] = useState();
  let [cards, setCards] = useState([]);

  api.getProfile()
  .then((res) => {
    setUserName(res.name)
    setUserAvatar(res.avatar)
    setUserDescription(res.about)
  })
  .catch(err => {
    console.log(err)
  });

  api.getInitialCards()
  .then((res) => {
    setCards(res)
    console.log(res, 'res')
  })
  .catch(err => {
    console.log(err)
  });

  return (
    
    <main className="content">
      <section className="profile">
        <div className="profile__account">
          <div className="profile__avatar-container">
            <div
              className="profile__avatar"
              alt="аватар"
              style={{ backgroundImage: `url(${userAvatar})` }}></div>
            
            <button type="button" className="profile__avatar-edit-btn" onClick={onEditAvatar}></button>
          </div>
          <div className="profile__info">
            <div className="profile__name-box">
              <h1 className="profile__name">{userName}</h1>
              <button
                aria-label="изменить профиль"
                className="profile__edit-button"
                type="button"
                onClick={onEditProfile}
              ></button>
            </div>
            <p className="profile__description">{userDescription}</p>
          </div>
        </div>
        <button
          aria-label="добавить фото"
          className="profile__add-button"
          type="button"
          onClick={onAddPlace}
        ></button>
      </section>s
      <section className="elements">
      { cards.map((res) =>
    <div className="element">
    <button
      className="element__trash-btn"
      aria-label="удалить"
      type="button"
    ></button>
    <img className="element__image" alt="карточка" key={res._id} src={res.link} />
    <div className="element__description">
      <h2 className="element__title" key={res._id}>{res.name}</h2>
      <div className="element__like-box">
      <button
        aria-label="лайк"
        className="element__like-btn"
        type="button"
      ></button>
      <span className="element__like-nmb">{res.likes.length} </span>
      </div>
    </div>
  </div>
  )}
      </section>
    </main>
  

  );
}

export default Main;
