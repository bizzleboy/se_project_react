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
import { getItems, postItem } from "../../utils/api";
import { deleteItem } from "../../utils/api";

function App() {
  const [error, setError] = useState(null);
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [temp, setTemp] = useState(0);
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [isLoading, setIsLoading] = useState(false);

  const [clothingItems, setClothingItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      setIsLoading(true); // Start loading
      try {
        const fetchedItems = await getItems();
        setClothingItems(fetchedItems);
      } catch (error) {
        console.error("Error while fetching items:", error);
      } finally {
        setIsLoading(false); // Stop loading regardless of success or failure
      }
    };

    fetchItems();
  }, []);

  useEffect(() => {
    if (!activeModal) return; // stop the effect not to add the listener if there is no active modal

    const handleEscClose = (e) => {
      // define the function inside useEffect not to lose the reference on rerendering
      if (e.key === "Escape") {
        handleCloseModal();
      }
    };

    document.addEventListener("keydown", handleEscClose);

    return () => {
      // don't forget to add a clean up function for removing the listener
      document.removeEventListener("keydown", handleEscClose);
    };
  }, [activeModal]); // watch activeModal here

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

  const handleDeleteItem = async (itemId) => {
    const updatedItems = clothingItems.filter((item) => item._id !== itemId);
    setClothingItems(updatedItems);
  };

  const handleDeleteItemFromServer = async (itemId) => {
    try {
      const deletedItemId = await deleteItem(itemId);
      if (deletedItemId) {
        console.log("Successfully deleted item with id:", deletedItemId);
        handleDeleteItem(deletedItemId) // Update local state after successful deletion
          .then(() => {
            handleCloseModal();
          });
      }
    } catch (error) {
      console.error("Failed to delete item:", error);
    }
  };

  const handleAddItem = async (newItem) => {
    try {
      setIsLoading(true); // Start loading

      const { name, link, weather } = newItem;
      const addedItem = await postItem(name, link, weather);
      setClothingItems([...clothingItems, addedItem]);
      return true; // Successfully added the item
    } catch (error) {
      console.error("Failed to add item:", error);
      return false; // Failed to add the item
    } finally {
      setIsLoading(false); // Start loading
    }
  };

  const handleToggleSwitchChange = () => {
    if (currentTemperatureUnit === "C") setCurrentTemperatureUnit("F");
    if (currentTemperatureUnit === "F") setCurrentTemperatureUnit("C");
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
            clothingItems={clothingItems}
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
          onDeleteItem={handleDeleteItemFromServer}
          isLoading={isLoading}
        />
      )}
      {activeModal === "preview" && (
        <ItemModal
          selectedCard={selectedCard}
          onClose={handleCloseModal}
          onDeleteItem={handleDeleteItemFromServer} // Pass the new delete function
        />
      )}
    </CurrentTemperatureUnitContext.Provider>
  );
}

export default App;
