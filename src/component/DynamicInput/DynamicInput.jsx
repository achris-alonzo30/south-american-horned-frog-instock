import "./DynamicInput.scss";

export const DynamicInput = () => {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search..."
        className="search-bar__input"
      />
      <img
        src={searchIcon}
        alt="Magnifying Glass Icon"
        className="search-bar__icon"
      />
    </div>
  );
};
