import "./Header.css";
const Header = ({ onCreateModal }) => {
  console.log("Header");

  return (
    <header className="header">
      <div className="header__logo">
        <div>
          <img
            src={require("../../../images/Logo.svg").default}
            alt="logo"
          ></img>
        </div>
        <div>date</div>
      </div>
      <div className="header__avatar-logo">
        <div>
          <button type="text" onClick={onCreateModal}>
            Add New Clothes
          </button>
        </div>
        <div>Name</div>
        <div>
          <img
            src={require("../../../images/terry.svg").default}
            alt="logo"
          ></img>
        </div>
      </div>
    </header>
  );
};

export default Header;
