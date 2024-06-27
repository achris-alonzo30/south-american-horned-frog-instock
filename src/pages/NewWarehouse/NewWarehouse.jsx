import "./NewWarehouse.scss";

import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { postWarehouse } from "../../lib/api-warehouses";

import { Card } from "../../components/Card/Card";
import { CardHeader } from "../../components/CardHeader/CardHeader";
import { CardFooter } from "../../components/CardFooter/CardFooter";
import { DynamicButton } from "../../components/DynamicButton/DynamicButton";
import NewWarehouseForm from "../../components/NewWarehouseForm/NewWarehouseForm";
// import { LoadingSpinner } from "../../components/LoadingSpinner/LoadingSpinner";

function NewWarehouse() {
  const [formValues, setFormValues] = useState({
    warehouse_name: "",
    address: "",
    city: "",
    country: "",
    contact_name: "",
    contact_position: "",
    contact_phone: "",
    contact_email: "",
  });
  const [isError, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
    if (!value) {
      setError(true);
      return;
    } else {
      setError(false);
    }
    postWarehouse(formValues);
  };

  const navigate = useNavigate();

  const handleCancel = (e) => {
    e.preventDefault();
    navigate("/");
  };

  console.log(formValues);

  return (
    <main className="main">
      <Card>
        <CardHeader
          flexStyle="flexRow"
          browserName="Add New Warehouse"
          withArrow
        ></CardHeader>
        <NewWarehouseForm
          formValues={formValues}
          setFormValues={setFormValues}
          handleSubmit={handleSubmit}
          isError={isError}
          setError={setError}
        ></NewWarehouseForm>
        <CardFooter>
          <DynamicButton
            variant="cancel"
            onClick={handleCancel}
          ></DynamicButton>
          <DynamicButton
            variant="add"
            addButtonName="Add Warehouse"
            type="submit"
            onClick={handleSubmit}
          ></DynamicButton>
        </CardFooter>
      </Card>
    </main>
  );
}

export default NewWarehouse;
