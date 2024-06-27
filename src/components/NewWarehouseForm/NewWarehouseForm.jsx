import "./NewWarehouseForm.scss";

import { useState, useEffect } from "react";

function NewWarehouseForm({
  formValues,
  setFormValues,
  handleSubmit,
  isError,
  setError,
}) {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const { name, value } = e.target;
  //   setFormValues({
  //     ...formValues,
  //     [name]: value,
  //   });

  //   postWarehouse(formValues);
  // };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form__content form__content--warehouse-details">
        <h2 className="form__title">Warehouse Details</h2>
        <label className="form__label">Warehouse Name</label>
        <input
          type="text"
          className={`form__input ${isError ? "form__input--error" : ""}`}
          name="warehouse_name"
          value={formValues.warehouse_name}
          onChange={handleInputChange}
          placeholder="Warehouse Name"
        />

        <label className="form__label">Street Adress</label>
        <input
          className={`form__input ${isError ? "form__input--error" : ""}`}
          type="text"
          name="address"
          value={formValues.address}
          onChange={handleInputChange}
          placeholder="Street Adress"
        />
        <label className="form__label">City</label>
        <input
          className={`form__input ${isError ? "form__input--error" : ""}`}
          type="text"
          name="city"
          value={formValues.city}
          onChange={handleInputChange}
          placeholder="City"
        />
        <label className="form__label">Country</label>
        <input
          className={`form__input ${isError ? "form__input--error" : ""}`}
          type="text"
          name="country"
          value={formValues.country}
          onChange={handleInputChange}
          placeholder="Country"
        />
      </div>
      <div className="form__content form__content--contact-details">
        <h2 className="form__title">Contact Details</h2>
        <label className="form__label">Contact Name</label>
        <input
          className={`form__input ${isError ? "form__input--error" : ""}`}
          type="text"
          name="contact_name"
          value={formValues.contact_name}
          onChange={handleInputChange}
          placeholder="Contact Name"
        />
        <label className="form__label">Position</label>
        <input
          className={`form__input ${isError ? "form__input--error" : ""}`}
          type="text"
          name="contact_position"
          value={formValues.contact_position}
          onChange={handleInputChange}
          placeholder="Position"
        />
        <label className="form__label">Phone Number</label>
        <input
          className={`form__input ${isError ? "form__input--error" : ""}`}
          type="text"
          name="contact_phone"
          value={formValues.contact_phone}
          onChange={handleInputChange}
          placeholder="Phone Number"
        />
        <label className="form__label">Email</label>
        <input
          className={`form__input ${isError ? "form__input--error" : ""}`}
          type="text"
          name="contact_email"
          value={formValues.contact_email}
          onChange={handleInputChange}
          placeholder="Email"
        />
      </div>
    </form>
  );
}

export default NewWarehouseForm;
