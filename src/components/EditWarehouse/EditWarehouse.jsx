import "./EditWarehouse.scss"
import axios from "axios"
import {useNavigate, useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'
import { Card } from "../Card/Card"
import { CardHeader } from "../CardHeader/CardHeader"
import { DynamicButton } from "../DynamicButton/DynamicButton"
import errorIcon from "../../assets/icons/error-24px.svg"

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

    const [emptyFields, setEmptyFields] = useState({});


    useEffect(() => {
        const fetchWarehouse = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/api/warehouses/${warehouseId}`);
                const warehouse = response.data;

                setWhName(warehouse.warehouse_name || "");
                setAddress(warehouse.address || "" );
                setCity(warehouse.city || "" );
                setCountry(warehouse.country || "" );
                setContactName(warehouse.contact_name || "");
                setContactPosition(warehouse.contact_position || "");
                setContactPhn(warehouse.contact_phone || "");
                setContactEmail(warehouse.contact_email || "");
            } catch (error) {
                console.error("Error fetching warehouse data", error);
                alert("Error fetching warehouse data");
            }
        };

        fetchWarehouse();
    }, [warehouseId]);

    const validateForm = () => {
        const errors = {};
        if (!whName) errors.whName = true;
        if (!whAddress) errors.whAddress = true;
        if (!whCity) errors.whCity = true;
        if (!whCountry) errors.whCountry = true;
        if (!contactName) errors.contactName = true;
        if (!contactPosition) errors.contactPosition = true;
        if (!contactPhn) errors.contactPhn = true;
        if (!contactEmail) errors.contactEmail = true;

        setEmptyFields(errors);

        return Object.keys(errors).length === 0;
    };

    const saveHandler = async (event) => {
        event.preventDefault();

        if (!validateForm()){
            return;
        }

        const warehouseEditInfo = {
            id : warehouseId,
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
            const response = await axios.put(`http://localhost:8080/api/warehouses/${warehouseId}`, warehouseEditInfo);

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
             <Card>
                <CardHeader flexStyle="flexRow" browserName="Edit Warehouse" withArrow tabletHeaderBorder={true} />
                <form className = "edit-wh__form" onSubmit = {saveHandler}>
                    <div className = "details-sections">
                        <div className ="edit-wh__form-section warehouse-details">
                            <h2 className = "edit-wh__subheader"> Warehouse Details</h2>
                            <label className = "edit-wh__label" htmlFor="wh-name">Warehouse Name</label>
                            <input className = {`edit-wh__input ${emptyFields.whName ? 'error' : ''}`} type="text" id="wh-name" value={whName} onChange={(event) => setWhName(event.target.value)} placeholder = "Warehouse Name"/>
                            <div className = {`${emptyFields.whName ? 'error-message' : 'error-message_hide'}`}>
                                <img className = "error_icon" src={errorIcon}/>
                                This field is required
                            </div>
                            <label className = "edit-wh__label" htmlFor="wh-add">Street Address</label>
                            <input className = {`edit-wh__input ${emptyFields.whAddress ? 'error' : ''}`} type="text" id="wh-add" value={whAddress} onChange={(event) => setAddress(event.target.value)} placeholder = "Street Address"/>
                            <div className = {`${emptyFields.whAddress ? 'error-message' : 'error-message_hide'}`}>
                                <img className = "error_icon" src={errorIcon}/>
                                This field is required
                            </div>
                            <label className = "edit-wh__label" htmlFor="wh-city">City</label>
                            <input className = {`edit-wh__input ${emptyFields.whCity ? 'error' : ''}`} type="text" id="wh-city" value={whCity} onChange={(event) => setCity(event.target.value)} placeholder = "City"/>
                            <div className = {`${emptyFields.whCity ? 'error-message' : 'error-message_hide'}`}>
                                <img className = "error_icon" src={errorIcon}/>
                                This field is required
                            </div>
                            <label className = "edit-wh__label" htmlFor="wh-country">Warehouse Country</label>
                            <input className = {`edit-wh__input ${emptyFields.whCountry ? 'error' : ''}`} type="text" id="wh-country" value={whCountry}  onChange={(event) => setCountry(event.target.value)} placeholder = "Country"/>
                            <div className = {`${emptyFields.whCountry ? 'error-message' : 'error-message_hide'}`}>
                                <img className = "error_icon" src={errorIcon}/>
                                This field is required
                            </div>
                        </div>

                        <div className ="edit-wh__form-section contact-details">
                            <h2 className = "edit-wh__subheader"> Contact Details</h2>
                            <label className = "edit-wh__label" htmlFor="wh-contact-name">Contact Name</label>
                            <input className = {`edit-wh__input ${emptyFields.contactName ? 'error' : ''}`} type="text" id="wh-name" value={contactName} onChange={(event) => setContactName(event.target.value)} placeholder = "Contact Name"/>
                            <div className = {`${emptyFields.contactName ? 'error-message' : 'error-message_hide'}`}>
                                <img className = "error_icon" src={errorIcon}/>
                                This field is required
                            </div>
                            <label className = "edit-wh__label" htmlFor="wh-contact-pstn">Contact Position</label>
                            <input className = {`edit-wh__input ${emptyFields.contactPosition ? 'error' : ''}`} type="text" id="wh-contact-pstn" value={contactPosition} onChange={(event) => setContactPosition(event.target.value)} placeholder = "Contact Position"/>
                            <div className = {`${emptyFields.contactPosition ? 'error-message' : 'error-message_hide'}`}>
                                <img className = "error_icon" src={errorIcon}/>
                                This field is required
                            </div>
                            <label className = "edit-wh__label" htmlFor="wh-contact-phn">Phone Number</label>
                            <input className = {`edit-wh__input ${emptyFields.contact_phone ? 'error' : ''}`} type="text" id="wh-contact-phn" value={contactPhn} onChange={(event) => setContactPhn(event.target.value)} placeholder = "Phone Number"/>
                            <div className = {`${emptyFields.contactPhone ? 'error-message' : 'error-message_hide'}`}>
                                <img className = "error_icon" src={errorIcon}/>
                                This field is required
                            </div>
                            <label className = "edit-wh__label" htmlFor="wh-email">Email </label>
                            <input className = {`edit-wh__input ${emptyFields.contactEmail ? 'error' : ''}`} type="text" id="wh-email" value={contactEmail} onChange={(event) => setContactEmail(event.target.value)} placeholder = "Email"/>
                            <div className = {`${emptyFields.contactEmail ? 'error-message' : 'error-message_hide'}`}>
                                <img className = "error_icon" src={errorIcon}/>
                                This field is required
                            </div>
                        </div>
                    </div>

                    <div className = "cancel-submit__container">
                        <DynamicButton variant="cancel" onClick = {cancelHandler} />
                        <DynamicButton variant="save" type="submit"/>
                    </div>
                </form>
            </Card>

        </main>
    )
}

export default EditWarehouse;
