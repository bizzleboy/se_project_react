import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Main from "..//Main/Main";

import { useEffect, useState } from "react";
import ItemModal from "../ItemModal/ItemModal";
import { getForecastWeather, parseWeatherData } from "../../utils/weatherApi";
import "./App.css";
import { CurrentTemperatureUnitContext } from "../Contexts/CurrentTemperatureUnitContext";
import { Switch, Route } from "react-router-dom/cjs/react-router-dom.min";
import AddItemModal from "../../AddItemModal/AddItemModal";
import Profile from "../Profile/Profile";
import { defaultClothingItems } from "../../utils/constants";
import api from "../../utils/api";
function App() {
  const handleAddItemSubmit = async (item) => {
    try {
      const newItem = await api.addItem(item); // Assuming api.addItem adds the item and returns the new item
      setClothingItems([newItem, ...clothingItems]);
    } catch (error) {
      console.error("Failed to add item:", error);
    }
  };

  const [error, setError] = useState(null);
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [temp, setTemp] = useState(0);
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [isModalOpen, setModalOpen] = useState(false);

  const [clothingItems, setClothingItems] = useState([]);

  const handleAddItem = (newItem) => {
    setClothingItems((prevItems) => [...prevItems, newItem]);
  };

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
  const onAddItem = (e, values) => {
    e.preventDefault();
  };

  const addNewItem = (newItem) => {
    setClothingItems([...clothingItems, newItem]);
  };

  const handleToggleSwitchChange = () => {
    if (currentTemperatureUnit === "C") setCurrentTemperatureUnit("F");
    if (currentTemperatureUnit === "F") setCurrentTemperatureUnit("C");
  };

  const combinedItems = [...defaultClothingItems, ...clothingItems];
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
      <CurrentTemperatureUnitContext.Provider
        value={{ currentTemperatureUnit, handleToggleSwitchChange }}
      >
        <Header
          onCreateModal={handleCreateModal}
          isModalOpen={activeModal === "create"}
        />

        <Switch>
          <Route exact path="/">
            <Main
              weatherTemp={temp}
              onSelectCard={handleSelectedCard}
              items={combinedItems}
            />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
        </Switch>

        <Footer />

        {error && <p className="error-message">{error}</p>}
        {activeModal === "create" && (
          /* 
          <AddItemModal
            handleCloseModal={handleCloseModal}
            isOpen={activeModal === "create"}
            onAddItem={addNewItem}
          />
          */
          <AddItemModal
            isOpen={activeModal === "create"}
            handleCloseModal={handleCloseModal}
            onAddItem={handleAddItem}
          />
        )}
        {activeModal === "preview" && (
          <ItemModal selectedCard={selectedCard} onClose={handleCloseModal} />
        )}
      </CurrentTemperatureUnitContext.Provider>
    </div>
  );
}

export default App;
