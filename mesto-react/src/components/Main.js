import React, { useEffect, useState } from "react";
import { api } from "../utils/Api";
import Card from '../components/Card'

function Main({onEditProfile, onAddPlace, onEditAvatar}) {

  let [userName, setUserName] = useState();
  let [userDescription, setUserDescription] = useState();
  let [userAvatar, setUserAvatar] = useState();
  let [cards, setCards] = useState([]);

useEffect(() => {
  api.getProfile()
  .then((res) => {
    setUserName(res.name)
    setUserAvatar(res.avatar)
    setUserDescription(res.about)
  })
  .catch(err => {
    console.log(err)
  });
}, [])

 useEffect(() => {
 
  api.getInitialCards()
  .then(res => {
    
    setCards(res)
  })
  .catch(err => {
    console.log(err)
  });
}, [])

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
      </section>
      <section className="elements">
      { cards.map((res) => (<Card key={res._id} {...res} />))}
      </section>
    </main>
  

  );
}

export default Main;
