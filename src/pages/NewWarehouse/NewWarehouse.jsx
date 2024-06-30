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
    if (!formValues.warehouse_name)
      errors.warehouse_name = "This field is required";
    if (!formValues.address) errors.address = "This field is required";
    if (!formValues.city) errors.city = "This field is required";
    if (!formValues.country) errors.country = "This field is required";
    if (!formValues.contact_name)
      errors.contact_name = "This field is required";
    if (!formValues.contact_position)
      errors.contact_position = "This field is required";
    if (!formValues.contact_phone) {
      errors.contact_phone = "This field is required";
    } else if (!/^\d{11}$/.test(formValues.contact_phone)) {
      errors.contact_phone = "Phone number must be 11 digits";
    }

    const validateEmail = (email) => {
      const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
      return emailRegex.test(email);
    };

    if (!formValues.contact_email) {
      errors.contact_email = "This field is required";
    } else if (!validateEmail(formValues.contact_email)) {
      errors.contact_email = "Invalid email format";
    }

    setEmptyFields(errors);

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

    try {
      await postWarehouse(formValues);
      setIsNewWarehouse((isNewWarehouse) => isNewWarehouse + 1);
      navigate(-1);
    } catch (error) {
      console.error(error);
    }
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
            onClick={() => navigate("/")}
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
};
