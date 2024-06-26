import "./EditInventoryItem.scss"
import axios from "axios"
import {useNavigate, useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'
import {DynamicInput} from "../DynamicInput/DynamicInput"
import {DynamicButton} from "../DynamicButton/DynamicButton"
import {MainBrowser} from "../MainBrowser/MainBrowser"


const EditInventoryItem = (item) => {

    const { itemId } = useParams();
    const navigate = useNavigate();

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

    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [category, setCategory] = useState("")
    const [warehouse, setWarehouse] = useState("")
    const [warehouseId, setWarehouseId] = useState("")
    const [stockStatus, setStockStatus] = useState("")

    useEffect(() => {
        const fetchInventoryItem = async () => {
            try {
                const response = await axios.get('/api/inventories');
                const items = response.data;
                const item = items.find(item => item.id.toString() === itemId);

                if (item) {
                    setName(item.item_name);
                    setDescription(item.description);
                    setCategory(item.category);
                    setWarehouse(warehouseMap[item.warehouse_id]);
                    setWarehouseId(item.warehouse_id);
                    setStockStatus(item.status);
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
    }, [itemId, navigate]);

    const mappedWarehouse = warehouseMap[item.warehouse_id]



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
            <MainBrowser browserName="Edit Inventory Item" isFooter={false} isHeaderBorderVariable={true}>
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
                        <DynamicButton variant="cancel"  onClick = {cancelHandler} />
                        <DynamicButton type="submit" variant="save"/>
                    </div>
                </form>
            </MainBrowser>

        </main>
    );
};

export default EditInventoryItem;
