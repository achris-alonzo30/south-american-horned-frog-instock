import "./NewWarehouse.scss";

import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
// import { postWarehouse } from "../../lib/api-warehouses";

import { Card } from "../../components/Card/Card";
import { CardHeader } from "../../components/CardHeader/CardHeader";
import { CardFooter } from "../../components/CardFooter/CardFooter";
import { DynamicButton } from "../../components/DynamicButton/DynamicButton";
import NewWarehouseForm from "../../components/NewWarehouseForm/NewWarehouseForm";
// import { LoadingSpinner } from "../../components/LoadingSpinner/LoadingSpinner";

function NewWarehouse() {
  return (
    <main className="main">
      <Card>
        <CardHeader
          flexStyle="flexRow"
          browserName="Add New Warehouse"
          withArrow
        ></CardHeader>
        <NewWarehouseForm></NewWarehouseForm>
        <CardFooter>
          <DynamicButton variant="cancel"></DynamicButton>
          <DynamicButton
            variant="add"
            addButtonName="Add Warehouse"
          ></DynamicButton>
        </CardFooter>
      </Card>
    </main>
  );
}

export default NewWarehouse;
