import React, { useState } from "react"
import "./Table.css"
import properties from "../src/data/properties"

function Table() {
  const [apartments, setApartments] = useState(properties)

  return (
    <div>
      <table className="table">
        <thead className="table__header">
          <th className="table__header-title">Title</th>
          <th className="table__header-title">Type</th>
          <th className="table__header-title">Size</th>
          <th className="table__header-title">Price</th>
          <th className="table__header-title">Price sq.m.</th>
          <th className="table__header-title">Year</th>
          <th className="table__header-title">Construction</th>
          <th className="table__header-title">Phase</th>
          <th className="table__header-title">Floor</th>
        </thead>
        <tbody>
          {apartments.map((apartment) => (
            <tr className="table__row">
              <td>{apartment.title}</td>
              <td>{apartment.type}</td>
              <td>{apartment.size}</td>
              <td>{apartment.price}</td>
              <td>{apartment.pricePerSqMeters}</td>
              <td>{apartment.yearBuilt}</td>
              <td>{apartment.construction}</td>
              <td>{apartment.phase}</td>
              <td>{apartment.floor}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table
