import { useEffect, useState, useMemo } from "react";
import "./App.css";
import Stat from "./components/Stats/Stat";
import Table from "./components/Table/Table";
import { useFetch } from "./utils/useFetch";
import { IoBed } from "react-icons/io5";
import { BsFillFilterCircleFill } from "react-icons/bs";
import { getOneBeds, getTwoBeds, getThreeBeds } from "./api/getApartments";
import {
  calcAverage,
  findMode,
  findMedian,
  calcMarketCap,
} from "./utils/calculations";
import { Highlights } from "./components/Highlights/Highlights";
import Stats from "./components/Stats/Stats";

function App() {
  const { apartments, loading, setApartments } = useFetch();
  const [neighborhood, setNeighborhood] = useState("Izgrev");
  const [hasFilters, setHasFilters] = useState(false);
  const [completionProgress, setCompletionProgress] = useState("");
  const [marketCap, setMarketCap] = useState(0);
  const [averagePrice, setAveragePrice] = useState(0);
  const [averageSize, setAverageSize] = useState(0);
  const [averagePricePerSqMeter, setAveragePricePerSqMeter] = useState(0);

  const filteredApartments = apartments.filter((a) => {
    if (completionProgress === "") {
      return apartments;
    } else {
      return a.completionProgress === completionProgress;
    }
  });

  const calcAverageSize = () => {
    setAverageSize(calcAverage("size", filteredApartments));
  };

  const calcAveragePrice = () => {
    setAveragePrice(calcAverage("price", filteredApartments));
  };

  const calcAveragePricePerSqMeter = () => {
    setAveragePricePerSqMeter(
      calcAverage("pricePerSqMeter", filteredApartments)
    );
  };

  const calcMarketCapitalization = () => {
    setMarketCap(calcMarketCap(filteredApartments));
  };

  useEffect(() => {
    calcMarketCapitalization();
    calcAverageSize();
    calcAveragePrice();
    calcAveragePricePerSqMeter();
  }, [filteredApartments]);

  return (
    <div className="App">
      {loading ? (
        <h1 className="loader">Loading...</h1>
      ) : (
        <div className="wrapper">
          <div className="display">
            <div className="container">
              <Highlights
                apartments={apartments}
                marketCap={marketCap}
                averageSize={averageSize}
                averagePrice={averagePrice}
                averagePricePerSqMeter={averagePricePerSqMeter}
              />

              <Stats
                averageSize={averageSize}
                averagePrice={averagePrice}
                averagePricePerSqMeter={averagePricePerSqMeter}
              />

              <div className="median">
                <h2>Median</h2>
                <p>
                  The median size is {findMedian(filteredApartments, "size")}
                </p>
                <p>
                  The median price is {findMedian(filteredApartments, "price")}.
                </p>
                <p>
                  The median price per sq.m. is{" "}
                  {findMedian(filteredApartments, "pricePerSqMeter")}
                </p>
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
                <button
                  className={`btn`}
                  onClick={() => {
                    setApartments(getOneBeds());
                  }}
                >
                  <IoBed />
                  One
                </button>
                <button
                  className="btn"
                  onClick={() => {
                    setApartments(getTwoBeds());
                  }}
                >
                  <IoBed />
                  Two
                </button>
                <button
                  className="btn"
                  onClick={() => {
                    setApartments(getThreeBeds());
                  }}
                >
                  <IoBed />
                  Three
                </button>
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

              <Table apartments={filteredApartments} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
