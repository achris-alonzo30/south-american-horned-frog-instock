import "./WarehouseDetails.scss";

import { MainBrowser } from "../MainBrowser/MainBrowser";
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
