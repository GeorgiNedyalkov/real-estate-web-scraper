import { useState } from "react";
import Pagination from "../Pagination/Pagination";

const Table = ({ apartments }) => {
  const [activePage, setActivePage] = useState(1);
  const rowsPerPage = 100;
  const count = apartments.length;
  const totalPages = Math.ceil(count / rowsPerPage);

  const calculatedRows = apartments.slice(
    (activePage - 1) * rowsPerPage,
    activePage * rowsPerPage
  );

  return (
    <>
      <h2>Properties</h2>
      <table className="propertyTable">
        <thead>
          <tr>
            {columns.map((column) => {
              return <th key={column.assessor}>{column.label}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {calculatedRows.map((apartment, index) => {
            return (
              <tr key={apartment._id}>
                <td>{index + 1}</td>
                <td className="left">{apartment.title.slice(0, 25)}...</td>
                <td>{apartment.bedrooms}</td>
                <td>€{apartment.price.toLocaleString()}</td>
                <td>{apartment.size}</td>
                <td>{Number(apartment.pricePerSqMeter)}</td>
                <td>{apartment.completionProgress}</td>
                <td>{apartment.constructionType}</td>
                <td>{apartment.floor}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Pagination
        activePage={activePage}
        setActivePage={setActivePage}
        count={count}
        rowsPerPage={rowsPerPage}
        totalPages={totalPages}
      />
    </>
  );
};

export default Table;

const columns = [
  { assessor: "id", label: "ID" },
  { assessor: "title", label: "Title" },
  { assessor: "bedrooms", label: "Bedrooms" },
  { assessor: "price", label: "Price" },
  { assessor: "size", label: "Size" },
  { assessor: "pricePerSqMeter", label: "Price / sq.m." },
  { assessor: "completionProgress", label: "Completion Progress" },
  { assessor: "constructionType", label: "Construction Type" },
  { assessor: "floor", label: "Floor" },
];
