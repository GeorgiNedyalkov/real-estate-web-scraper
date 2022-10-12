import React from "react"
import { apartmentType, constructionType } from "../../utils/constants"
import "./FilterPanel.css"

// components
import FilterListToggle from "../common/FilterListToggle"
import SliderProton from "../common/SliderProton"
import CheckboxProton from "../common/CheckboxProton"

const FilterPanel = ({
  selectedApartmentType,
  selectToggle,
  selectedPrice,
  selectedSize,
  changedPrice,
  changedSize,
  completionProgress,
  changeChecked,
}) => {
  return (
    <div className="filterPanel__wrap">
      <h1>Filter Panel</h1>

      {/* Apartment Type */}
      <div className="input-group">
        <p className="label">Apartment Type</p>
        <FilterListToggle
          options={apartmentType}
          value={selectedApartmentType}
          selectToggle={selectToggle}
        />
      </div>

      {/* Price Range */}
      <div className="input-group">
        <p className="label">Price Range</p>
        <SliderProton value={selectedPrice} changedPrice={changedPrice} />
      </div>

      {/* Size Range */}
      <div className="input-group">
        <p className="label">Size Range</p>
        <SliderProton value={selectedSize} changedPrice={changedSize} />
      </div>

      {/* Completion Progress */}
      <div className="input-group">
        <p className="label">Completion Progress</p>
        {completionProgress.map((progress) => (
          <CheckboxProton
            key={progress.id}
            completionProgress={progress}
            changeChecked={changeChecked}
          />
        ))}
      </div>

      {/* Construction Type */}
      <div className="input-group">
        <label>
          <p className="label">Construction Type</p>
          <select>
            {constructionType.map((type) => {
              return <option>{type.value}</option>
            })}
          </select>
        </label>
      </div>

      {/* Floor */}
      <div className="input-group">
        <form>
          <label>
            <p className="label">Floor Number</p>
            <select>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </label>
        </form>
      </div>

      {/* Year Built */}
      <div className="yearBuilt">
        <form>
          <label>
            Year Built
            <input type="text" />
          </label>
        </form>
      </div>
    </div>
  )
}

export default FilterPanel
