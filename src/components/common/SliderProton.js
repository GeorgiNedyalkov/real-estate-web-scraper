import React from "react"
import "./SliderProton.css"

import Slider from "@mui/material/Slider"

const SliderProton = ({ value, changedPrice }) => {
  return (
    <div className="slider__wrap">
      <Slider
        className="slider"
        value={value}
        onChange={changedPrice}
        valueLabelDisplay="on"
        min={10000}
        max={50000}
      />
    </div>
  )
}

export default SliderProton
