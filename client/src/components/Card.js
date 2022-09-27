import React from "react"
import "./Card.css"

function Card({ title, stat }) {
  return (
    <div className="card">
      <h3 className="card__title">{title}</h3>
      <p className="card__stats">{stat}</p>
    </div>
  )
}

export default Card
