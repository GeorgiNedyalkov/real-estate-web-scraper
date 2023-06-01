import { useEffect, useState } from "react";

import Table from "./components/Table/Table";
import Stats from "./components/Stats/Stats";
import Highlights from "./components/Highlights/Highlights";
import Neighborhood from "./components/Neighborhood/Neighborhood";
import FilterButton from "./components/Filters/FilterButton/FilterButton";
import Filters from "./components/Filters/Filters";

import { useFetch } from "./utils/useFetch";
import { getOneBeds, getTwoBeds, getThreeBeds } from "./api/getApartments";
import { mockApartments } from "./data/mockData";

import filterRows from "./utils/helpers";
import {
  calcAverage,
  findMode,
  findMedian,
  calcMarketCap,
} from "./utils/calculations";
import "./App.css";

const izgrevUrl = "http://localhost:3001/api/v1/neighborhoods/lazur";

function App() {
  const { apartments, loading, setApartments } = useFetch(izgrevUrl);
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

  const calcStatistic = () => {
    setMarketCap(calcMarketCap(filteredApartments));
    setAverageSize(calcAverage("size", filteredApartments));
    setAveragePrice(calcAverage("price", filteredApartments));
    setAveragePricePerSqMeter(
      calcAverage("pricePerSqMeter", filteredApartments)
    );
    setModePrice(findMode(filteredApartments, "price"));
    setModeSize(findMode(filteredApartments, "size"));
    setModePricePerSqMeter(findMode(filteredApartments, "pricePerSqMeter"));
    setMedianPrice(findMedian(filteredApartments, "price"));
    setMedianSize(findMedian(filteredApartments, "size"));
    setMedianPricePerSqMeters(
      findMedian(filteredApartments, "pricePerSqMeter")
    );
  };

  const onCompletionProgressChanged = (completionProgress) => {
    setCompletionProgress(completionProgress);
  };

  const onChooseNeighborhood = (neighborhood) => {
    setNeighborhood(neighborhood);
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

    const filteredApartments = filterRows(apartments, filters);

    setApartments(filteredApartments);
  };

  useEffect(() => {
    if (!loading) {
      calcStatistic();
    }
  }, [filteredApartments]);

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
              onChooseNeighborhood={onChooseNeighborhood}
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

          <Table apartments={filteredApartments} />
        </div>
      )}
    </div>
  );
}

export default App;
