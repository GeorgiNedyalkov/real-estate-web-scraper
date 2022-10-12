import React from "react"
import "./StatsBoard.css"
import CountStat from "../common/CountStat"
import BedroomIcon from "../../assets/bedroom.png"
import BuildingIcon from "../../assets/building.png"
import ConstructionIcon from "../../assets/construction.png"
import ProjectIcon from "../../assets/project.png"
import AverageStat from "../common/AverageStat"

const StatsBoard = () => {
  return (
    <section className="statsBoard__wrap">
      <h2 className="statsBoard__title">Izgrev</h2>

      <h4>Number of properties: 500</h4>

      <div className="statsBoard__counters">
        <CountStat img={BedroomIcon} type="One" count={210} />
        <CountStat img={BedroomIcon} type="Two" count={290} />
        <CountStat img={BedroomIcon} type="Three" count={100} />
        <CountStat img={BuildingIcon} type="Completed" count={200} />
        <CountStat img={ConstructionIcon} type="In Progress" count={100} />
        <CountStat img={ProjectIcon} type="Pre Construction" count={100} />
      </div>

      <div className="statsBoard__averageStats">
        <AverageStat
          title="Average Price"
          stat="€60,000"
          low="€40,000"
          high="€100,000"
        />
        <AverageStat
          title="Average Price per m2"
          stat="€850/m2"
          low="€650/m2"
          high="€1,000/m2"
        />
        <AverageStat
          title="Average Size"
          stat="65 m2"
          low="50 m2"
          high="100 m2"
        />
      </div>
    </section>
  )
}

export default StatsBoard
