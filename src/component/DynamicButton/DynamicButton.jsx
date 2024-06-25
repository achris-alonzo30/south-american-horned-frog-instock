import "./DynamicButton.scss";

import editIcon from "../../assets/icons/edit-24px.svg";

export const DynamicButton = ({ variant }) => {
  switch (variant) {
    case "add":
      return (
        <button className="primary">
          <span>+</span>
          Add New Warehouse
        </button>
      );

    case "edit":
      return (
        <button className="primary">
          <img src={editIcon} alt="Pencil Icon" className="edit-button__icon" />
          Edit
        </button>
      );

    case "delete":
      return (
        <button className="destructive">
          Delete
        </button>
      );

    case "cancel":
      return (
        <button className="secondary">
          Cancel
        </button>
      );
  }
};
