import React from "react"
import "./Card.css"

function Card(props) {
  return (
    <div className="card">
      <h3 className="card__title">{props.title}</h3>
      <p className="card__stats">{props.stat}</p>
    </div>
  )
}

export default Card
