import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Main from "..//Main/Main";
import ModalWithForm from "..//ModalWithForm/ModalWithForm";
import { useEffect, useState } from "react";
import ItemModal from "../ItemModal/ItemModal";
import { getForecastWeather, parseWeatherData } from "../../utils/weatherApi";
import "./App.css";

function App() {
  const [selectedWeatherType, setSelectedWeatherType] = useState(null);

  const [error, setError] = useState(null);
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [temp, setTemp] = useState(0);
  const handleCreateModal = () => {
    setActiveModal("create");
  };

  const handleCloseModal = () => {
    setActiveModal("");
  };

  const handleSelectedCard = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  useEffect(() => {
    getForecastWeather()
      .then((data) => {
        const temperature = parseWeatherData(data);
        setTemp(temperature);
      })
      .catch((err) => {
        console.error(err); // Log the error for debugging purposes
        setError(
          "There was an error fetching the weather data. Please try again."
        );
      });
  }, []);

  return (
    <div>
      <Header
        onCreateModal={handleCreateModal}
        isModalOpen={activeModal === "create"}
      />

      <Main weatherTemp={temp} onSelectCard={handleSelectedCard} />
      <Footer />

      {error && <p className="error-message">{error}</p>}
      {activeModal === "create" && (
        <ModalWithForm title="New Garmet" onClose={handleCloseModal}>
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
              maxLength="30"
              placeholder="Image"
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
      )}
      {activeModal === "preview" && (
        <ItemModal selectedCard={selectedCard} onClose={handleCloseModal} />
      )}
    </div>
  );
}

export default App;
