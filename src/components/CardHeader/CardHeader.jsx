import "./CardHeader.scss";

import { useNavigate } from "react-router-dom";

import arrowLeft from "../../assets/icons/arrow_back-24px.svg";

export const CardHeader = ({ 
  children, 
  className, 
  flexStyle,
  browserName,
  withArrow = false
}) => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <section className={`card-header ${flexStyle}`}>
      <nav className="card-header__left">
        {withArrow && (
          <img
            src={arrowLeft}
            onClick={goBack}
            className="card-header__left--arrow"
            alt="Arrow Point Left in Indigo Color"
          />
        )}

        <h1 className="card-header__left--title">{browserName}</h1>
      </nav>

      <nav className={`${(flexStyle === "flexCol") && "card-header__right"} ${className}`}>{children}</nav>
    </section>
  );
};