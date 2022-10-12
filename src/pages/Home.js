import React, { useState, useEffect } from "react"
import "./Home.css"
import Header from "../components/Home/Header"
import FilterPanel from "../components/Home/FilterPanel"
import PropertyTable from "../components/Home/PropertyTable"
import StatsBoard from "../components/Home/StatsBoard"
import EmptyView from "../components/common/EmptyView"

import { properties } from "../utils/constants"

const Home = () => {
  const [apartments, setApartments] = useState(properties)

  const [selectedApartmentType, setSelectedApartmentType] = useState(null)
  const [selectedPrice, setSelectedPrice] = useState([10000, 100000])
  const [selectedSize, setSelectedSize] = useState([30, 100])

  const [resultFound, setResultFound] = useState(true)
  const [completionProgress, setCompletionProgress] = useState([
    {
      id: 1,
      checked: false,
      label: "Completed",
    },
    {
      id: 2,
      checked: false,
      label: "In Progress",
    },
    {
      id: 3,
      checked: false,
      label: "Pre Construction",
    },
  ])

  const handleSelectApartmentType = (event, value) => {
    return !value ? null : setSelectedApartmentType(value)
  }

  const handleChangedPrice = (event, value) => {
    setSelectedPrice(value)
    console.log(selectedPrice)
  }

  const handleChangeChecked = (id) => {
    const progressState = completionProgress
    const changeCheckedProgress = progressState.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    )

    setCompletionProgress(changeCheckedProgress)
  }

  const applyFilters = () => {
    let updatedApartmentsList = apartments

    // apartment type filter
    if (selectedApartmentType) {
      updatedApartmentsList = updatedApartmentsList.filter(
        (item) => item.type === selectedApartmentType
      )
    }

    // completion progress filter
    const progressChecked = completionProgress
      .filter((item) => item.checked)
      .map((item) => item.label.toLowerCase())

    if (progressChecked.length) {
      updatedApartmentsList = updatedApartmentsList.filter((item) =>
        progressChecked.includes(item.progress)
      )
    }

    setApartments(updatedApartmentsList)

    !updatedApartmentsList.length ? setResultFound(false) : setResultFound(true)
  }

  useEffect(() => {
    applyFilters()
  }, [selectedApartmentType, completionProgress])

  return (
    <div className="home">
      <Header />
      <div className="home__panel">
        <div className="home__filter">
          <FilterPanel
            selectToggle={handleSelectApartmentType}
            selectedApartmentType={selectedApartmentType}
            selectedPrice={selectedPrice}
            changedPrice={handleChangedPrice}
            completionProgress={completionProgress}
            changeChecked={handleChangeChecked}
          />
        </div>
        <div className="home__apartmentList">
          <StatsBoard />

          {resultFound ? (
            <PropertyTable apartments={apartments} />
          ) : (
            <EmptyView />
          )}
        </div>
      </div>
    </div>
  )
}

export default Home
