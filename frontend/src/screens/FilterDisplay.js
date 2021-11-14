import React from "react";

const FilterDisplay = () => {
  return (
    <div>
      {/* FILTER COMPONENT 1 */}
      <h3 className="title-filter py-md-2 mt-4">Filter</h3>

      {/* FILTER COMPONENT 2 */}
      <>
        <h5 className="filter-sub-comp p-2 mt-4 mb-2">Category</h5>
        <div className="filter-list">
          <input className="filter-checkbox" type="checkbox" value="gadget" />
          <label className="filter-name">Gadget</label>
        </div>
        <div className="filter-list">
          <input
            className="filter-checkbox"
            type="checkbox"
            value="household"
          />
          <label className="filter-name">Household</label>
        </div>
        <div className="filter-list">
          <input
            className="filter-checkbox"
            type="checkbox"
            value="environment"
          />
          <label className="filter-name">Environment</label>
        </div>
        <div className="filter-list">
          <input className="filter-checkbox" type="checkbox" value="gadget" />
          <label className="filter-name">Gadget</label>
        </div>
      </>

      {/* FILTER COMPONENT 3 */}
      <>
        <h5 className="filter-sub-comp p-2 mt-4 mb-2">Price</h5>
        <div className="filter-list">
          <input className="filter-checkbox" type="checkbox" value="RM100" />
          <label className="filter-name">RM100</label>
        </div>
        <div className="filter-list">
          <input className="filter-checkbox" type="checkbox" value="RM200" />
          <label className="filter-name">RM200</label>
        </div>
        <div className="filter-list">
          <input className="filter-checkbox" type="checkbox" value="RM300" />
          <label className="filter-name">RM300</label>
        </div>
        <div className="filter-list">
          <input className="filter-checkbox" type="checkbox" value="RM400" />
          <label className="filter-name">RM400</label>
        </div>
      </>
    </div>
  );
};

export default FilterDisplay;
