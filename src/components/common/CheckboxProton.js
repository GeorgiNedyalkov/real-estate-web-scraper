import React from "react"
import { Checkbox, FormControlLabel } from "@mui/material"

const CheckboxProton = ({ completionProgress, changeChecked }) => {
  const { checked, label, id } = completionProgress
  return (
    <FormControlLabel
      control={
        <Checkbox
          size="small"
          checked={checked}
          onChange={() => changeChecked(id)}
        />
      }
      label={label}
    />
  )
}

export default CheckboxProton
