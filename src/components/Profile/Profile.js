import React from "react";
import SideBar from "./SideBar";
import ClothesSection from "./ClothesSection";
import "./Profile.css";

const Profile = ({
  userClothingItems,
  onSelectCard,
  onCreateModal,
  isModalOpen,
}) => {
  return (
    <div className="profile-container">
      <SideBar />
      <ClothesSection
        userClothingItems={userClothingItems}
        onSelectCard={onSelectCard}
        onCreateModal={onCreateModal}
        isModalOpen={isModalOpen}
      />
    </div>
  );
};

export default Profile;
