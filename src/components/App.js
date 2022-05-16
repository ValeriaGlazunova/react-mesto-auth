import React, { useState, useEffect } from "react";
import "../index.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";
import ImagePopup from "./ImagePopup";
import { api } from  "../utils/Api";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function App() {
  let [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  let [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  let [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  let [selectedCard, setSelectedCard] = useState(null);
  let [currentUser, setCurrentUser] = useState({});
  let [cards, setCards] = useState([]);

  useEffect(() => {
    api.getProfile()
    .then((res) => {
      setCurrentUser(res);
    })
    .catch((err) => {
      console.log(err);
    });
    api.getInitialCards()
    .then((cards) => {
      setCards(cards);
    })
    .catch((err) => {
      console.log(err);
    });
  }, []);


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

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    api.changeLikeCardStatus(card._id, isLiked)
    .then((newCard) => {
      setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
  })
  .catch((err) => {
    console.log(err);
  });
  } 

  const handleCardDelete = (card) => {
    api.deleteMyCard(card._id)
    .then(() => {
      const newCardList = cards.filter((item) => item._id !==card._id);
      setCards(newCardList);
    })
    .catch((err) => {
      console.log(err);
    });
  }

  function handleUpdateUser(data) {
    api.editProfile(data)
    .then((newData) => {
      setCurrentUser(newData);
      closeAllPopups();
    })
    .catch((err) => {
      console.log(err);
    });
  }

  function handleUpdateAvatar(data) {
    api.changeAvatar(data)
    .then((newData) => {
      setCurrentUser(newData);
      closeAllPopups();
    })
    .catch((err) => {
      console.log(err);
    });
  }

  function handleAddPlaceSubmit(data) {
    api.postCard(data)
    .then((newCard) => {
    setCards([newCard, ...cards]);
    closeAllPopups();
    })
    .catch((err) => {
      console.log(err);
    });
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
    <div className="page">
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
        onCardLike={handleCardLike}
        onCardDelete={handleCardDelete}
        cards = {cards}
      />
      <Footer />
      <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser}  />
      <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar} />  
      <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onAddPlace={handleAddPlaceSubmit} />

      <PopupWithForm name="confirm" title="Вы уверены?" button="Да" />
      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
    </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
