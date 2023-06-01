import React, { useState } from "react";

const INITIAL_FORM_VALUES = {
  title: "",
  bedrooms: "",
  bathrooms: "",
  size: "",
  price: "",
  completionProgress: "",
};

const Filters = ({ applyFilters }) => {
  const [formValues, setFormValues] = useState(INITIAL_FORM_VALUES);

  const onFormChange = (e) => {
    setFormValues((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  const onFormSubmit = (e) => {
    e.preventDefault();

    applyFilters(formValues);
  };

  return (
    <div className="filters">
      <h3>Contruction type</h3>
      <select name="construction progress" onChange={(e) => onFormChange}>
        <option value="">All Properties</option>
        <option value="completed">Completed</option>
        <option value="construction">In construction</option>
        <option value="project">In Project</option>
      </select>

      <form onSubmit={onFormSubmit}>
        <div>
          <label htmlFor="title">Search</label>
          <input
            value={formValues.title}
            onChange={onFormChange}
            type="text"
            name="title"
            id="title"
            placeholder="Search"
          />
        </div>
        <div>
          <label htmlFor="bedrooms">Bedrooms</label>
          <input
            value={formValues.bedrooms}
            onChange={onFormChange}
            type="number"
            name="bedrooms"
            id="bedrooms"
            placeholder="Bedrooms"
          />
        </div>
        <div>
          <label htmlFor="bathrooms">Bathrooms</label>
          <input
            value={formValues.bathrooms}
            onChange={onFormChange}
            type="number"
            name="bathrooms"
            id="bathrooms"
            placeholder="Bathrooms"
          />
        </div>
        <div>
          <label htmlFor="size">Size</label>
          <input
            value={formValues.size}
            onChange={onFormChange}
            type="number"
            name="size"
            id="size"
            placeholder="Size"
          />
        </div>
        <div>
          <label htmlFor="price">Price</label>
          <input
            value={formValues.price}
            onChange={onFormChange}
            type="number"
            name="price"
            id="price"
            placeholder="Price"
          />
        </div>
        <div>
          <button className="btn" type="submit">
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default Filters;
