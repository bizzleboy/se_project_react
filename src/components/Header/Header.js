import React, { useState } from "react";
import "./Header.css";

import defaultImage from "../../images/Default.svg";
import hoverImage from "../../images/Hover.svg";
import disabledImage from "../../images/Disabled.svg";
import logoImage from "../../images/Logo.svg";
import terryImage from "../../images/terry.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { Link } from "react-router-dom";

const date = new Date();
const dateString = date.toISOString().slice(0, 10);

const Header = ({ onCreateModal, isModalOpen }) => {
  const [isHovered, setIsHovered] = useState(false); // New state for hover

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const getButtonImage = () => {
    if (isModalOpen) return disabledImage;
    if (isHovered) return hoverImage;
    return defaultImage;
  };

  const onCreateModalWrapper = () => {
    setIsHovered(false); // Reset hover state
    onCreateModal(); // Trigger the modal open function
  };

  return (
    <header className="header">
      <div className="header__logo">
        <div>
          <Link to="/">
            <img src={logoImage} alt="logo" />
          </Link>
        </div>
        <div>{dateString}</div>
      </div>
      <div className="header__avatar-logo">
        <ToggleSwitch />
        <div>
          <button
            className="header__add-garment"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={onCreateModalWrapper} // Updated here
            disabled={isModalOpen}
            style={{ backgroundImage: `url(${getButtonImage()})` }}
          ></button>
        </div>
        <Link to="/profile">Name</Link>
        <div>
          <img src={terryImage} alt="terry" />
        </div>
      </div>
    </header>
  );
};

export default Header;
