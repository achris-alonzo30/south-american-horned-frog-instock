import "./DynamicButton.scss";

import editIcon from "../../assets/icons/edit_white-24px.svg";

export const DynamicButton = ({ 
    variant, 
    addButtonName,
    type = "button", 
    onClick = () => {},
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
          {addButtonName}
        </button>
      );

      case "save":
        return (
          <button 
              type={type}
              onClick={onClick}
              className="primary" 
          >
            Save
          </button>
        );

    case "edit":
      return (
        <button 
            type={type}
            onClick={onClick}
            className="primary primary--edit"
        >
          <img src={editIcon} alt="Pencil Icon" className="primary__icon" />
          <span className="primary__text">Edit</span>
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
