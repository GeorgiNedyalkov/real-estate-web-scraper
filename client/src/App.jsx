import "./App.css";
import { useState, useEffect } from "react";
import { useFetch } from "./utils/useFetch";
import Table from "./components/Table";
import { useMemo } from "react";
import SampleTable from "./components/SampleTable";

function App() {
  const { apartments, loading } = useFetch();

  const marketCap = apartments.reduce(
    (prev, current) => prev + current.parameters.price,
    0
  );

  return (
    <div className="App">
      {/* <div className="container">
        {loading && <h1>Loading...</h1>}

        <h1>Homealytics</h1>

        <div>Today's total market prices. </div>
        <p>
          Total marketcap <b> €{marketCap.toLocaleString()}</b>
        </p>
        <p>
          Number of one bed properties <b>{apartments.length}</b>
        </p> */}

      {/* <div className="propertyTable">
          <Table apartments={apartments} />
        </div>
      </div> */}

      <div className="container">
        <h1>Test</h1>
        <SampleTable />
      </div>
    </div>
  );
}

export default App;
