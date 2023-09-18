import "./ItemCard.css";
const ItemCard = ({ item, onSelectCard }) => {
  // Declared the listener function
  const handleImageClick = () => {
    onSelectCard(item);
  };

  return (
    <div className="card_details">
      <div>
        <img
          src={item.link}
          className="card_image"
          onClick={handleImageClick} // Use the listener function here
          alt="cards"
        />
      </div>
      <div className="card_name">{item.name}</div>
    </div>
  );
};

export default ItemCard;
