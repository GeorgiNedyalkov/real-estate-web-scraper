import "./App.css"
import Header from "./Header"
import Card from "./Card"
import Table from "./Table"

function App() {
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
