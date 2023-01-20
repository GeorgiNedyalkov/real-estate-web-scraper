import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Table from "./components/Table";
import { useFetch } from "./utils/useFetch";

function App() {
  const { apartments, loading } = useFetch();

  const marketCap = apartments.reduce(
    (prev, current) => prev + current.price,
    0
  );

  return (
    <div className="App">
      <Navbar />
      <div className="wrapper">
        <Sidebar />

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

            <Table apartments={apartments} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
