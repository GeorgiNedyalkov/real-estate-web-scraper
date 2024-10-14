const Neighborhood = ({ neighborhood, onNeighborhoodChange }) => {
    return (
        <div className="neighborhood__container">
            <h2 className="neighborhood">
                Neighbourhood <span className="highlight">{neighborhood}</span>
            </h2>
            <select name="neighborhood" onChange={(e) => onNeighborhoodChange(e.target.value)}>
                <option value="">Select neighborhood</option>
                <option value="sarafovo">Sarafovo</option>
                <option value="izgrev">Izgrev</option>
                <option value="lazur">Lazur</option>
                <option value="centar">Centar</option>
                <option value="slaveikov">Slaveikov</option>
            </select>
        </div>
    );
};

export default Neighborhood;
