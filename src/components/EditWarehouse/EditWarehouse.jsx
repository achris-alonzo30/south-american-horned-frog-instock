import "./EditWarehouse.scss"
import axios from "axios"
import {useNavigate, useParams} from 'react-router-dom'
import {useState} from 'react'

const EditWarehouse = ({warehouse}) => {

    const { warehouseId } = useParams();

    const [whName, setWhName] = useState(warehouse.name)
    const [whAddress, setAddress] = useState(warehouse.address)
    const [whCity, setCity] = useState(warehouse.city)
    const [whCountry, setCountry] = useState(warehouse.country)

    const [contactName, setContactName] = useState(warehouse.contactName)
    const [contactPosition, setContactPosition] = useState(warehouse.contactPosition)
    const [contactPhn, setContactPhn] = useState(warehouse.contactPhn)
    const [contactEmail, setContactEmail] = useState(warehouse.contactEmail)


    const navigate = useNavigate();

    const submitHandler = async (event) => {
        event.preventDefault();


        const warehouseEditInfo = {
            id: warehouseId,
            whName: whName,
            whAddress: whAddress,
            whCity: whCity,
            whCountry: whCountry,
            contactName: contactName,
            contactPosition: contactPosition,
            contactPhn: contactPhn,
            contactEmail: contactEmail

        }

        try {
            const response = await axios.post(`${api_url}`, warehouseEditInfo)
            alert("We have successfully edited your warehouse information!");
            navigate(-1);

        } catch (error) {
            console.error("UPLOAD_PAGE", error)
        }
    };

    const cancelHandler = (event) => {
        event.preventDefault();
        navigate('/');
    }

    return(
        <>
        <h1 className = "edit-wh__header"> Edit Warehouse </h1>
        <form className = "edit-wh__form" onSubmit = {submitHandler}>

            <div className ="edit-wh__form-section warehouse-details">
                <h2 className = "edit-wh__subheader"> Warehouse Details</h2>
                <label className = "edit-wh-label" htmlFor="wh-name">Warehouse Name</label>
                <input className = "edit-wh-input" type="text" id="wh-name" value={whName} onChange={(event) => setWhName(event.target.value)} placeholder = "Warehouse Name"/>
                <label className = "edit-wh-label" htmlFor="wh-add">Street Address</label>
                <input className = "edit-wh-input" type="text" id="wh-add" value={whAddress} onChange={(event) => setAddress(event.target.value)} placeholder = "Street Address"/>
                <label className = "edit-wh-label" htmlFor="wh-city">City</label>
                <input className = "edit-wh-input" type="text" id="wh-city" value={whCity} onChange={(event) => setCity(event.target.value)} placeholder = "City"/>
                <label className = "edit-wh-label" htmlFor="wh-country">Warehouse Country</label>
                <input className = "edit-wh-input" type="text" id="wh-country" value={whCountry}  onChange={(event) => setCountry(event.target.value)} placeholder = "Country"/>
            </div>

            <div className ="edit-wh__form-section contact-details">
                <h2 className = "edit-wh__subheader"> Contact Details</h2>
                <label className = "edit-wh-label" htmlFor="wh-contact-name">Contact Name</label>
                <input className = "edit-wh-input" type="text" id="wh-name" value={contactName} onChange={(event) => setContactName(event.target.value)} placeholder = "Contact Name"/>
                <label className = "edit-wh-label" htmlFor="wh-contact-pstn">Contact Position</label>
                <input className = "edit-wh-input" type="text" id="wh-contact-pstn" value={contactPosition} onChange={(event) => setContactPosition(event.target.value)} placeholder = "Contact Position"/>
                <label className = "edit-wh-label" htmlFor="wh-contact-phn">Phone Number</label>
                <input className = "edit-wh-input" type="text" id="wh-contact-phn" value={contactPhn} onChange={(event) => setContactPhn(event.target.value)} placeholder = "Phone Number"/>
                <label className = "edit-wh-label" htmlFor="wh-email">Email </label>
                <input className = "edit-wh-input" type="text" id="wh-email" value={contactEmail} onChange={(event) => setContactEmail(event.target.value)} placeholder = "Email"/>
            </div>

            <div className = "cancel-submit__container">
                <button type="cancel" className="edit-wh__cancel-button" onClick={cancelHandler}>Cancel</button>
                <button type="submit" className="edit-wh__submit-button">Submit</button>
            </div>
        </form>
        </>
    )
}

export default EditWarehouse;
