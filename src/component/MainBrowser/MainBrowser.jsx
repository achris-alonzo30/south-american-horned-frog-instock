import "./MainBrowser.scss";

import { useNavigate } from "react-router-dom";

import searchIcon from "../../assets/icons/search-24px.svg";
import arrowLeft from "../../assets/icons/arrow_back-24px.svg";

import { DynamicButton } from "../DynamicButton/DynamicButton";
import { DynamicInput } from "../DynamicInput/DynamicInput";

export const MainBrowser = ({ 
  isFooter,
  isSearch,
  children, 
  arrowIcon, 
  browserName,  
  
 }) => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <section className="card">
      <section className="card__header">
        <aside className="card__header--title">
          {arrowIcon && (
            <img
              src={arrowLeft}
              onClick={goBack}
              className="card__header--arrow"
              alt="Arrow Point Left in Indigo Color"
            />
          )}

          <h1 className="card__header--pageName">{browserName}</h1>
        </aside>

        <aside className="card__header--search">
          <DynamicInput
            type="text"
            id="search"
            icon={searchIcon}
            placeholder="Search..."
          />
          <DynamicButton variant="edit" addButtonName="Add New Warehouses" />
        </aside>
      </section>

      {children}

      {isFooter && (
        <footer className="card__footer">
          <DynamicButton variant="cancel" />
          <DynamicButton variant="save" />
        </footer>
      )}
    </section>
  );
};
