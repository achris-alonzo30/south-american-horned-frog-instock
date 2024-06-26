import "./Card.scss";

import { useNavigate } from "react-router-dom";

import searchIcon from "../../assets/icons/search-24px.svg";
import arrowLeft from "../../assets/icons/arrow_back-24px.svg";

import { DynamicButton } from "../DynamicButton/DynamicButton";
import { DynamicInput } from "../DynamicInput/DynamicInput";

export const Card = ({ 
  isFooter = false,
  isSearch,
  children, 
  arrowIcon, 
  browserName,  
 }) => {
  return (
    <section className="card">


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


