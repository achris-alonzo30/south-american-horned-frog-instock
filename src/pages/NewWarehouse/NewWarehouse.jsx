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

function NewWarehouse({ isNewWarehouse }) {
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

    function validatePhone(phone) {
      const phoneRegex =
        /^\+([0-9]{1})\s\(([0-9]{3})\)\s([0-9]{3})\-([0-9]{4})$/;
      return phoneRegex.test(phone);
    }

    if (!validateEmail(formValues.contact_email)) {
      return alert("Invalid email format");
    } else if (!validatePhone(formValues.contact_phone)) {
      return alert(
        "Invalid phone number format. Correct phone number format: +X (XXX) XXX-XXXX"
      );
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
    postWarehouse(formValues);
    navigate(-1);
    isNewWarehouse++;
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
        <NewWarehouseForm
          formValues={formValues}
          setFormValues={setFormValues}
          handleSubmit={handleSubmit}
          emptyFields={emptyFields}
          setEmptyFields={setEmptyFields}
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
