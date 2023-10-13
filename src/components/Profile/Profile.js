import React from "react";
import SideBar from "./SideBar";
import ClothesSection from "./ClothesSection";
import "./Profile.css";

const Profile = ({ userClothingItems, onSelectCard }) => {
  return (
    <div className="profile-container">
      <SideBar />
      <ClothesSection
        userClothingItems={userClothingItems}
        onSelectCard={onSelectCard}
      />
    </div>
  );
};

export default Profile;
