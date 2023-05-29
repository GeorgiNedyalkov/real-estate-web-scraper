import React from "react";

const Filters = ({ onCompletionProgressChanged }) => {
  return (
    <div className="filters">
      <h3>Contruction type</h3>
      <select
        name="construction progress"
        onChange={(e) => onCompletionProgressChanged(e.target.value)}
      >
        <option value="">All Properties</option>
        <option value="completed">Completed</option>
        <option value="construction">In construction</option>
        <option value="project">In Project</option>
      </select>
    </div>
  );
};

export default Filters;
