import "./Warehouses.scss";

import { Card } from "../../components/Card/Card";
import { WarehouseList } from "../../components/WarehouseList/WarehouseList";

export const Warehouses = () => {
  return (
    <main className="main">
      <Card 
        browserName="Warehouses" 
      >
        <WarehouseList />
      </Card>
    </main>
  );
};
