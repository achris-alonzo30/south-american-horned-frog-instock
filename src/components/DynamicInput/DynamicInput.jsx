import "./DynamicInput.scss";

export const DynamicInput = ({
  id,
  icon,
  type,
  radioName,
  placeholder,
  disabled = false,
  checked,
  onChange,
}) => {
  if (type === "radio") {
    return (
      <div
        htmlFor={id}
        className={`field__radio ${
          checked ? "field__radio--active" : "field__radio--inactive"
        }`}
      >
        <input
          id={id}
          name={id}
          type="radio"
          value={radioName}
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          className={`field__radio--button ${
            checked
              ? "field__radio--button-active"
              : "field__radio--button-inactive"
          }`}
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
            className="field__input field__input--error"
          />
          {icon && (
            <img src={icon} alt="Dynamic Icon" className="field__icon" />
          )}
        </div>
      </>
    );
  }
};
