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
        <CardHeader flexStyle="flexCol" browserName="Warehouse" className="">
          <DynamicInput
            type="text"
            id="search"
            icon={searchIcon}
            placeholder="Search..."
          />
          <DynamicButton variant="add" addButtonName="Add New Warehouse" />
        </CardHeader>
        <WarehouseList />
        <CardFooter>
          <DynamicButton variant="cancel" />
          <DynamicButton variant="save" />
        </CardFooter>
      </Card>
    </main>
  );
};
