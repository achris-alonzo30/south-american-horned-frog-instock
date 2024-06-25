import "./MainBrowser.scss";

import searchIcon from "../../assets/icons/search-24px.svg";
import { DynamicButton } from "../DynamicButton/DynamicButton";
import { useNavigate } from "react-router-dom";

export const MainBrowser = ({
  
  children,
  browserName,
  
}) => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  }

  return (
    <main className="card">
      <section className="card__header">
        <aside className="card__header--title">
            <h1 className="card__header--pageName">{browserName}</h1>
        </aside>

        <aside className="card__header--search">
          <div className="card__header--searchBar">
            <input
              type="text"
              placeholder="Search..."
              className="card__header--input"
            />
            <img
              src={searchIcon}
              alt="Magnifying Glass Icon"
              className="card__header--icon"
            />
          </div>
          <DynamicButton variant="add" />
        </aside>
      </section>

      { children }
    </main>
  );
};