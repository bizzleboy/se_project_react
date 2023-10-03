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
import { getItems, postItem, deleteItem } from "../../utils/api";
function App() {
  const [error, setError] = useState(null);
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [temp, setTemp] = useState(0);
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [isModalOpen, setModalOpen] = useState(false);

  const [clothingItems, setClothingItems] = useState([]);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const fetchedItems = await getItems();
        setItems(fetchedItems);
      } catch (error) {
        console.error("Error while fetching items:", error);
      }
    };

    fetchItems();
  }, []);

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

  const handleAddNewItem = async (name, imageUrl, weather) => {
    try {
      const newItem = await postItem(name, imageUrl, weather);

      // Update state to include the new item
      setItems((prevItems) => [...prevItems, newItem]);
    } catch (error) {
      console.error("Error while adding new item:", error);
    }
  };

  const handleDeleteItem = async (id) => {
    try {
      await deleteItem(id);

      // Update state to remove the item by its id
      setItems((prevItems) => prevItems.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Error while deleting item:", error);
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
            onAddItem={handleAddNewItem}
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
