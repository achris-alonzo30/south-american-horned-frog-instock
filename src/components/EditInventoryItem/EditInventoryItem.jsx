import "./EditInventoryItem.scss"
import axios from "axios"
import {useNavigate, useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'
import {DynamicInput} from "../DynamicInput/DynamicInput"
import {DynamicButton} from "../DynamicButton/DynamicButton"
import {Card} from "../Card/Card";
import {CardHeader} from "../CardHeader/CardHeader";

const EditInventoryItem = () => {

    // const { itemId } = useParams();

    const itemId = "3";
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

    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [category, setCategory] = useState("")
    const [warehouse, setWarehouse] = useState("")
    const [warehouseId, setWarehouseId] = useState("")
    const [stockStatus, setStockStatus] = useState("")
    const [quantity, setQuantity] = useState("")

    useEffect(() => {
        const fetchInventoryItem = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/inventories');
                const items = response.data;
                const item = items.find(item => item.id.toString() === itemId);

                console.log(item)


                if (item) {
                    setName(item.item_name);
                    setDescription(item.description);
                    setCategory(item.category);
                    setWarehouse(item.warehouse_name);
                    setWarehouseId(warehouseMap[item.warehouse_name]);
                    setStockStatus(item.status);
                    setQuantity(item.quantity);
                } else {
                    alert("Item not found");
                    navigate('/');
                }
            } catch (error) {
                console.error("Error fetching inventory items", error);
                alert("Error fetching inventory items");
            }
        };

        fetchInventoryItem();
    }, [itemId]);

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
        debugger
        setWarehouseId(mappedWarehouseID)
    }

    const saveHandler = async (event) => {
        event.preventDefault();


        const itemEditInfo = {
            id: itemId,
            warehouse_id: warehouseId,
            item_name: name,
            category: category,
            description: description,
            status: stockStatus,
            quantity: quantity,
            warehouse_name: warehouse,
        }
        console.log(itemEditInfo)
        debugger

        try {
            await axios.put(`http://localhost:8080/api/inventories/${itemId}`, itemEditInfo);
            alert("We have successfully edited your item information!");
            navigate(-1);

        } catch (error) {
            console.error("Item Edit Page", error)
        }
    };

    const cancelHandler = (event) => {
        event.preventDefault();
        navigate('/');
    }

    return(
        <main className="main">
            <Card>
                <CardHeader flexStyle="flexRow" browserName="Edit Inventory Item" tabletHeaderBorder={true} withArrow/>
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
                                <DynamicInput type="radio" radioName= "In Stock" checked={stockStatus === "In Stock"} onChange={() => setStockStatus("In Stock")}/>
                                <DynamicInput type="radio" radioName="Out of Stock" checked={stockStatus === "Out of Stock"} onChange={() => setStockStatus("Out of Stock")} />
                            </div>
                            <label className = "edit-item__label" htmlFor="item-status">Warehouse</label>
                            <select className = "edit-item__select" value={warehouse} onChange={warehouseChangeHandler}>
                                <option value="Brooklyn Warehouse">New York</option>
                                <option value="Washington">Washington</option>
                                <option value="Jersey">New Jersey</option>
                                <option value="SF">San Francisco</option>
                                <option value="Santa Monica"> Santa Monica</option>
                                <option value="Seattle"> Seattle</option>
                                <option value="Miami"> Miami</option>
                                <option value="Boston">Boston</option>
                            </select>
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

export default EditInventoryItem;
