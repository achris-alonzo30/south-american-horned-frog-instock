import "./Warehouses.scss";

import { MainBrowser } from "../../components/MainBrowser/MainBrowser";
import { WarehouseList } from "../../components/WarehouseList/WarehouseList";
import WarehouseInventory from "../../components/WarehouseInventory/WarehouseInventory";

export const Warehouses = () => {
  return (
    <main className="main">
      <MainBrowser browserName="Warehouses" isFooter>
        <WarehouseInventory />
      </MainBrowser>
    </main>
  );
};
