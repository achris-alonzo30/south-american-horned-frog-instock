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
        <section>
          <hgroup>
            <h4>WAREHOUSE ADDRES:</h4>
            <p>33 Pearl Street SW, 
              Washington, USA</p>
          </hgroup>

          <aside>
            <hgroup>
              <h4>CONTACT NAME:</h4>
              <p>Graeme Lyon </p>
              <p>Warehouse Manager</p>
            </hgroup>
            <hgroup>
              <h4>CONTACT INFORMATION:</h4>
              <p>+1 (647) 504-0911</p>
              <a href="mailto:glyon@instock.com">glyon@instock.com</a>
            </hgroup>
          </aside>
        </section>
        <WarehouseList />
      </Card>
    </main>
  );
};
