export const WarehouseList = () => {
  return (
    <main className="table">
      <section className="table__header">
        <h1 className="table__header--title">Warehouses</h1>
        <aside className="table__header--search">
          <div className="table__header--searchbar">
            <input type="text" placeholder="Search..." />
          </div>
          <button className="table_header--searchbutton">
            Add New Warehouse
          </button>
        </aside>
      </section>
      <section className="table__content">
        <aside className="table__content--details">
          <hgroup className="table__content--detail">
            <h2>WAREHOUSE</h2>
            <p>Manhattan</p>
          </hgroup>
          <hgroup>
            <h2>CONTACT NAME</h2>
            <p>Parmin Aujla</p>
          </hgroup>
          <hgroup>
            <h2>ADDRESS</h2>
            <p>33 Pearl Street SW, Washington, USA</p>
          </hgroup>
          <hgroup>
            <h2>CONTACT INFORMATION</h2>
            <p>+1 (647) 504-0911</p>
            <p>gylon@instock.com</p>
          </hgroup>
          <aside className="table__content--actions">
            <button>Delete</button>
            <button>Edit</button>
          </aside>
        </aside>
      </section>
    </main>
  );
};
