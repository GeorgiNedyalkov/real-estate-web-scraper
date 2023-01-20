import React from "react";
import { useState } from "react";
import Pagination from "./Pagination";

const SampleTable = () => {
  const [activePage, setActivePage] = useState(1);
  const rowsPerPage = 3;
  const count = rows.length;
  const totalPages = Math.ceil(count / rowsPerPage);
  const calculatedRows = rows.slice(
    (activePage - 1) * rowsPerPage,
    activePage * rowsPerPage
  );

  return (
    <>
      <table>
        <thead>
          <tr>
            {columns.map((column) => {
              return <th key={column.assessor}>{column.label}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => {
            return (
              <tr key={row.id}>
                {columns.map((column) => {
                  return (
                    <td key={column.assessor}>
                      {column.assessor === "price" || column.assessor === "size"
                        ? "€ " + row[column.assessor].toLocaleString()
                        : row[column.assessor]}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>

      <Pagination
        count={count}
        totalPages={totalPages}
        rowsPerPage={rowsPerPage}
        activePage={activePage}
        setActivePage={setActivePage}
      />
    </>
  );
};

export default SampleTable;

const columns = [
  { assessor: "id", label: "" },
  { assessor: "title", label: "Title" },
  { assessor: "price", label: "Price" },
  { assessor: "size", label: "Size" },
  { assessor: "constructionProgress", label: "Construction Progress" },
];

const rows = [
  {
    id: 1,
    title: "One Bed",
    price: 100000,
    size: 100,
    constructionProgress: "In development",
  },
  {
    id: 2,
    title: "Two Bed",
    price: 110000,
    size: 100,
    constructionProgress: "In development",
  },
  {
    id: 3,
    title: "Three Bed",
    price: 150000,
    size: 100,
    constructionProgress: "In construction",
  },
  {
    id: 4,
    title: "One Bed",
    price: 90000,
    size: 100,
    constructionProgress: "Completed",
  },
  {
    id: 5,
    title: "One Bed",
    price: 100000,
    size: 100,
    constructionProgress: "In development",
  },
  {
    id: 6,
    title: "Two Bed",
    price: 110000,
    size: 100,
    constructionProgress: "In development",
  },
  {
    id: 7,
    title: "Three Bed",
    price: 150000,
    size: 100,
    constructionProgress: "In construction",
  },
  {
    id: 8,
    title: "One Bed",
    price: 90000,
    size: 100,
    constructionProgress: "Completed",
  },
  {
    id: 9,
    title: "One Bed",
    price: 100000,
    size: 100,
    constructionProgress: "In development",
  },
  {
    id: 10,
    title: "Two Bed",
    price: 110000,
    size: 100,
    constructionProgress: "In development",
  },
  {
    id: 11,
    title: "Three Bed",
    price: 150000,
    size: 100,
    constructionProgress: "In construction",
  },
  {
    id: 12,
    title: "One Bed",
    price: 90000,
    size: 100,
    constructionProgress: "Completed",
  },
];
