import "./DynamicInput.scss";

export const DynamicInput = ({ 
    id,
    icon,
    type,
    placeholder,
}) => {
  return (
    <div className="search-bar">
      <input
        id={id}
        name={id}
        type={type}
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
