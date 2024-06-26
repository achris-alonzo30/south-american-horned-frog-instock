import "./WarehouseDetails.scss";

import { MainBrowser } from "../../components/MainBrowser/MainBrowser";
import { WarehouseList } from "../../components/WarehouseList/WarehouseList";

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
