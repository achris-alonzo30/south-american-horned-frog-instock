import "./EditInventoryItem.scss"
import axios from "axios"
import {useNavigate, useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'
import {DynamicInput} from "../DynamicInput/DynamicInput"
import {DynamicButton} from "../DynamicButton/DynamicButton"
import {MainBrowser} from "../MainBrowser/MainBrowser"


const EditInventoryItem = () => {

    // const { itemId } = useParams();

    const item = {
        id: "3",
        item_name: "Laptop",
        category: "Electronics",
        description: "A high-end gaming laptop with the latest specifications.",
        status: "In Stock",
        warehouse_id: "3",
    };

    const warehouseMap = {
        "1": "New York",
        "2": "Washington",
        "3": "New Jersey",
        "4": "San Francisco",
        "5": "Santa Monica",
        "6": "Seattle",
        "7": "Miami",
        "8": "Boston"
    };

    const mappedWarehouse = warehouseMap[item.warehouse_id]

    const [name, setName] = useState(item.item_name)
    const [description, setDescription] = useState(item.description)
    const [category, setCategory] = useState(item.category)
    const [warehouse, setWarehouse] = useState("")
    const [warehouseId, setWarehouseId] = useState(item.warehouse_id)
    const [stockStatus, setStockStatus] = useState(item.status)

    useEffect(() => {
        setWarehouse(mappedWarehouse);
    }, [mappedWarehouse]);

    const navigate = useNavigate();

    const saveHandler = async (event) => {
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

    const warehouseChangeHandler = (event) => {
        const reverseMap = {
            "New York": "1",
            "Washington": "2",
            "New Jersey" : "3",
            "San Francisco" : "4",
            "Santa Monica" : "5",
            "Seattle" : "6",
            "Miami" : "7",
            "Boston" : "8"
        };
        setWarehouse(event.target.value)
        const mappedWarehouseID = reverseMap[event.target.value]
        setWarehouseId(mappedWarehouseID)
        console.log(mappedWarehouseID)
    }

    return(
        <main className="main">
            <MainBrowser browserName="Edit Inventory Item" isFooter={false} isHeaderBorderVariable={false}>
                <form className = "edit-item__form" onSubmit = {saveHandler}>
                    <div className = "details-sections">
                        <div className ="edit-item__form-section item-details">
                            <h2 className = "edit-item__subheader"> Item Details</h2>
                            <label className = "edit-item__label" htmlFor="item-name">Item Name</label>
                            <input className = "edit-item__input" type="text" id="item-name" value={name} onChange={(event) => setName(event.target.value)} placeholder = "Item Name"/>
                            <label className = "edit-item__label" htmlFor="item-desc">Description</label>
                            <textarea className = "edit-item__textareaInput" id="item-desc" value={description} onChange={(event) => setDescription(event.target.value)} placeholder = "Item Description"/>
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
                            <h2 className = "edit-item__subheader"> Item Availability</h2>
                            <label className = "edit-item__label" htmlFor="item-status">Status</label>

                            <div className = "item-status__container">
                                <DynamicInput type="radio" radioName= "In Stock" disabled={true} />
                                <DynamicInput type="radio" radioName="Out of Stock"/>
                            </div>
                            <label className = "edit-item__label" htmlFor="item-status">Warehouse</label>
                            <select className = "edit-item__select" value={warehouse} onChange={warehouseChangeHandler}>
                                <option value="New York">New York</option>
                                <option value="Washington">Washington</option>
                                <option value="New Jersey">New Jersey</option>
                                <option value="San Francisco">San Francisco</option>
                                <option value="Santa Monica"> Santa Monica</option>
                                <option value="Seattle"> Seattle</option>
                                <option value="Miami"> Miami</option>
                                <option value="Boston">Boston</option>
                            </select>

                        </div>


                    </div>

                    <div className = "cancel-submit__container">
                        <DynamicButton variant="cancel" onClick = {cancelHandler} />
                        <DynamicButton type="submit" variant="save"/>
                    </div>
                </form>
            </MainBrowser>

        </main>
    );
};

export default EditInventoryItem;
