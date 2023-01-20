import React from "react";

const Table = ({ apartments }) => {
  return (
    <table>
      <thead>
        <tr>
          {columns.map((column) => {
            return <th key={column.assessor}>{column.label}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        {apartments.map((apartment, index) => {
          const { price, size, pricePerSqMeter, id } = apartment;
          return (
            <tr key={id}>
              <td>{index + 1}</td>
              <td className="left">{apartment.title.slice(0, 25)}...</td>
              <td>€{price.toLocaleString()}</td>
              <td>{size}</td>
              <td>{Number(pricePerSqMeter.toFixed(0))}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;

const columns = [
  { assessor: "id", label: "ID" },
  { assessor: "title", label: "Title" },
  { assessor: "price", label: "Price" },
  { assessor: "size", label: "Size" },
  { assessor: "pricePerSqMeter", label: "Price / sq.m." },
];
