import React from "react";

function Main() {

  const handleEditProfileClick = () => {
    document.querySelector('.popup_type_edit-profile').classList.add('popup_opened');
  }

  const handleEditAvatarClick = () => {
    document.querySelector('.popup_type_change-avatar').classList.add('popup_opened');
  }

  const handleAddPlaceClick = () => {
    document.querySelector('.popup_type_add-card').classList.add('popup_opened');
  }

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
            <button type="button" className="profile__avatar-edit-btn" onClick={handleEditAvatarClick}></button>
          </div>
          <div className="profile__info">
            <div className="profile__name-box">
              <h1 className="profile__name">Жак-Ив Кусто</h1>
              <button
                aria-label="изменить профиль"
                className="profile__edit-button"
                type="button"
                onClick={handleEditProfileClick}
              ></button>
            </div>
            <p className="profile__description">Исследователь океана</p>
          </div>
        </div>
        <button
          aria-label="добавить фото"
          className="profile__add-button"
          type="button"
          onClick={handleAddPlaceClick}
        ></button>
      </section>
      <section className="elements"></section>
    </main>
  );
}

export default Main;
