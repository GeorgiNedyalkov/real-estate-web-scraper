import React from "react";

const Stat = ({ label, value, percentChange }) => {
  return (
    <div className="stat">
      <h4 className="stat__label">{label}</h4>
      <p className="stat__value">€ {value.toLocaleString()}</p>
      {Number(percentChange) >= 0 ? (
        <p className="stat__percent-change">{`+${percentChange}%`}</p>
      ) : (
        <p
          className="stat__percent-change"
          style={{ color: "red" }}
        >{`${percentChange}%`}</p>
      )}
    </div>
  );
};

export default Stat;
