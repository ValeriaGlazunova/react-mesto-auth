import React from 'react';
import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function App() {
  return (
    <div className="page">
      <Header />
      <Main />
      <Footer />
      

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
            noValidate
          >
            <div className="popup__input-container">
              <input
                name="name"
                id="name-input"
                className="popup__input popup__input_type_name"
                type="text"
                placeholder="Имя"
                minLength="2"
                maxLength="40"
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
                minLength="2"
                maxLength="200"
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
            noValidate
          >
            <div className="popup__input-container">
              <input
                name="card-name-input"
                id="card-name-input"
                className="popup__input popup__input_type_card-name"
                type="text"
                placeholder="Название"
                minLength="2"
                maxLength="30"
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
            noValidate
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
          noValidate
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
