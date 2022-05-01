import React from "react";

function Main({onEditProfile, onAddPlace, onEditAvatar}) {

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__account">
          <div className="profile__avatar-container">
            <img
              className="profile__avatar"
              alt="аватар"
              src="<%=require('./images/profile__photo.jpg')%>"
            />
            <button type="button" className="profile__avatar-edit-btn" onClick={onEditAvatar}></button>
          </div>
          <div className="profile__info">
            <div className="profile__name-box">
              <h1 className="profile__name">Жак-Ив Кусто</h1>
              <button
                aria-label="изменить профиль"
                className="profile__edit-button"
                type="button"
                onClick={onEditProfile}
              ></button>
            </div>
            <p className="profile__description">Исследователь океана</p>
          </div>
        </div>
        <button
          aria-label="добавить фото"
          className="profile__add-button"
          type="button"
          onClick={onAddPlace}
        ></button>
      </section>
      <section className="elements"></section>
    </main>
  );
}

export default Main;
