import React from "react";
import terryImage from "../../images/terry.svg";
import "./Profile.css"; // Assuming the CSS is shared, import the CSS file here.

const SideBar = () => {
  // These values can be fetched from an API or application state
  const username = "Terry";

  return (
    <div className="profile__sidebar">
      <img src={terryImage} alt="terry" className="profile__picture" />
      <h2 className="profile__username">{username}</h2>
    </div>
  );
};

export default SideBar;
