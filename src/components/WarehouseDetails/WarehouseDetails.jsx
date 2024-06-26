import "./WarehouseDetails.scss";

import { Card } from "../Card/Card";
import { WarehouseList } from "../WarehouseList/WarehouseList";

export const WarehouseDetails = () => {
  return (
    <main className="main">
      <Card
        arrowIcon
        browserName="Washington" 
      >
        <WarehouseList />
      </Card>
    </main>
  );
};
