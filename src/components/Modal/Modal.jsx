import "./Modal.scss";

import closeIcon from "../../assets/icons/close-24px.svg";

import { DynamicButton } from "../DynamicButton/DynamicButton";

export const Modal = ({ 
  onClose, 
  onDelete,
  isWarehouse,
  warehouseName,
  inventoryName,
}) => {
  const warehouse = {
    heading: `Delete ${warehouseName} warehouse?`,
    paragraph: `Please confirm that you'd like to delete the ${warehouseName} from the list of warehouses. You won't be able to undo this action`
  }

  const inventory = {
    heading: `Delete ${inventoryName} inventory item?`,
    paragraph: `Please confirm that you'd like to delete the ${inventoryName} from the inventory list. You won't be able to undo this action`
  }


  return (
    <main className="modal">
      <section className="modal__card">
        <nav className="modal__header">
          <button onClick={onClose} className="modal__close--button">
            <img src={closeIcon} alt="X icon" />
          </button>
        </nav>
        <hgroup className="modal__body">
          <h2 className="modal__body--heading">{isWarehouse ? warehouse.heading : inventory.heading}</h2>
          <p className="modal__body--paragraph">{isWarehouse ? warehouse.paragraph : inventory.paragraph}</p>
        </hgroup>

        <nav className="modal__footer">
          <DynamicButton variant="cancel" onClick={onClose} type="button" />
          <DynamicButton variant="delete" onClick={onDelete} type="button" />
        </nav>
      </section>
    </main>
  );
};
