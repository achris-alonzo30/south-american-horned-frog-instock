import "./AddInventoryItem.scss"
import axios from "axios"
import {useNavigate, useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'
import {DynamicInput} from "../DynamicInput/DynamicInput"
import {DynamicButton} from "../DynamicButton/DynamicButton"
import {Card} from "../Card/Card";
import {CardHeader} from "../CardHeader/CardHeader";
import errorIcon from "../../assets/icons/error-24px.svg"


const AddInventoryItem = () => {

    const navigate = useNavigate();

    const warehouseMap = {
        "Brooklyn Warehouse": "1",
        "Washington": "2",
        "Jersey" : "3",
        "SF" : "4",
        "Santa Monica" : "5",
        "Seattle" : "6",
        "Miami" : "7",
        "Boston" : "8"
    };

    const [itemId, setItemId] = useState("")
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [category, setCategory] = useState("")
    const [warehouse, setWarehouse] = useState("")
    const [warehouseId, setWarehouseId] = useState("")
    const [stockStatus, setStockStatus] = useState("")
    const [quantity, setQuantity] = useState("0")

    const [emptyFields, setEmptyFields] = useState({});


    useEffect(() => {
        const fetchInventoryItem = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/inventories');
                const items = response.data;
                const maxId = Math.max(...items.map(item => item.id))

                setItemId(maxId + 1);

            } catch (error) {
                console.error("Error fetching inventory items", error);
                alert("Error fetching inventory items");
            }
        };

        fetchInventoryItem();
    }, [itemId]);

    const validateForm = () => {
        const errors = {};
        if (!name) errors.name = true;
        if (!description) errors.description = true;
        if (!category) errors.category = true;
        if (!warehouse) errors.warehouse = true;
        if (!stockStatus) errors.stockStatus = true;
        if (!quantity) errors.quantity = true;

        setEmptyFields(errors);
        console.log(emptyFields)
        return Object.keys(errors).length === 0;
    };


    const warehouseChangeHandler = (event) => {
        const reverseMap = {
            "1": "Brooklyn Warehouse",
            "2": "Washington",
            "3": "Jersey",
            "4": "SF",
            "5": "Santa Monica",
            "6": "Seattle",
            "7": "Miami",
            "8": "Boston",
            "Brooklyn Warehouse": "1",
            "Washington": "2",
            "Jersey" : "3",
            "SF" : "4",
            "Santa Monica" : "5",
            "Seattle" : "6",
            "Miami" : "7",
            "Boston" : "8"
        };

        const mappedWarehouseID = reverseMap[event.target.value]
        setWarehouse(event.target.value)
        setWarehouseId(mappedWarehouseID)
    }
    const saveHandler = async (event) => {
        event.preventDefault();
        const parsedQuantity = parseInt(quantity);
        const updatedStockStatus = parsedQuantity === 0 ? "Out of Stock" : stockStatus;
        const updatedQuantity = updatedStockStatus === "Out of Stock" ? 0 : parsedQuantity;

        if (!validateForm()){
            return;
        }

        const newItem = {
            id: itemId,
            warehouse_id: warehouseId,
            item_name: name,
            category: category,
            description: description,
            status: updatedStockStatus,
            quantity: updatedQuantity,
            warehouse_name: warehouse,
        }

        try {
            await axios.post(`http://localhost:8080/api/inventories/`, newItem);
            alert("We have successfully added your item information!");
            navigate(-1);

        } catch (error) {
            console.error("Add Inventory Item", error)
        }
    };

    const cancelHandler = (event) => {
        event.preventDefault();
        navigate('/');
    }

    return(
        <main className="main">
            <Card>
                <CardHeader flexStyle="flexRow" browserName="Add New Inventory Item" tabletHeaderBorder={true} withArrow/>
                <form className = "add-item__form" onSubmit = {saveHandler}>
                    <div className = "details-sections">
                        <div className ="add-item__form-section item-details">
                            <h2 className = "add-item__subheader"> Item Details</h2>
                            <label className = "add-item__label" htmlFor="item-name">Item Name</label>
                            <input className = {`add-item__input ${emptyFields.name ? 'error' : ''}`} type="text" id="item-name" value={name} onChange={(event) => setName(event.target.value)} placeholder = "Item Name"/>
                            <div className = {`${emptyFields.name ? 'error-message' : 'error-message_hide'}`}>
                                <img className = "error_icon" src={errorIcon}/>
                                This field is required
                            </div>
                            <label className = "add-item__label" htmlFor="item-desc">Description</label>
                            <textarea className = {`add-item__textareaInput ${emptyFields.description ? 'error' : ''}`} id="item-desc" value={description} onChange={(event) => setDescription(event.target.value)} placeholder = "Item Description"/>
                            <div className = {`${emptyFields.description ? 'error-message' : 'error-message_hide'}`}>
                                <img className = "error_icon" src={errorIcon}/>
                                This field is required
                            </div>
                            <label className = "add-item__label" htmlFor="wh-city">Category</label>
                            <select className = {`add-item__select ${emptyFields.category ? 'error' : ''}`} value={category} onChange={(event) => setCategory(event.target.value)} placeholder = "Please Select">
                                <option>Select an Option</option>
                                <option value="Electronics">Electronics</option>
                                <option value="Gear">Gear</option>
                                <option value="Apparel">Apparel</option>
                                <option value="Accessories">Accessories</option>
                                <option value="Health"> Health</option>
                            </select>
                            <div className = {`${emptyFields.category ? 'error-message' : 'error-message_hide'}`}>
                                <img className = "error_icon" src={errorIcon}/>
                                This field is required
                            </div>
                        </div>

                        <div className ="add-item__form-section item-availability">
                            <h2 className = "add-item__subheader"> Item Availability</h2>
                            <label className = "add-item__label" htmlFor="item-status">Status</label>

                            <div className = "item-status__container">
                                <DynamicInput type="radio" radioName= "In Stock" checked={stockStatus === "In Stock"} onChange={() => setStockStatus("In Stock")}/>
                                <DynamicInput type="radio" radioName="Out of Stock" checked={stockStatus === "Out of Stock"} onChange={() => setStockStatus("Out of Stock")} />
                            </div>
                            <div className = {`${stockStatus === "In Stock" ? 'ifStock--request_quantity' : 'ifStock--request_quantity--hide'}`}>
                                <label className = "add-item__label" htmlFor="item-name">Quantity</label>
                                <input className = {`add-item__input ${emptyFields.quantity ? 'error' : ''}`} type="text" id="item-quantity" value={quantity} onChange={(event) => setQuantity(event.target.value)} placeholder = "Enter Item Quantity"/>
                                <div className = {`${emptyFields.name ? 'error-message' : 'error-message_hide'}`}>
                                    <img className = "error_icon" src={errorIcon}/>
                                    This field is required
                                </div>
                            </div>
                            <label className = "add-item__label" htmlFor="item-status">Warehouse</label>
                            <select className = {`add-item__select ${emptyFields.warehouse ? 'error' : ''}`} value={warehouse} onChange={warehouseChangeHandler} placeholder = "Please Select">
                                <option>Select an Option</option>
                                <option value="Brooklyn Warehouse">New York</option>
                                <option value="Washington">Washington</option>
                                <option value="Jersey">New Jersey</option>
                                <option value="SF">San Francisco</option>
                                <option value="Santa Monica"> Santa Monica</option>
                                <option value="Seattle"> Seattle</option>
                                <option value="Miami"> Miami</option>
                                <option value="Boston">Boston</option>
                            </select>
                            <div className = {`${emptyFields.warehouse ? 'error-message' : 'error-message_hide'}`}>
                                <img className = "error_icon" src={errorIcon}/>
                                This field is required
                            </div>
                        </div>
                    </div>

                    <div className = "cancel-submit__container">
                        <DynamicButton variant="cancel"  onClick = {cancelHandler} />
                        <DynamicButton type="submit" variant="save"/>
                    </div>
                </form>
            </Card>

        </main>
    );
};

export default AddInventoryItem;
