import React, { useState } from "react";
import "./App.css";

import Header from "./components/Header/Header";
import SearchSection from "./components/SearchSection/SearchSection";
import Homepage from "./pages/Homepage/Homepage";
import Footer from "./components/Footer/Footer";

const App = () => {
  const [toggleDarkMode, setToggleDarkMode] = useState(true);

  return (
    <div className={toggleDarkMode ? "DarkMode" : "LightMode"}>
      <Header
        toggleDarkMode={toggleDarkMode}
        setToggleDarkMode={setToggleDarkMode}
      />
      <SearchSection />
      <Homepage />
      <Footer />
    </div>
  );
};

export default App;
