import { useState } from "react";
import Pagination from "../Pagination/Pagination";

const Table = ({ apartments }) => {
  const [activePage, setActivePage] = useState(1);
  const rowsPerPage = 50;
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
            const {
              title,
              bedrooms,
              price,
              size,
              pricePerSqMeter,
              id,
              constructionType,
              floor,
              completionProgress,
            } = apartment;

            return (
              <tr key={id}>
                <td>{index + 1}</td>
                <td className="left">{title.slice(0, 25)}...</td>
                <td>{bedrooms}</td>
                <td>€{price.toLocaleString()}</td>
                <td>{size}</td>
                <td>{Number(pricePerSqMeter)}</td>
                <td>{completionProgress}</td>
                <td>{constructionType}</td>
                <td>{floor}</td>
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
