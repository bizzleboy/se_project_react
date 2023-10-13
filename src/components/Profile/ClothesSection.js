import React from "react";
import SideBar from "./SideBar";
import Profile from "./Profile";
import "./Profile.css"; // You might also want to rename this CSS file and its references if it's specific to ClothesSection.

const ClothesSection = ({ userClothingItems, onSelectCard }) => {
  // Sample user's clothing data. Replace this with actual data (e.g., fetched from an API).

  const handleSelectCard = (item) => {
    // Define what should be done when a card is selected
  };

  return (
    <div className="profile-container">
      <SideBar />
      <Profile
        userClothingItems={userClothingItems}
        onSelectCard={onSelectCard}
      />
    </div>
  );
};

export default ClothesSection;
