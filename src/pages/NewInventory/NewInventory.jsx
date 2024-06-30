import "./NewInventory.scss";

import { Card } from "../../components/Card/Card";
import { CardHeader } from "../../components/CardHeader/CardHeader";
import { AddInventoryItem } from "../../components/AddInventoryItem/AddInventoryItem";


export const NewInventory = () => {
  return (
    <main className="main">
      <Card>
        <CardHeader
          flexStyle="flexRow"
          browserName="Add New Inventory Item"
          tabletHeaderBorder={true}
          withArrow
        />
        <AddInventoryItem />
      </Card>
    </main>
  );
};
