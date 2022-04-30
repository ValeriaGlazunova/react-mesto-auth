import React from "react";


function ImagePopup() {
    return(
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
    )
}

export default ImagePopup;