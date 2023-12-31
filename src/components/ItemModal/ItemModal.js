import "./ItemModal.css";
import CloseIcon from "../../images/Close.svg";

const ItemModal = ({ selectedCard, onClose, onDeleteItem }) => {
  const handleDelete = () => {
    onDeleteItem(selectedCard._id); // Trigger the delete in the App component
  };

  return (
    <div className={`modal`}>
      <div className="modal__content">
        <button type="button" onClick={onClose} className="close_modal">
          <img src={CloseIcon} alt="Close" />
        </button>

        <img
          src={selectedCard.link}
          alt={selectedCard.name}
          className="modal__image"
        />

        <div className="modal__lower">
          <div className="modal__details">
            <div className="modal__clothing-name">{selectedCard.name}</div>
            <div className="modal__info-group">
              <div className="modal__weather-type">
                Weather type: {selectedCard.weather}
              </div>
              <div onClick={handleDelete} className="modal__delete">
                Delete Garment
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemModal;
