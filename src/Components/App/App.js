//import logo from './logo.svg';
import "./App.css";
//import ItemModal from './App/ItemModal';
import Header from "./Header/Header";
import Footer from "../../footer/Footer";
import Main from "./Main/Main";
import ModalWithForm from "../../ModalWithForm/ModalWithForm";
import { useEffect, useState } from "react";
import ItemModal from "../../ItemModal/ItemModal";
import { getForecastWeather, parseWeatherData } from "../../utils/weatherApi";
import "./App.css";

function App() {
  const weatherTemp = "75789f";
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
    getForecastWeather().then((data) => {
      const temperature = parseWeatherData(data);
      setTemp(temperature);
    });
  }, []);
  return (
    <div>
      <Header onCreateModal={handleCreateModal} />
      <Main weatherTemp={temp} onSelectCard={handleSelectedCard} />
      <Footer />
      {activeModal === "create" && (
        <ModalWithForm title="New Garmet" onClose={handleCloseModal}>
          <label>
            name
            <input type="text" name="name" minLength="1" maxLength="30" />
          </label>
          <label>
            image
            <input type="url" name="link" minLength="1" maxLength="30" />
          </label>
          <p>Select the weather type:</p>
          <div>
            <div>
              <input type="radio" id="hot" value="hot" />
              <label> Hot</label>
            </div>
            <div>
              <input type="radio" id="warm" value="warm" />
              <label> Warm</label>
            </div>

            <div>
              <input type="radio" id="cold" value="cold" />
              <label> Cold</label>
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