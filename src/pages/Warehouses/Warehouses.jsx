import "./Warehouses.scss";

import { MainBrowser } from "../../components/MainBrowser/MainBrowser";
import { WarehouseList } from "../../components/WarehouseList/WarehouseList";

export const Warehouses = () => {
  return (
    <main className="main">
      <MainBrowser 
        browserName="Warehouses" 
      >
        <WarehouseList />
      </MainBrowser>
    </main>
  );
};