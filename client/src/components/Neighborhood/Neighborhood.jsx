const Neighborhood = ({ neighborhood, onChooseNeighborhood }) => {
  return (
    <div className="neighborhood__container">
      <h2 className="neighborhood">
        Neighbourhood <span className="highlight">{neighborhood}</span>
      </h2>
      <select
        name="neighborhood"
        onChange={(e) => onChooseNeighborhood(e.target.value)}
      >
        <option value="">Select neighborhood</option>
        <option value="Sarafovo">Sarafovo</option>
        <option value="Izgrev">Izgrev</option>
        <option value="Lazur">Lazur</option>
        <option value="Slaveikov">Slaveikov</option>
      </select>
    </div>
  );
};

export default Neighborhood;
