import { Provider } from "./context/store";
import "./App.css";
import ApartmentList from "./components/ApartmentList/ApartmentList";

function App() {
  return (
    <div className="App">
      <Provider>
        <ApartmentList />
      </Provider>
    </div>
  );
}

export default App;
