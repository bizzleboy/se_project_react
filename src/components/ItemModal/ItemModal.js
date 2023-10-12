import "./ItemModal.css";
import CloseIcon from "../../images/Close.svg";
import { deleteItem } from "../../utils/api"; // Import the deleteItem function

const ItemModal = ({ selectedCard, onClose, onDeleteItem }) => {
  const handleDelete = async () => {
    try {
      const deletedItemId = await deleteItem(selectedCard._id);
      if (deletedItemId) {
        console.log("Successfully deleted item with id:", deletedItemId);
        onDeleteItem(deletedItemId);
        onClose(); // Close the modal after deletion
      }
    } catch (error) {
      console.error("Failed to delete item:", error);
    }
  };

  return (
    <div className={`modal`}>
      <div className="modal__content">
        <button type="button" onClick={onClose} className="close_modal">
          <img src={CloseIcon} alt="Close" />
        </button>

        <img src={selectedCard.link} alt="Card" className="modal__image" />

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
