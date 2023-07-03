import { useCallback, useEffect, useMemo, useState } from "react";

import Table from "./components/Table/Table";
import Stats from "./components/Stats/Stats";
import Highlights from "./components/Highlights/Highlights";
import Neighborhood from "./components/Neighborhood/Neighborhood";
import FilterButton from "./components/Filters/FilterButton/FilterButton";
import Filters from "./components/Filters/Filters";
import SearchBar from "./components/SearchBar/SearchBar";

import { useFetch } from "./hooks/useFetch";
import filterRows from "./utils/helpers";
import {
  calcAverage,
  findMode,
  findMedian,
  calcMarketCap,
} from "./utils/calculations";
import "./App.css";

function App() {
  const { apartments, loading, setUrl, setApartments } = useFetch();
  const [neighborhood, setNeighborhood] = useState("izgrev");
  const [hasFilters, setHasFilters] = useState(false);

  const [medianSize, setMedianSize] = useState(0);
  const [medianPrice, setMedianPrice] = useState(0);
  const [medianPricePerSqMeters, setMedianPricePerSqMeters] = useState(0);
  const [search, setSearch] = useState("");

  const filteredApartments = useMemo(() => {
    return apartments.filter((apartment) =>
      apartment.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, apartments]);

  const modePrice = findMode("price", filteredApartments);
  const modeSize = findMode("size", filteredApartments);
  const modePricePerSqMeter = findMode("pricePerSqMeter", filteredApartments);
  const averageSize = calcAverage("size", filteredApartments);
  const averagePrice = calcAverage("price", filteredApartments);
  const averagePricePerSqMeter = calcAverage(
    "pricePerSqMeter",
    filteredApartments
  );

  const calcStatistic = () => {
    if (filteredApartments.length === 0) {
      return apartments;
    }

    setMedianPrice(findMedian("price", filteredApartments));
    setMedianSize(findMedian("size", filteredApartments));
    setMedianPricePerSqMeters(
      findMedian("pricePerSqMeter", filteredApartments)
    );
  };

  const onNeighborhoodChange = (neighborhood) => {
    setNeighborhood(neighborhood);
    setUrl(`${apiURL}/${neighborhood}`);
  };

  const onFilter = () => {
    setHasFilters(!hasFilters);
  };

  const applyFilters = (filters) => {
    const apartments = filterRows(apartments, filters);

    setApartments(apartments);
  };

  const onSearchChange = useCallback(
    (e) => setSearch(e.target.value),
    [setSearch]
  );

  useEffect(() => {
    if (!loading) {
      calcStatistic();
    }
  }, [filteredApartments]);

  const marketCap = useMemo(
    () => calcMarketCap(filteredApartments),
    [filteredApartments]
  );

  if (loading) return <h1 className="loader">Loading...</h1>;

  return (
    <div className="App">
      <div className="container">
        <section id="top__section">
          <Highlights
            apartments={filteredApartments}
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

        {/* <FilterButton onFilter={onFilter} hasFilters={hasFilters} />

          {hasFilters && <Filters applyFilters={applyFilters} />} */}

        <SearchBar search={search} onSearchChange={onSearchChange} />

        <Table apartments={filteredApartments} />
      </div>
    </div>
  );
}

export default App;
