import "./AddWarehouseItem.scss";

import errorIcon from "../../assets/icons/error-24px.svg";

function AddWarehouseItem({
  formValues,
  setFormValues,
  handleSubmit,
  emptyFields,
  setEmptyFields,
}) {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form__content form__content--warehouse-details">
        <h2 className="form__title">Warehouse Details</h2>
        <label className="form__label">Warehouse Name</label>
        <input
          type="text"
          className={`form__input ${
            emptyFields.warehouse_name ? "form__input--error" : ""
          }`}
          name="warehouse_name"
          value={formValues.warehouse_name}
          onChange={handleInputChange}
          placeholder="Warehouse Name"
        />
        <div
          className={`${
            emptyFields.warehouse_name ? "error-message" : "error-message_hide"
          }`}
        >
          <img className="error_icon" src={errorIcon} />
          This field is required
        </div>
        <label className="form__label">Street Adress</label>
        <input
          className={`form__input ${
            emptyFields.address ? "form__input--error" : ""
          }`}
          type="text"
          name="address"
          value={formValues.address}
          onChange={handleInputChange}
          placeholder="Street Adress"
        />
        <div
          className={`${
            emptyFields.address ? "error-message" : "error-message_hide"
          }`}
        >
          <img className="error_icon" src={errorIcon} />
          This field is required
        </div>
        <label className="form__label">City</label>
        <input
          className={`form__input ${
            emptyFields.city ? "form__input--error" : ""
          }`}
          type="text"
          name="city"
          value={formValues.city}
          onChange={handleInputChange}
          placeholder="City"
        />
        <div
          className={`${
            emptyFields.city ? "error-message" : "error-message_hide"
          }`}
        >
          <img className="error_icon" src={errorIcon} />
          This field is required
        </div>
        <label className="form__label">Country</label>
        <input
          className={`form__input ${
            emptyFields.country ? "form__input--error" : ""
          }`}
          type="text"
          name="country"
          value={formValues.country}
          onChange={handleInputChange}
          placeholder="Country"
        />
        <div
          className={`${
            emptyFields.country ? "error-message" : "error-message_hide"
          }`}
        >
          <img className="error_icon" src={errorIcon} />
          This field is required
        </div>
      </div>
      <div className="form__content form__content--contact-details">
        <h2 className="form__title">Contact Details</h2>
        <label className="form__label">Contact Name</label>
        <input
          className={`form__input ${
            emptyFields.contact_name ? "form__input--error" : ""
          }`}
          type="text"
          name="contact_name"
          value={formValues.contact_name}
          onChange={handleInputChange}
          placeholder="Contact Name"
        />
        <div
          className={`${
            emptyFields.contact_name ? "error-message" : "error-message_hide"
          }`}
        >
          <img className="error_icon" src={errorIcon} />
          This field is required
        </div>
        <label className="form__label">Position</label>
        <input
          className={`form__input ${
            emptyFields.contact_position ? "form__input--error" : ""
          }`}
          type="text"
          name="contact_position"
          value={formValues.contact_position}
          onChange={handleInputChange}
          placeholder="Position"
        />
        <div
          className={`${
            emptyFields.contact_position
              ? "error-message"
              : "error-message_hide"
          }`}
        >
          <img className="error_icon" src={errorIcon} />
          This field is required
        </div>
        <label className="form__label">Phone Number</label>
        <input
          className={`form__input ${
            emptyFields.contact_phone ? "form__input--error" : ""
          }`}
          type="text"
          name="contact_phone"
          value={formValues.contact_phone}
          onChange={handleInputChange}
          placeholder="Phone Number"
        />
        <div
          className={`${
            emptyFields.contact_phone ? "error-message" : "error-message_hide"
          }`}
        >
          <img className="error_icon" src={errorIcon} />
          This field is required
        </div>
        <label className="form__label">Email</label>
        <input
          className={`form__input ${
            emptyFields.contact_email ? "form__input--error" : ""
          }`}
          type="text"
          name="contact_email"
          value={formValues.contact_email}
          onChange={handleInputChange}
          placeholder="Email"
        />
        <div
          className={`${
            emptyFields.contact_email ? "error-message" : "error-message_hide"
          }`}
        >
          <img className="error_icon" src={errorIcon} />
          This field is required
        </div>
      </div>
    </form>
  );
}

export default AddWarehouseItem;
