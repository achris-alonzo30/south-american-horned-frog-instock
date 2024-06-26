import "./WarehouseDetails.scss";

import { Card } from "../Card/Card";
import searchIcon from "../../assets/icons/search-24px.svg";
import { WarehouseList } from "../WarehouseList/WarehouseList";
import { CardHeader } from "../CardHeader/CardHeader";
import { CardFooter } from "../CardFooter/CardFooter";
import { DynamicInput } from "../DynamicInput/DynamicInput";
import { DynamicButton } from "../DynamicButton/DynamicButton";

export const WarehouseDetails = () => {
  return (
    <main className="main">
      <Card>
        <CardHeader flexStyle="flexRow" browserName="Washington" withArrow>
          <DynamicButton variant="edit" />
        </CardHeader>
        <section className="card__details">
          <hgroup className="card__details--address">
            <h4 className="card__details--theader">WAREHOUSE ADDRES:</h4>
            <p className="card__details--content">33 Pearl Street SW, 
              Washington, USA</p>
          </hgroup>

          <aside className="card__details--contacts">
            <hgroup className="card__details--contactName">
              <h4 className="card__details--theader">CONTACT NAME:</h4>
              <p className="card__details--content">Graeme Lyon </p>
              <p className="card__details--content">Warehouse Manager</p>
            </hgroup>
            <hgroup className="card__details--contactInfo">
              <h4 className="card__details--theader">CONTACT INFORMATION:</h4>
              <p className="card__details--content">+1 (647) 504-0911</p>
              <a href="mailto:glyon@instock.com" className="card__details--content">glyon@instock.com</a>
            </hgroup>
          </aside>
        </section>
        <WarehouseList />
        <CardFooter>
          <DynamicButton variant="cancel" type="" />
          <DynamicButton variant="save" type="submit" />
        </CardFooter>
      </Card>
    </main>
  );
};
