import React, { useState } from "react";
import "../index.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  let [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  let [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  let [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  let [selectedCard, setSelectedCard] = useState(null);

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  };

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  };

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  };

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(null);
  };

  return (
    <div className="page">
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
      />
      <Footer />
      <PopupWithForm
        name="edit-profile"
        title="Редактировать профиль"
        button="Сохранить"
        onClose={closeAllPopups}
        isOpen={isEditProfilePopupOpen}
        children={
          <>
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
          </>
        }
      />
      <PopupWithForm
        name="add-card"
        title="Новое место"
        button="Создать"
        onClose={closeAllPopups}
        isOpen={isAddPlacePopupOpen}
        children={
          <>
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
          </>
        }
      />
      <PopupWithForm
        name="change-avatar"
        title="Обновить аватар"
        button="Сохранить"
        onClose={closeAllPopups}
        isOpen={isEditAvatarPopupOpen}
        children={
          <>
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
          </>
        }
      />
      <PopupWithForm name="confirm" title="Вы уверены?" button="Да" />
      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
    </div>
  );
}

export default App;
