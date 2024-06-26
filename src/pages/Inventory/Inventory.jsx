import "./Inventory.scss";

import searchIcon from "../../assets/icons/search-24px.svg";

import { Card } from "../../components/Card/Card";
import { CardHeader } from "../../components/CardHeader/CardHeader";
import { DynamicButton } from "../../components/DynamicButton/DynamicButton";
import { DynamicInput } from "../../components/DynamicInput/DynamicInput";
import { InventoryList } from "../../components/InventoryList/InventoryList";

export const Inventory = () => {
  return (
    <main className="main">
      <Card>
        <CardHeader flexStyle="flexCol" browserName="Inventory">
          <DynamicInput
            type="text"
            id="search"
            icon={searchIcon}
            placeholder="Search..."
          />
          <DynamicButton variant="add" addButtonName="Add New Item" />
        </CardHeader>
        <InventoryList />
      </Card>
    </main>
  );
};
