import React from "react";
import "./ModalWithForm.css";
import AddGarmentDisabledImage from "../../images/AddGarmentDisabled.svg";

import CloseIcon from "../../images/CloseDark.svg";

const ModalWithForm = ({ children, buttonText, title, onClose, name }) => {
  return (
    <div className={`modal modal_type_${name}`}>
      <div className="modal__content">
        <button type="button" onClick={onClose} className="close_modal">
          <img src={CloseIcon} alt="Close" />
        </button>
        <h3 className="modal__title">{title} </h3>
        <form className="modal__children">{children}</form>
        <button className="modal__submit" type="submit">
          <img src={AddGarmentDisabledImage} alt="Add Garment Disabled" />
        </button>
      </div>
    </div>
  );
};

export default ModalWithForm;
