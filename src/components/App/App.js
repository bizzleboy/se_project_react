import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Main from "../Main/Main"; // fixed the extra slash in the import

import { useEffect, useState } from "react";
import ItemModal from "../ItemModal/ItemModal";
import { getForecastWeather, parseWeatherData } from "../../utils/weatherApi";
import "./App.css";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";
import { Switch, Route } from "react-router-dom";
import AddItemModal from "../AddItemModal/AddItemModal";
import Profile from "../Profile/Profile";
import { defaultClothingItems } from "../../utils/constants";
import { getItems, postItem } from "../../utils/api";

function App() {
  const [error, setError] = useState(null);
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [temp, setTemp] = useState(0);
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");

  const [clothingItems, setClothingItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const fetchedItems = await getItems();
        setClothingItems(fetchedItems);
      } catch (error) {
        console.error("Error while fetching items:", error);
      }
    };

    fetchItems();
  }, []);

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

  const handleDeleteItem = (deletedItemId) => {
    const updatedItems = clothingItems.filter(
      (item) => item._id !== deletedItemId
    );
    setClothingItems(updatedItems);
  };

  const handleAddItem = async (newItem) => {
    try {
      const { name, link, weather } = newItem;
      const addedItem = await postItem(name, link, weather);
      setClothingItems([...clothingItems, addedItem]);
    } catch (error) {
      console.error("Failed to add item:", error);
    }
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
      <h1>
        PLEASE START LOCAL SERVER WITH THIS BEFORE NPM STARTING MY PROJECT
      </h1>
      <h1> json-server --watch db.json --id _id --port 3001</h1>
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
            <Profile
              userClothingItems={clothingItems}
              onSelectCard={handleSelectedCard}
              onCreateModal={handleCreateModal}
              isModalOpen={activeModal === "create"}
            />
          </Route>
        </Switch>

        <Footer />

        {error && <p className="error-message">{error}</p>}
        {activeModal === "create" && (
          <AddItemModal
            isOpen={activeModal === "create"}
            handleCloseModal={handleCloseModal}
            onAddItem={handleAddItem}
            onDeleteItem={handleDeleteItem}
          />
        )}
        {activeModal === "preview" && (
          <ItemModal
            selectedCard={selectedCard}
            onClose={handleCloseModal}
            onDeleteItem={handleDeleteItem}
          />
        )}
      </CurrentTemperatureUnitContext.Provider>
    </div>
  );
}

export default App;
