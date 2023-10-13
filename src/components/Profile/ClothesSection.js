import React from "react";
import ItemCard from "../ItemCard/ItemCard";
import "./Profile.css"; // Reminder about potentially renaming this CSS file if specific to a certain component.

const ClothesSection = ({ userClothingItems, onSelectCard }) => {
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

export default ClothesSection;
