import React from "react"
import "./AverageStat.css"

const AverageStat = ({ title, stat, low, high }) => {
  return (
    <div className="averageStat__wraper">
      <h3 className="averageStat__title">{title}</h3>
      <h4 className="averageStat__stat">{stat}</h4>

      <div className="lowHigh">
        <p className="low">Low</p>
        <p>High</p>
      </div>
      <div className="greenbar"></div>
      <div className="prices">
        <div className="lowestPrice">{low}</div>
        <div className="highestPrice">{high}</div>
      </div>
    </div>
  )
}

export default AverageStat
