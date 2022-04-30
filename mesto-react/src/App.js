import React from 'react';
import './index.css'

function App() {
  return (
    <div className="page">
      <header className="header">
        <img
          className="header__logo"
          alt="лого"
          src="<%=require('./images/header__logo.svg')%>"
        />
      </header>

      <main className="content">
        <section className="profile">
          <div className="profile__account">
            <div className="profile__avatar-container">
            <img
              className="profile__avatar"
              alt="аватар"
              src="<%=require('./images/profile__photo.jpg')%>"
            />
            <button type="button" class="profile__avatar-edit-btn"></button>
          </div>
            <div className="profile__info">
              <div className="profile__name-box">
                <h1 className="profile__name">Жак-Ив Кусто</h1>
                <button
                  aria-label="изменить профиль"
                  className="profile__edit-button"
                  type="button"
                ></button>
              </div>
              <p className="profile__description">Исследователь океана</p>
            </div>
          </div>
          <button
            aria-label="добавить фото"
            className="profile__add-button"
            type="button"
          ></button>
        </section>
        <section className="elements"></section>
      </main>

      <footer className="footer">
        <p className="footer__copyright">&copy; 2022 Mesto Russia</p>
      </footer>

      <div className="popup popup_type_edit-profile">
        <div className="popup__container popup__container_type_edit-profile">
          <button
            className="popup__close-button popup__close-button_type_edit-profile"
            type="button"
          ></button>
          <h3 className="popup__heading">Редактировать профиль</h3>
          <form
            className="popup__form popup__form_type_edit-profile"
            name="profile-info"
            novalidate
          >
            <div className="popup__input-container">
              <input
                name="name"
                id="name-input"
                className="popup__input popup__input_type_name"
                type="text"
                placeholder="Имя"
                minlength="2"
                maxlength="40"
                required
              />
              <span
                id="name-input-error"
                className="popup__input-error popup__input-error_visible"
              ></span>
            </div>
            <div className="popup__input-container">
              <input
                name="job"
                id="job-input"
                className="popup__input popup__input_type_description"
                type="text"
                placeholder="Деятельность"
                minlength="2"
                maxlength="200"
                required
              />
              <span
                id="job-input-error"
                className="popup__input-error popup__input-error_visible"
              ></span>
            </div>
            <button className="popup__save-button" type="submit">Сохранить</button>
          </form>
        </div>
      </div>

      <div className="popup popup_type_add-card">
        <div className="popup__container popup__container_type_add-card">
          <button
            className="popup__close-button popup__close-button_type_add-card"
            type="button"
          ></button>
          <h3 className="popup__heading">Новое место</h3>
          <form
            className="popup__form popup__form_type_add-card"
            name="add-card"
            novalidate
          >
            <div className="popup__input-container">
              <input
                name="card-name-input"
                id="card-name-input"
                className="popup__input popup__input_type_card-name"
                type="text"
                placeholder="Название"
                minlength="2"
                maxlength="30"
                required
              />
              <span
                id="card-name-input-error"
                className="popup__input-error popup__input-error_visible"
              ></span>
            </div>
            <div className="popup__input-container">
              <input
                name="card-url-input"
                id="card-url-input"
                className="popup__input popup__input_type_card-link"
                type="url"
                placeholder="Ссылка на картинку"
                required
              />
              <span
                id="card-url-input-error"
                className="popup__input-error popup__input-error_visible"
              ></span>
            </div>
            <button
              className="popup__save-button popup__save-button_type_add-card"
              type="submit"
            >
              Создать
            </button>
          </form>
        </div>
      </div>

      <div className="popup popup_type_change-avatar">
        <div className="popup__container">
          <button
            className="popup__close-button"
            type="button"
          ></button>
          <h3 className="popup__heading">Обновить аватар</h3>
          <form
            className="popup__form popup__form_type_change-avatar"
            name="change-avatar"
            novalidate
          >
            <div className="popup__input-container">
              <input
                name="avatar-url-input"
                id="avatar-url-input"
                className="popup__input popup__input_type_avatar-url"
                type="url"
                placeholder="Ссылка на картинку"
                required
              />
              <span
                id="avatar-url-input-error"
                className="popup__input-error popup__input-error_visible"
              ></span>
            </div>
            <button
              className="popup__save-button popup__save-button_type_change-avatar"
              type="submit"
            >
              Сохранить
            </button>
          </form>
        </div>
      </div>
    

    <div className="popup popup_type_img-open">
      <div className="popup__box">
        <button
          className="popup__close-button popup__close-button_type_img-open"
          type="button"
        ></button>
        <img className="popup__image" alt="картинка" src="#" />
        <h3 className="popup__subtitle"></h3>
      </div>
    </div>

    <div className="popup popup_type_confirm">
      <div className="popup__container">
        <button
          className="popup__close-button"
          type="button"
        ></button>
        <h3 className="popup__heading">Вы уверены?</h3>
        <form
          className="popup__form"
          name="confirm"
          novalidate
        >
          <button
            className="popup__save-button"
            type="submit"
          >
            Да
          </button>
        </form>
      </div>
    </div>
  </div>
  );
}

export default App;
