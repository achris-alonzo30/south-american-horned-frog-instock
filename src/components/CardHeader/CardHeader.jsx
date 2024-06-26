export const CardHeader = () => {
  return (
    <section className="card__header">
      <aside className="card__header--title">
        {arrowIcon && (
          <img
            src={arrowLeft}
            onClick={goBack}
            className="card__header--arrow"
            alt="Arrow Point Left in Indigo Color"
          />
        )}

        <h1 className="card__header--pageName">{browserName}</h1>
      </aside>

      <aside className="card__header--search">
        {/* Hide class: visibility*/}
        <DynamicInput
          type="text"
          id="search"
          icon={searchIcon}
          placeholder="Search..."
          className="visibility-hidden"
        />
        <DynamicButton variant="add" addButtonName="Add New Warehouses" />
      </aside>
    </section>
  );
};
