import "./Modal.scss";

import closeIcon from "../../assets/icons/close-24px.svg";

import { CardFooter } from "../CardFooter/CardFooter";
import { DynamicButton } from "../DynamicButton/DynamicButton";

export const Modal = ({ onClose, onDelete }) => {
  return (
    <main className="modal">
      <section className="modal__card">
        <nav className="modal__header">
          <button onClick={onClose} className="modal__close--button">
            <img src={closeIcon} alt="X icon" />
          </button>
        </nav>
        <hgroup className="modal__body">
          <h2 className="modal__body--heading">Delete Washington warehouse?</h2>
          <p className="modal__body--paragraph">
            Please confirm that you d like to delete the Washington from the
            list of warehouses. You won t be able to undo this action.
          </p>
        </hgroup>

        <nav className="modal__footer">
          <DynamicButton variant="cancel" onClick={onClose} type="button" />
          <DynamicButton variant="delete" onClick={onDelete} type="button" />
        </nav>
      </section>
    </main>
  );
};
