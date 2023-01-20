import "./App.css";
import { useEffect, useState } from "react";
import Table from "./components/Table";
import { useFetch } from "./utils/useFetch";

function App() {
  const { apartments, loading, setApartments } = useFetch();
  const [completionProgress, setCompletionProgress] = useState("");

  const [averagePrice, setAveragePrice] = useState(0);

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

  return (
    <div className="App">
      <div className="wrapper">
        <div className="display">
          <div className="container">
            {loading && <h1>Loading...</h1>}

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

            <div className="stats"></div>

            <div>
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

            <Table apartments={filteredApartments} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
