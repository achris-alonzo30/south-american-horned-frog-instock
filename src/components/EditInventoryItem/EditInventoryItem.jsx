import "./EditInventoryItem.scss"
import axios from "axios"
import {useNavigate, useParams} from 'react-router-dom'
import {useState} from 'react'

const EditInventoryItem = ({item}) => {

    const { itemId } = useParams();

    const [name, setName] = useState(item.name)
    const [description, setDescription] = useState(item.description)
    const [category, setCategory] = useState(item.category)

    const [stockStatus, setStockStatus] = useState(item.stockStatus)
    const [warehouse, setWarehouse] = useState(item.warehouse)


    const navigate = useNavigate();

    const submitHandler = async (event) => {
        event.preventDefault();


        const itemEditInfo = {
            id: itemId,
            name: name,
            category: category,
            description: description,
            inStock: stockStatus,
            warehouse: warehouse,
        }

        try {
            const response = await axios.post(`${api_url}`, itemEditInfo)
            alert("We have successfully edited your item information!");
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
            <MainBrowser browserName="Edit Inventory Item" isFooter={false} isHeaderBorderVariable={true}>
                <form className = "edit-item__form" onClick = {saveHandler}>
                    <div className = "details-sections">
                        <div className ="edit-item__form-section warehouse-details">
                            <h2 className = "edit-item__subheader"> Item Details</h2>
                            <label className = "edit-item__label" htmlFor="item-name">Item Name</label>
                            <input className = "edit-item__input" type="text" id="item-name" value={name} onChange={(event) => setName(event.target.value)} placeholder = "Item Name"/>
                            <label className = "edit-item__label" htmlFor="item-desc">Description</label>
                            <textarea className = "edit-item__textareaInput" id="item-desc" value={description} onChange={(event) => setAddress(event.target.value)} placeholder = "Item Description"/>
                            <label className = "edit-wh__label" htmlFor="wh-city">Category</label>
                            <DynamicInput id = "" icon = "" type="" radioName="" placeholder="" disabled = {false} />
                            <input className = "edit-wh__input" type="text" id="wh-city" value={whCity} onChange={(event) => setCity(event.target.value)} placeholder = "City"/>
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
