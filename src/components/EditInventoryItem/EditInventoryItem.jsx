import "./EditInventoryItem.scss"
import axios from "axios"
import {useNavigate, useParams} from 'react-router-dom'
import {useState} from 'react'
import {DynamicInput} from "../DynamicInput/DynamicInput"
import {MainBrowser} from "../MainBrowser/MainBrowser"


const EditInventoryItem = () => {

    // const { itemId } = useParams();

    const item = {
        id: id,
        item_name: name,
        category: category,
        description: description,
        status: stockStatus,
        warehouse_id: warehouse,
    }

    const [name, setName] = useState(item.item_name)
    const [description, setDescription] = useState(item.description)
    const [category, setCategory] = useState(item.category)

    const [stockStatus, setStockStatus] = useState(item.status)
    const [warehouse, setWarehouse] = useState(item.warehouse)


    const navigate = useNavigate();

    const submitHandler = async (event) => {
        event.preventDefault();


        const itemEditInfo = {
            id: item.id,
            item_name: name,
            category: category,
            description: description,
            status: stockStatus,
            warehouse_id: warehouse,
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
                        <div className ="edit-item__form-section item-details">
                            <h2 className = "edit-item__subheader"> Item Details</h2>
                            <label className = "edit-item__label" htmlFor="item-name">Item Name</label>
                            <input className = "edit-item__input" type="text" id="item-name" value={name} onChange={(event) => setName(event.target.value)} placeholder = "Item Name"/>
                            <label className = "edit-item__label" htmlFor="item-desc">Description</label>
                            <textarea className = "edit-item__textareaInput" id="item-desc" value={description} onChange={(event) => setAddress(event.target.value)} placeholder = "Item Description"/>
                            <label className = "edit-item__label" htmlFor="wh-city">Category</label>
                            <select className = "edit-item__select" value={category} onChange={(event) => setCategory(event.target.value)}>
                                <option value="Electronics">Electronics</option>
                                <option value="Gear">Gear</option>
                                <option value="Apparel">Apparel</option>
                                <option value="Accessories">Accessories</option>
                                <option value="Health"> Health</option>
                            </select>
                        </div>

                        <div className ="edit-item__form-section item-availability">
                            <h2 className = "edit-wh__subheader"> Item Availability</h2>
                            <label className = "edit-wh__label" htmlFor="item-status">Status</label>
                            <DynamicInput type="radio"></DynamicInput>
                            <DynamicInput type="radio"></DynamicInput>

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

export default EditInventoryItem;
