import React, { useState, useEffect } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const AddItemModal = ({ handleCloseModal, onAddItem, isOpen, isLoading }) => {
  const [selectedWeatherType, setSelectedWeatherType] = useState(null);
  const [name, setName] = useState("");
  const [link, setUrl] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleUrlChange = (e) => {
    setUrl(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newItem = {
      name,
      link,
      weather: selectedWeatherType,
    };

    // Assuming onAddItem is now an async function that returns true if successful and false otherwise
    const isAddedSuccessfully = await onAddItem(newItem);

    if (isAddedSuccessfully) {
      handleCloseModal();
    }
  };

  useEffect(() => {
    if (isOpen) {
      setName("");
      setUrl("");
      setSelectedWeatherType(null);
    }
  }, [isOpen]);

  return (
    <ModalWithForm
      title="New Garmet"
      onClose={handleCloseModal}
      isOpen={isOpen}
      onSubmit={handleSubmit}
      isDisabled={!selectedWeatherType || !name || !link || isLoading} // Disabled button when loading
      buttonText={isLoading ? "Saving..." : "Save"} // Adjust the button text based on loading state
    >
      <div className="input-container">
        <label className="modal__label" htmlFor="name">
          Name
        </label>
        <input
          className="modal__input"
          id="name"
          type="text"
          name="name"
          minLength="1"
          maxLength="30"
          placeholder="Name"
          value={name}
          onChange={handleNameChange}
        />
      </div>

      <div className="input-container">
        <label className="modal__label" htmlFor="link">
          Image
        </label>
        <input
          className="modal__input"
          id="link"
          type="url"
          name="link"
          minLength="1"
          maxLength="100"
          placeholder="Image"
          value={link}
          onChange={handleUrlChange}
        />
      </div>
      <div className="modal__options">
        <p>Select the weather type:</p>
        <div>
          <div className="modal__options__radio">
            <input
              type="radio"
              name="weatherType"
              id="hot"
              value="hot"
              className="modal__options__radio-input"
              onChange={() => setSelectedWeatherType("hot")}
            />
            <label
              htmlFor="hot"
              className={`modal__options__radio-label ${
                selectedWeatherType === "hot" ? "selected" : "unselected"
              }`}
            >
              Hot
            </label>
          </div>

          <div className="modal__options__radio">
            <input
              type="radio"
              name="weatherType"
              id="warm"
              value="warm"
              className="modal__options__radio-input"
              onChange={() => setSelectedWeatherType("warm")}
            />
            <label
              htmlFor="warm"
              className={`modal__options__radio-label ${
                selectedWeatherType === "warm" ? "selected" : "unselected"
              }`}
            >
              Warm
            </label>
          </div>

          <div className="modal__options__radio">
            <input
              type="radio"
              name="weatherType"
              id="cold"
              value="cold"
              className="modal__options__radio-input"
              onChange={() => setSelectedWeatherType("cold")}
            />
            <label
              htmlFor="cold"
              className={`modal__options__radio-label ${
                selectedWeatherType === "cold" ? "selected" : "unselected"
              }`}
            >
              Cold
            </label>
          </div>
        </div>
      </div>
    </ModalWithForm>
  );
};
export default AddItemModal;
