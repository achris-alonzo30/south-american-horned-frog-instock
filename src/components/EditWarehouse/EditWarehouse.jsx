import "./EditWarehouse.scss"
import axios from "axios"
import {useNavigate, useParams} from 'react-router-dom'
import {useState} from 'react'
import {MainBrowser} from "../MainBrowser/MainBrowser"
import { DynamicButton} from "../DynamicButton/DynamicButton"

const EditWarehouse = () => {

    const warehouse = {
        id: "22",
        name: "Sephora",
        address: "123 Beauty St",
        city: "Los Angeles",
        country: "USA",
        contactName: "Jane Doe",
        contactPosition: "Warehouse Manager",
        contactPhn: "123-456-7890",
        contactEmail: "janedoe@sephora.com"
    }


    // const { warehouseId } = useParams();

    const [whName, setWhName] = useState(warehouse.name)
    const [whAddress, setAddress] = useState(warehouse.address)
    const [whCity, setCity] = useState(warehouse.city)
    const [whCountry, setCountry] = useState(warehouse.country)

    const [contactName, setContactName] = useState(warehouse.contactName)
    const [contactPosition, setContactPosition] = useState(warehouse.contactPosition)
    const [contactPhn, setContactPhn] = useState(warehouse.contactPhn)
    const [contactEmail, setContactEmail] = useState(warehouse.contactEmail)


    const navigate = useNavigate();

    const saveHandler = async (event) => {
        event.preventDefault();


        const warehouseEditInfo = {
            id: warehouse.id,
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
        <main className="main">
            <MainBrowser browserName="Edit Warehouse" isFooter={false} isHeaderBorderVariable={true}>
                <form className = "edit-wh__form" onClick = {saveHandler}>
                    <div className = "details-sections">
                        <div className ="edit-wh__form-section warehouse-details">
                            <h2 className = "edit-wh__subheader"> Warehouse Details</h2>
                            <label className = "edit-wh__label" htmlFor="wh-name">Warehouse Name</label>
                            <input className = "edit-wh__input" type="text" id="wh-name" value={whName} onChange={(event) => setWhName(event.target.value)} placeholder = "Warehouse Name"/>
                            <label className = "edit-wh__label" htmlFor="wh-add">Street Address</label>
                            <input className = "edit-wh__input" type="text" id="wh-add" value={whAddress} onChange={(event) => setAddress(event.target.value)} placeholder = "Street Address"/>
                            <label className = "edit-wh__label" htmlFor="wh-city">City</label>
                            <input className = "edit-wh__input" type="text" id="wh-city" value={whCity} onChange={(event) => setCity(event.target.value)} placeholder = "City"/>
                            <label className = "edit-wh__label" htmlFor="wh-country">Warehouse Country</label>
                            <input className = "edit-wh__input" type="text" id="wh-country" value={whCountry}  onChange={(event) => setCountry(event.target.value)} placeholder = "Country"/>
                        </div>

                        <div className ="edit-wh__form-section contact-details">
                            <h2 className = "edit-wh__subheader"> Contact Details</h2>
                            <label className = "edit-wh__label" htmlFor="wh-contact-name">Contact Name</label>
                            <input className = "edit-wh__input" type="text" id="wh-name" value={contactName} onChange={(event) => setContactName(event.target.value)} placeholder = "Contact Name"/>
                            <label className = "edit-wh__label" htmlFor="wh-contact-pstn">Contact Position</label>
                            <input className = "edit-wh__input" type="text" id="wh-contact-pstn" value={contactPosition} onChange={(event) => setContactPosition(event.target.value)} placeholder = "Contact Position"/>
                            <label className = "edit-wh__label" htmlFor="wh-contact-phn">Phone Number</label>
                            <input className = "edit-wh__input" type="text" id="wh-contact-phn" value={contactPhn} onChange={(event) => setContactPhn(event.target.value)} placeholder = "Phone Number"/>
                            <label className = "edit-wh__label" htmlFor="wh-email">Email </label>
                            <input className = "edit-wh__input" type="text" id="wh-email" value={contactEmail} onChange={(event) => setContactEmail(event.target.value)} placeholder = "Email"/>
                        </div>
                    </div>

                    <div className = "cancel-submit__container">
                        <DynamicButton variant="cancel" onClick = {cancelHandler} />
                        <DynamicButton variant="save"/>
                    </div>
                </form>
            </MainBrowser>

        </main>
    )
}

export default EditWarehouse;
