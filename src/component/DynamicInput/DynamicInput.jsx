import "./DynamicInput.scss";

export const DynamicInput = ({ 
    id,
    icon,
    placeholder,
}) => {
  return (
    <div className="search-bar">
      <input
        id={id}
        name={id}
        type="text"
        placeholder={placeholder}
        className="search-bar__input search-bar__input--error"
      />
      {icon && (
        <img
          src={icon}
          alt="Dynamic Icon"
          className="search-bar__icon"
        />
      )}
    </div>
  );
};
