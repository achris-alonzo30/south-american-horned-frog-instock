import "./Warehouses.scss";

import searchIcon from "../../assets/icons/search-24px.svg";

import { Card } from "../../components/Card/Card";
import { CardHeader } from "../../components/CardHeader/CardHeader";
import { WarehouseList } from "../../components/WarehouseList/WarehouseList";
import { CardFooter } from "../../components/CardFooter/CardFooter";
import { DynamicButton } from "../../components/DynamicButton/DynamicButton";
import { DynamicInput } from "../../components/DynamicInput/DynamicInput";

export const Warehouses = () => {
  return (
    <main className="main">
      <Card>
        <CardHeader flexStyle="flexCol" browserName="Warehouse">
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
