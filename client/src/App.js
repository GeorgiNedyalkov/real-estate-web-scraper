import "./App.css"
import Header from "./Header"
import Card from "./Card"
import Table from "./Table"
import axios from "axios"
import scraper from "./api/scraper"
import { useState, useEffect } from "react"

function App() {
  // async function loadApartments() {
  //   const res = await axios.get("https://localhost:3000/properties")
  //   const apartments = res.json()
  // }

  const [apartments, setApartments] = useState([])

  useEffect(() => {
    setApartments(scraper)
    console.log(apartments)
  }, [apartments])

  return (
    <div className="App">
      <Header />
      <div className="main__key-stats">
        <Card title="Number of Properties" stat="144" />
        <Card title="Average Size" stat="61 sq.m." />
        <Card title="Average Price per sq.m." stat="€ 850 / sq.m." />
        <Card title="Average Sales Price" stat="€ 70,000" />
      </div>
      <div className="main__table">
        <Table />
      </div>
    </div>
  )
}

export default App
