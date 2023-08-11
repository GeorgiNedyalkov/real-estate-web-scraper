import { useState } from "react";

const INITIAL_FORM_VALUES = {
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
        <form className="filters" onSubmit={onFormSubmit}>
            <div>
                <h4>Contruction type</h4>
                <select
                    name="constructionProgress"
                    onChange={(e) => onFormChange}
                >
                    <option value="">All Properties</option>
                    <option value="completed">Completed</option>
                    <option value="construction">In construction</option>
                    <option value="project">In Project</option>
                </select>
            </div>
            <div>
                <h4>Bedrooms</h4>
                <select
                    name="bedrooms"
                    value={formValues.bedrooms}
                    onChange={(e) => onFormChange}
                >
                    <option value="One bedroom">One bedroom</option>
                    <option value="Two bedroom">Two bedroom</option>
                    <option value="Three bedroom">Three bedroom</option>
                </select>
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
    );
};

export default Filters;
