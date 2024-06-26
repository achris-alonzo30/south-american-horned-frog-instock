import "./EditWarehouse.scss"
import axios from "axios"
import {useNavigate, useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'
import {MainBrowser} from "../MainBrowser/MainBrowser"
import { DynamicButton} from "../DynamicButton/DynamicButton"

const EditWarehouse = () => {

    const { warehouseId } = useParams();
    const navigate = useNavigate();


    const [whName, setWhName] = useState('');
    const [whAddress, setAddress] = useState('');
    const [whCity, setCity] = useState('');
    const [whCountry, setCountry] = useState('');

    const [contactName, setContactName] = useState('');
    const [contactPosition, setContactPosition] = useState('');
    const [contactPhn, setContactPhn] = useState('');
    const [contactEmail, setContactEmail] = useState('');

    useEffect(() => {
        const fetchWarehouse = async () => {
            try {
                const response = await axios.get(`/api/warehouses/${warehouseId}`);
                const warehouse = response.data;
                setWhName(warehouse.warehouse_name);
                setAddress(warehouse.address);
                setCity(warehouse.city);
                setCountry(warehouse.country);
                setContactName(warehouse.contact_name);
                setContactPosition(warehouse.contact_position);
                setContactPhn(warehouse.contact_phone);
                setContactEmail(warehouse.contact_email);
            } catch (error) {
                console.error("Error fetching warehouse data", error);
                alert("Error fetching warehouse data");
            }
        };

        fetchWarehouse();
    }, [warehouseId]);


    const saveHandler = async (event) => {
        event.preventDefault();


        const warehouseEditInfo = {
            warehouse_name: whName,
            address: whAddress,
            city: whCity,
            country: whCountry,
            contact_name: contactName,
            contact_position: contactPosition,
            contact_phone: contactPhn,
            contact_email: contactEmail
        };

        try {
            const response = await axios.put(`/api/warehouses/${warehouseId}`, warehouseEditInfo);
            alert("We have successfully edited your warehouse information!");
            navigate(-1);

        } catch (error) {
            console.error("Error updating warehouse", error);
            alert("Error updating warehouse");

        }
    };

    const cancelHandler = (event) => {
        event.preventDefault();
        navigate('/');
    }

    return(
        <main className="main">
            <MainBrowser browserName="Edit Warehouse" isFooter={false} isHeaderBorderVariable={true}>
                <form className = "edit-wh__form" onSubmit = {saveHandler}>
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
