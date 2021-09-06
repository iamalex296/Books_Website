import "./App.css";

import Header from "./components/Header/Header";
import SearchSection from "./components/SearchSection/SearchSection";
import Homepage from "./pages/Homepage/Homepage";

function App() {
  return (
    <div className="App">
      <Header />
      <SearchSection />
      <Homepage />
    </div>
  );
}

export default App;
