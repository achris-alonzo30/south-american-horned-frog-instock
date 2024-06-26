import "./DynamicInput.scss";

export const DynamicInput = ({
  id,
  icon,
  type,
  className,
  radioName,
  placeholder,
  disabled = false,
}) => {
  if (type === "radio") {
    return (
      <div
        htmlFor={id}
        className={`field__radio ${disabled && "field__radio--inactive"}`}
      >
        <input
          id={id}
          name={id}
          type="radio"
          value={radioName}
          className={`field__radio--button ${className}`}
        />
        {radioName}
      </div>
    );
  } else {
    return (
      <>
        <div className="field">
          <input
            id={id}
            name={id}
            type={type}
            placeholder={placeholder}
            className={`field__input field__input--error ${className}`}
          />
          {icon && (
            <img src={icon} alt="Dynamic Icon" className="field__icon" />
          )}
        </div>
      </>
    );
  }
};
