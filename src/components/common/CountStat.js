import React from "react"
import "./CountStat.css"

const CountStat = ({ img, type, count }) => {
  return (
    <div className="countStat">
      <img className="countStat__image" src={img} alt="count statistic" />
      <h3 className="countStat__type">{type}</h3>
      <p className="countStat__count">{count}</p>
    </div>
  )
}

export default CountStat
