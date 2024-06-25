import "./DynamicInput.scss";

export const DynamicInput = ({ 
    id, 
    icon, 
    type, 
    select, 
    radioName,
    placeholder,
    disabled = false,
}) => {
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
        {icon && <img src={icon} alt="Dynamic Icon" className="field__icon" />}
      </div>
      <label htmlFor={id} className={`field__radio ${disabled && "field__radio--inactive"}`}>
        <input 
            id={id} 
            name={id} 
            type="radio" 
            value={radioName} 
            className="field__radio--button" 
        />
        {radioName}
      </label>
      <select>
        
      </select>
    </>
  );
};
