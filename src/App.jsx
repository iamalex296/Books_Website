import React, { useState } from "react";
import "./App.css";

import Header from "./components/Header/Header";
import SearchSection from "./components/SearchSection/SearchSection";
import Homepage from "./pages/Homepage/Homepage";

const App = () => {
  const [toggleDarkMode, setToggleDarkMode] = useState(true);

  return (
    <div className="App">
      <Header
        toggleDarkMode={toggleDarkMode}
        setToggleDarkMode={setToggleDarkMode}
      />
      <SearchSection toggleDarkMode={toggleDarkMode} />
      <Homepage toggleDarkMode={toggleDarkMode} />
    </div>
  );
};

export default App;
