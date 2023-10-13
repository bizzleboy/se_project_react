import React from "react";
import SideBar from "./SideBar";
import ItemCard from "../ItemCard/ItemCard";
import "./Profile.css"; // You might also want to rename this CSS file and its references if it's specific to ClothesSection.

const ClothesList = ({ userClothingItems, onSelectCard }) => {
  console.log(1312313131312);
  console.log(userClothingItems);

  return (
    <section className="user-clothing">
      <div>
        <div className="profile__header">
          <h2 className="profile__header-title">Your items</h2>
          <button onClick={() => {}} className="profile__add_new-button">
            + Add new
          </button>
        </div>
        <div className="card_items">
          {userClothingItems.map((item) => (
            <ItemCard key={item._id} item={item} onSelectCard={onSelectCard} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ClothesSection = ({ userClothingItems, onSelectCard }) => {
  // Sample user's clothing data. Replace this with actual data (e.g., fetched from an API).

  const handleSelectCard = (item) => {
    // Define what should be done when a card is selected
  };

  return (
    <div className="profile-container">
      <SideBar />
      <ClothesList
        userClothingItems={userClothingItems}
        onSelectCard={onSelectCard}
      />
    </div>
  );
};

export default ClothesSection;
