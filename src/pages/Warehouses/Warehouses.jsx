import "./Warehouses.scss";

import { MainBrowser } from "../../component/MainBrowser/MainBrowser";
import { WarehouseList } from "../../component/WarehouseList/WarehouseList";

export const Warehouses = () => {
  return (
    <main className="main">
      <MainBrowser browserName="Warehouses">
        <WarehouseList />
      </MainBrowser>
    </main>
  );
};
