import { useEffect, useState, useMemo } from "react";

import Table from "./components/Table/Table";
import Stats from "./components/Stats/Stats";
import Highlights from "./components/Highlights/Highlights";
import Neighborhood from "./components/Neighborhood/Neighborhood";
import FilterButton from "./components/Filters/FilterButton/FilterButton";
import Filters from "./components/Filters/Filters";

import { useFetch } from "./utils/useFetch";
import {
  getOneBeds,
  getTwoBeds,
  getThreeBeds,
  getApartments,
} from "./api/getApartments";
import { mockApartments } from "./data/mockData";

import filterRows from "./utils/helpers";
import {
  calcAverage,
  findMode,
  findMedian,
  calcMarketCap,
} from "./utils/calculations";
import "./App.css";

const apiURL = "http://localhost:3001/api/v1/neighborhoods";

function App() {
  const { apartments, loading, setUrl } = useFetch();
  const [neighborhood, setNeighborhood] = useState("izgrev");
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

  const calcStatistic = () => {
    setMarketCap(calcMarketCap(apartments));
    setAverageSize(calcAverage("size", apartments));
    setAveragePrice(calcAverage("price", apartments));
    setAveragePricePerSqMeter(calcAverage("pricePerSqMeter", apartments));
    setModePrice(findMode("price", apartments));
    setModeSize(findMode("size", apartments));
    setModePricePerSqMeter(findMode("pricePerSqMeter", apartments));
    setMedianPrice(findMedian("price", apartments));
    setMedianSize(findMedian("size", apartments));
    setMedianPricePerSqMeters(findMedian("pricePerSqMeter", apartments));
  };

  const onCompletionProgressChanged = (completionProgress) => {
    setCompletionProgress(completionProgress);
  };

  const onNeighborhoodChange = (neighborhood) => {
    setNeighborhood(neighborhood);
    setUrl(`${apiURL}/${neighborhood}`);
  };

  const onFilter = () => {
    setHasFilters(!hasFilters);
  };

  const applyFilters = (filters) => {
    // remove empty filters
    for (let filter in filters) {
      if (filters[filter] === "") {
        delete filters[filter];
      }
    }

    const apartments = filterRows(apartments, filters);

    setApartments(apartments);
  };

  useEffect(() => {
    if (!loading) {
      calcStatistic();
    }
  }, [apartments]);

  return (
    <div className="App">
      {loading ? (
        <h1 className="loader">Loading...</h1>
      ) : (
        <div className="container">
          <section id="top__section">
            <Highlights
              apartments={apartments}
              marketCap={marketCap}
              averageSize={averageSize}
              averagePrice={averagePrice}
              averagePricePerSqMeter={averagePricePerSqMeter}
            />

            <Neighborhood
              neighborhood={neighborhood}
              onNeighborhoodChange={onNeighborhoodChange}
            />
          </section>
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

          <FilterButton onFilter={onFilter} hasFilters={hasFilters} />

          {hasFilters && (
            <Filters
              onCompletionProgressChanged={onCompletionProgressChanged}
              applyFilters={applyFilters}
            />
          )}

          <Table apartments={apartments} />
        </div>
      )}
    </div>
  );
}

export default App;
