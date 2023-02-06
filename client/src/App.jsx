import { useEffect, useState } from "react";
import "./App.css";
import Stat from "./components/Stats/Stat";
import Table from "./components/Table/Table";
import { useFetch } from "./utils/useFetch";
import { BsFillFilterCircleFill } from "react-icons/bs";
import { getOneBeds, getTwoBeds, getThreeBeds } from "./api/getApartments";
import { calcAverage, calcMarketCap } from "./utils/calculations";
import Title from "./components/Title/Title";
import Button from "./components/Button/Button";
import { Highlights } from "./components/Highlights/Highlights";
import { mockApartments } from "./data/mockData";

function App() {
  const { apartments, loading, setApartments } = useFetch();
  const [marketCap, setMarketCap] = useState(0);
  const [neighborhood, setNeighborhood] = useState("Izgrev");
  const [hasFilters, setHasFilters] = useState(false);
  const [filters, setFilters] = useState({});
  const [completionProgress, setCompletionProgress] = useState("");

  const [averagePrice, setAveragePrice] = useState(0);
  const [averageSize, setAverageSize] = useState(0);
  const [averagePricePerSqMeter, setAveragePricePerSqMeter] = useState(0);

  useEffect(() => {
    setApartments(mockApartments);
    setAveragePrice(calcAverage("price", apartments));
    setAverageSize(calcAverage("size", apartments));
    setAveragePricePerSqMeter(calcAverage("pricePerSqMeter", apartments));
  }, [apartments]);

  useEffect(() => {
    setMarketCap(calcMarketCap(apartments));
  }, [marketCap]);

  return (
    <div className="App">
      {loading ? (
        <h1 className="loader">Loading...</h1>
      ) : (
        <div className="wrapper">
          <div className="display">
            <div className="container">
              <Title city="Burgas" />
              <Highlights
                marketCap={marketCap}
                count={mockApartments.length}
                averagePrice={averagePrice}
                averageSize={averageSize}
                averagePricePerSqMeter={averagePricePerSqMeter}
              />

              <div className="stats">
                <Stat
                  value={averagePrice}
                  label="Average Price"
                  percentChange={4.5}
                />
                <Stat
                  value={averagePricePerSqMeter}
                  label="Price Per Sq.m."
                  percentChange={-4.5}
                />
                <Stat
                  value={averageSize.toFixed(2) + " m2"}
                  label="Average Size"
                  percentChange={1}
                />
              </div>

              <div className="neighborhood__container">
                <h2 className="neighborhood">
                  Neighbourhood{" "}
                  <span className="highlight">{neighborhood}</span>
                </h2>
                <select
                  name="neighborhood"
                  onChange={(e) => setNeighborhood(e.target.value)}
                >
                  <option value="">Select neighborhood</option>
                  <option value="Sarafovo">Sarafovo</option>
                  <option value="Izgrev">Izgrev</option>
                  <option value="Lazur">Lazur</option>
                  <option value="Slaveikov">Slaveikov</option>
                </select>
              </div>

              <h3 className="subheading">Choose apartment type:</h3>
              <div className="apartment__type-btns">
                <Button onClick={() => setApartments(getOneBeds())}>One</Button>
                <Button onClick={() => setApartments(getTwoBeds())}>Two</Button>
                <Button onClick={() => setApartments(getThreeBeds())}>
                  Three
                </Button>
              </div>

              <button
                className={`${
                  hasFilters ? "filter__button active" : "filter__button "
                }`}
                onClick={() => setHasFilters(!hasFilters)}
              >
                <BsFillFilterCircleFill />
                Filters
              </button>

              {hasFilters && (
                <div className="filters">
                  <h3>Contruction type</h3>
                  <select
                    name="construction progress"
                    onChange={(e) => setCompletionProgress(e.target.value)}
                  >
                    <option value="">All Properties</option>
                    <option value="completed">Completed</option>
                    <option value="construction">In construction</option>
                    <option value="project">In Project</option>
                  </select>
                </div>
              )}

              <Table apartments={apartments} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
