import React from "react";
import ItemCard from "../ItemCard/ItemCard";
import "./Profile.css";
import { defaultClothingItems } from "../../utils/constants";
import terryImage from "../../images/terry.svg";

const SideBar = () => {
  // These values can be fetched from an API or application state
  const username = "Terry";
  const avatarURL = "/path-to-avatar.jpg";

  return (
    <div className="profile__sidebar">
      <img src={terryImage} alt="terry" className="profile__picture" />
      <h2 className="profile__username">{username}</h2>
    </div>
  );
};

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
          {defaultClothingItems.map((item) => (
            <ItemCard key={item._id} item={item} onSelectCard={onSelectCard} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Profile = () => {
  // Sample user's clothing data. Replace this with actual data (e.g., fetched from an API).
  const userClothingItems = [
    // ... Sample data as before
  ];

  const handleSelectCard = (item) => {
    // Define what should be done when a card is selected
  };

  return (
    <div className="profile-container">
      <SideBar />
      <ClothesSection
        userClothingItems={userClothingItems}
        onSelectCard={handleSelectCard}
      />
    </div>
  );
};

export default Profile;
