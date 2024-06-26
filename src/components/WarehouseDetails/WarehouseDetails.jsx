import "./WarehouseDetails.scss";

import { MainBrowser } from "../Card/Card";
import { WarehouseList } from "../WarehouseList/WarehouseList";

export const WarehouseDetails = () => {
  return (
    <main className="main">
      <MainBrowser 
        arrowIcon
        browserName="Washington" 
      >
        <WarehouseList />
      </MainBrowser>
    </main>
  );
};
