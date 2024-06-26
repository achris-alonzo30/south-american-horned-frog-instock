import "./Warehouses.scss";

import { MainBrowser } from "../../components/MainBrowser/MainBrowser";
import { WarehouseList } from "../../components/WarehouseList/WarehouseList";
import WarehouseDetails from "../../components/WarehouseDetails/WarehouseDetails";

export const Warehouses = () => {
  return (
    <main className="main">
      <MainBrowser browserName="Warehouses" isFooter>
        <WarehouseDetails />
      </MainBrowser>
    </main>
  );
};
