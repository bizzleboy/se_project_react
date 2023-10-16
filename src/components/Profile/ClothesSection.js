import React from "react";
import ItemCard from "../ItemCard/ItemCard";
import "./Profile.css";

const ClothesSection = ({
  userClothingItems,
  onSelectCard,
  onCreateModal,
  isModalOpen,
}) => {
  return (
    <section className="user-clothing">
      <div>
        <div className="profile__header">
          <h2 className="profile__header-title">Your items</h2>
          <button
            onClick={onCreateModal}
            className="profile__add_new-button"
            disabled={isModalOpen}
          >
            + Add new
          </button>
        </div>
        <div className="card_items">
          {/* Reverse the array here */}
          {[...userClothingItems].reverse().map((item) => (
            <ItemCard key={item._id} item={item} onSelectCard={onSelectCard} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClothesSection;
