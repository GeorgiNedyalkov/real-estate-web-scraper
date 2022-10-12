import React from "react"
import { ToggleButtonGroup, ToggleButton } from "@mui/material"
import "./FilterListToggle.css"

// icons
import BedIcon from "@mui/icons-material/Bed"

const FilterListToggle = ({ options, value, selectToggle }) => {
  return (
    <ToggleButtonGroup
      value={value}
      onChange={selectToggle}
      className=""
      exclusive
    >
      {options.map(({ label, id, value }) => (
        <ToggleButton key={id} value={value}>
          <BedIcon /> {label}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  )
}

export default FilterListToggle
