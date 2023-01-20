import "./App.css";
import { useState, useEffect } from "react";
import { useFetch } from "./utils/useFetch";
import Table from "./components/Table";

function App() {
  const { apartments, loading } = useFetch();

  const marketCap = apartments.reduce(
    (prev, current) => prev + current.price,
    0
  );

  return (
    <div className="App">
      <h1 className="logo">Homealytics</h1>
      <div className="container">
        {loading && <h1>Loading...</h1>}

        <div className="summary">
          Today's total market prices.
          <p>
            Total market cap is <b> €{marketCap.toLocaleString()}</b>
          </p>
          <p>
            Number of one bed properties <b>{apartments.length}</b>
          </p>
        </div>

        <div className="propertyTable">
          <Table apartments={apartments} />
        </div>
      </div>
    </div>
  );
}

export default App;
