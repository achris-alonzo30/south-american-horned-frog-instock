import "./NewWarehouseForm.scss";

import { postWarehouse } from "../../lib/api-warehouses";
import { useState, useEffect } from "react";

function NewWarehouseForm() {
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });

    postWarehouse(formValues);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div>
        <h2>Warehouse Details</h2>
        <label htmlFor="">
          Warehouse Name
          <input
            type="text"
            name="warehouse_name"
            value={formValues.warehouse_name}
            placeholder="Warehouse Name"
          />
        </label>

        <label htmlFor="">
          Street Adress
          <input
            type="text"
            name="address"
            value={formValues.address}
            placeholder="Street Adress"
          />
        </label>
        <label htmlFor="">
          City
          <input
            type="text"
            name="city"
            value={formValues.city}
            placeholder="City"
          />
        </label>
        <label htmlFor="">
          Country
          <input
            type="text"
            name="country"
            value={formValues.country}
            placeholder="Country"
          />
        </label>
      </div>
      <div>
        <h2>Contact Details</h2>
        <label htmlFor="">
          Contact Name
          <input
            type="text"
            name="contact_name"
            value={formValues.contact_name}
            placeholder="Contact Name"
          />
        </label>
        <label htmlFor="">
          Position
          <input
            type="text"
            name="contact_position"
            value={formValues.contact_position}
            placeholder="Position"
          />
        </label>
        <label htmlFor="">
          Phone Number
          <input
            type="text"
            name="contact_phone"
            value={formValues.contact_phone}
            placeholder="Phone Number"
          />
        </label>
        <label htmlFor="">
          Email
          <input
            type="text"
            name="contact_email"
            value={formValues.contact_email}
            placeholder="Email"
          />
        </label>
      </div>
    </form>
  );
}

export default NewWarehouseForm;
