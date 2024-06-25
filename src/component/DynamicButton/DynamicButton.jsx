import "./DynamicButton.scss";

import editIcon from "../../assets/icons/edit_white-24px.svg";

export const DynamicButton = ({ 
    variant, 
    type = "button", 
    onClick = () => {} 
}) => {
  switch (variant) {
    case "add":
      return (
        <button 
            type={type}
            onClick={onClick}
            className="primary" 
        >
          <span>+</span>
          Add New Warehouse
        </button>
      );

    case "edit":
      return (
        <button 
            type={type}
            onClick={onClick}
            className="primary"
        >
          <img src={editIcon} alt="Pencil Icon" className="edit-button__icon" />
          Edit
        </button>
      );

    case "delete":
      return (
        <button 
            type={type}
            onClick={onClick}
            className="destructive"
        >
          Delete
        </button>
      );

    case "cancel":
      return (
        <button 
            type={type}
            onClick={onClick}
            className="secondary"
        >
          Cancel
        </button>
      );
  }
};
