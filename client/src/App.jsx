import { useEffect, useState } from "react";

import Table from "./components/Table/Table";
import Stats from "./components/Stats/Stats";
import Highlights from "./components/Highlights/Highlights";
import { IoBed } from "react-icons/io5";
import { BsFillFilterCircleFill } from "react-icons/bs";

import { useFetch } from "./utils/useFetch";
import { getOneBeds, getTwoBeds, getThreeBeds } from "./api/getApartments";
import {
  calcAverage,
  findMode,
  findMedian,
  calcMarketCap,
} from "./utils/calculations";
import "./App.css";

function App() {
  const { apartments, loading, setApartments } = useFetch();
  const [neighborhood, setNeighborhood] = useState("Izgrev");
  const [hasFilters, setHasFilters] = useState(false);
  const [completionProgress, setCompletionProgress] = useState("");

  const [marketCap, setMarketCap] = useState(0);
  const [averagePrice, setAveragePrice] = useState(0);
  const [averageSize, setAverageSize] = useState(0);
  const [averagePricePerSqMeter, setAveragePricePerSqMeter] = useState(0);

  const [modePrice, setModePrice] = useState(0);
  const [modeSize, setModeSize] = useState(0);
  const [modePricePerSqMeter, setModePricePerSqMeter] = useState(0);

  const [medianSize, setMedianSize] = useState(0);
  const [medianPrice, setMedianPrice] = useState(0);
  const [medianPricePerSqMeters, setMedianPricePerSqMeters] = useState(0);

  const filteredApartments = apartments.filter((a) => {
    if (completionProgress === "") {
      return apartments;
    } else {
      return a.completionProgress === completionProgress;
    }
  });

  const calcMarketCapitalization = () => {
    setMarketCap(calcMarketCap(filteredApartments));
  };

  const calcAverages = () => {
    setAverageSize(calcAverage("size", filteredApartments));
    setAveragePrice(calcAverage("price", filteredApartments));
    setAveragePricePerSqMeter(
      calcAverage("pricePerSqMeter", filteredApartments)
    );
  };

  const calcModes = () => {
    setModePrice(findMode(filteredApartments, "price"));
    setModeSize(findMode(filteredApartments, "size"));
    setModePricePerSqMeter(findMode(filteredApartments, "pricePerSqMeter"));
  };

  const calcMedians = () => {
    setMedianPrice(findMedian(filteredApartments, "price"));
    setMedianSize(findMedian(filteredApartments, "size"));
    setMedianPricePerSqMeters(
      findMedian(filteredApartments, "pricePerSqMeter")
    );
  };

  useEffect(() => {
    calcMarketCapitalization();
    calcAverages();
    calcModes();
    // calcMedians();
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
                modeSize={modeSize}
                modePrice={modePrice}
                modePricePerSqMeter={modePricePerSqMeter}
                medianPrice={medianPrice}
                medianSize={medianSize}
                medianPricePerSqMeters={medianPricePerSqMeters}
              />

              {/* <Filters /> */}

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
