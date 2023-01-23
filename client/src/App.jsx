import "./App.css";
import Stat from "./components/Stat";
import { useEffect, useState } from "react";
import Table from "./components/Table";
import { useFetch } from "./utils/useFetch";
import { BsFillFilterCircleFill } from "react-icons/bs";

function App() {
  const { apartments, loading, setApartments } = useFetch();
  const [hasFilters, setHasFilters] = useState(false);

  const [filters, setFilters] = useState({});

  const [completionProgress, setCompletionProgress] = useState("");
  const [averagePrice, setAveragePrice] = useState(0);
  const [averageSize, setAverageSize] = useState(0);
  const [averagePricePerSqMeter, setAveragePricePerSqMeter] = useState(0);

  const marketCap = apartments.reduce(
    (prev, current) => prev + current.price,
    0
  );

  const filteredApartments = apartments.filter((a) => {
    if (completionProgress === "") {
      return apartments;
    } else {
      return a.completionProgress === completionProgress;
    }
  });

  function calcAveragePrice(apartments) {
    const newAveragePrice = Math.ceil(Number(marketCap / apartments.length));
    setAveragePrice(newAveragePrice);
  }

  function calcAveragePricePerSqMeter(apartments) {
    const totalPricePSQM = apartments.reduce(
      (prev, current) => prev + current.pricePerSqMeter,
      0
    );
    const totalApartments = apartments.length;
    const newAveragePricePSQM = Math.ceil(totalPricePSQM / totalApartments);
    setAveragePricePerSqMeter(newAveragePricePSQM);
  }

  function calcAverageSize(apartments) {
    const totalSize = apartments.reduce(
      (prev, current) => prev + current.size,
      0
    );

    const newAverageSize = totalSize / apartments.length;
    setAverageSize(newAverageSize);
  }

  useEffect(() => {
    calcAveragePrice(filteredApartments);
    calcAverageSize(filteredApartments);
    calcAveragePricePerSqMeter(filteredApartments);
  }, [filteredApartments]);

  return (
    <div className="App">
      {loading ? (
        <h1 className="loader">Loading...</h1>
      ) : (
        <div className="wrapper">
          <div className="display">
            <div className="container">
              <div className="summary">
                <h1 className="title">
                  Today's real estate listings prices in{" "}
                  <b className="highlight">Burgas</b>.
                </h1>
                <p>
                  Total market cap is{" "}
                  <b className="highlight"> €{marketCap.toLocaleString()}</b>
                </p>
                <p>
                  Number of one bed properties{" "}
                  <b className="highlight">{apartments.length}</b>
                </p>
              </div>

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
                    <option value="">--Choose a value--</option>
                    <option value="completed">Completed</option>
                    <option value="construction">In construction</option>
                    <option value="project">In Project</option>
                  </select>
                </div>
              )}

              <Table apartments={filteredApartments} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
