import React from "react"
import "./PropertyTable.css"

const PropertyTable = ({ apartments }) => {
  const { title, type, size, price, pricePerSqMeters, progress } = apartments
  return (
    <section className="propertyTable">
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Type</th>
            <th>Size</th>
            <th>Price</th>
            <th>Price sq.m.</th>
            <th>Completion progress</th>
            <th>Construction type</th>
            <th>Floor</th>
            <th>Year Built</th>
          </tr>
        </thead>
        <tbody>
          {apartments.map(
            (
              {
                title,
                type,
                size,
                price,
                pricePerSqMeters,
                progress,
                constructionType,
                floor,
                yearBuilt,
              },
              index
            ) => (
              <tr>
                <td>{index + 1}</td>
                <td>{title}</td>
                <td>{type}</td>
                <td>{size} кв.м.</td>
                <td>€ {price.toFixed(0)}</td>
                <td>
                  € {pricePerSqMeters.toFixed(0)} <i>на кв.м.</i>
                </td>
                <td>{progress || "None"}</td>
                <td>{constructionType}</td>
                <td>{floor}</td>
                <td>{yearBuilt}</td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </section>
  )
}

export default PropertyTable
