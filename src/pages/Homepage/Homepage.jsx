import "./Homepage.scss"

export const Homepage = () => {
  return (
    <main className="card">
      <section className="card__header">
        <h1 className="card__header--title">Warehouses</h1>

        <aside className="card__header--search">
          <div className="card__header--searchBar">
            <input
              type="text"
              placeholder="Search..."
              className="card__header--input"
            />
            <img
              src={searchIcon}
              alt="Magnifying Glass Icon"
              className="card__header--icon"
            />
          </div>
          <button className="card__header--searchButton">
            <span>+</span>
            Add New Warehouse
          </button>
        </aside>
      </section>
    </main>
  );
};
