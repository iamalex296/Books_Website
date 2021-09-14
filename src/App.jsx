import React, { useState, useEffect } from "react";
import { Route, Redirect, Switch } from "react-router-dom";

import "./App.css";

import Header from "./components/Header/Header";
import SearchSection from "./components/SearchSection/SearchSection";
import CategoriesList from "./components/CategoriesList/CategoriesList";
import Homepage from "./pages/Homepage/Homepage";
import Business from "./pages/Business/Business";
import Education from "./pages/Education/Education";
import Fiction from "./pages/Fiction/Fiction";
import Culture from "./pages/Culture/Culture";
import Religion from "./pages/Religion/Religion";
import Sports from "./pages/Sports/Sports";
import Sales from "./pages/Sales/Sales";
import Footer from "./components/Footer/Footer";

const App = () => {
  const [toggleDarkMode, setToggleDarkMode] = useState(
    JSON.parse(localStorage.getItem("darkMode"))
  );

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(toggleDarkMode));
    // console.log("a", toggleDarkMode);
  }, [toggleDarkMode]);

  useEffect(() => {
    // console.log("b", toggleDarkMode);
    setToggleDarkMode(JSON.parse(localStorage.getItem("darkMode")));
    // console.log(`c`, toggleDarkMode);
  }, [toggleDarkMode]);

  return (
    <div className={toggleDarkMode ? "DarkMode" : "LightMode"}>
      <Header
        toggleDarkMode={toggleDarkMode}
        setToggleDarkMode={setToggleDarkMode}
      />

      <SearchSection />
      <CategoriesList toggleDarkMode={toggleDarkMode} />

      <Switch>
        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>

        <Route path="/home" exact>
          <Homepage />
        </Route>

        <Route path="/business">
          <Business />
        </Route>

        <Route path="/education">
          <Education />
        </Route>

        <Route path="/fiction">
          <Fiction />
        </Route>

        <Route path="/culture">
          <Culture />
        </Route>

        <Route path="/religion">
          <Religion />
        </Route>

        <Route path="/sports">
          <Sports />
        </Route>

        <Route path="/sale">
          <Sales />
        </Route>

        <Route path="*">
          <Redirect to="/home" />
        </Route>
      </Switch>

      <Footer />
    </div>
  );
};

export default App;
