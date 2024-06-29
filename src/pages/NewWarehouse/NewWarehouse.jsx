import "./NewWarehouse.scss";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postWarehouse } from "../../lib/api-warehouses";

import { Card } from "../../components/Card/Card";
import { CardHeader } from "../../components/CardHeader/CardHeader";
import { CardFooter } from "../../components/CardFooter/CardFooter";
import { DynamicButton } from "../../components/DynamicButton/DynamicButton";
import { AddWarehouseItem } from "../../components/AddWarehouseItem/AddWarehouseItem";

export const NewWarehouse = ({ setIsNewWarehouse }) => {

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

  const [emptyFields, setEmptyFields] = useState({});

  const navigate = useNavigate();

  const validateForm = () => {
    const errors = {};
    if (!formValues.warehouse_name) errors.warehouse_name = true;
    if (!formValues.address) errors.address = true;
    if (!formValues.city) errors.city = true;
    if (!formValues.country) errors.country = true;
    if (!formValues.contact_name) errors.contact_name = true;
    if (!formValues.contact_position) errors.contact_position = true;
    if (!formValues.contact_phone) errors.contact_phone = true;
    if (!formValues.contact_email) errors.contact_email = true;

    setEmptyFields(errors);

    function validateEmail(email) {
      const emailRegex =
        /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      return emailRegex.test(email);
    }

    if (!validateEmail(formValues.contact_email)) {
      return alert("Invalid email format");
    }

    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });

    if (!validateForm()) {
      return;
    }
    
    await postWarehouse(formValues);
    navigate(-1);
    setIsNewWarehouse((isNewWarehouse) => isNewWarehouse + 1);
  };

  const handleCancel = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <main className="main">
      <Card>
        <CardHeader
          flexStyle="flexRow"
          browserName="Add New Warehouse"
          withArrow
          tabletHeaderBorder
        ></CardHeader>
        <AddWarehouseItem
          formValues={formValues}
          setFormValues={setFormValues}
          handleSubmit={handleSubmit}
          emptyFields={emptyFields}
          setEmptyFields={setEmptyFields}
        ></AddWarehouseItem>
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

