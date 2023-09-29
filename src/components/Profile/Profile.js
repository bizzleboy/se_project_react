import React from "react";
import ItemCard from "../ItemCard/ItemCard";
import "./Profile.css";
import { defaultClothingItems } from "../../utils/constants";

const SideBar = () => {
  // These values can be fetched from an API or application state
  const username = "JohnDoe";
  const avatarURL = "/path-to-avatar.jpg";

  return (
    <aside className="profile-sidebar">
      <img src={avatarURL} alt="User Avatar" className="user-avatar" />
      <h2 className="username">{username}</h2>
      {/* Add other user profile related content if needed */}
    </aside>
  );
};

const ClothesSection = ({ userClothingItems, onSelectCard }) => {
  return (
    <section className="user-clothing">
      <button onClick={() => {}} className="add-new-button">
        + Add new
      </button>

      <div className="user-clothing-items">
        {defaultClothingItems.map((item) => (
          <ItemCard key={item._id} item={item} onSelectCard={onSelectCard} />
        ))}
        <div className="card_items"></div>
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
