import React, { useState, useEffect } from "react";
import { Route, Redirect, Switch } from "react-router-dom";

import "./App.css";

import Header from "./components/Header/Header";
import SearchSection from "./components/SearchSection/SearchSection";
import CategoriesList from "./components/CategoriesList/CategoriesList";
import Homepage from "./pages/Homepage/Homepage";
import Adventure from "./pages/Adventure/Adventure";
import BestSellers from "./pages/BestSellers/BestSellers";
import Fiction from "./pages/Fiction/Fiction";
import History from "./pages/History/History";
import Horror from "./pages/Horror/Horror";
import NewBooks from "./pages/NewBooks/NewBooks";
import Philosophy from "./pages/Philosophy/Philosophy";
import Romance from "./pages/Romance/Romance";
import Sales from "./pages/Sales/Sales";
import Footer from "./components/Footer/Footer";

const App = () => {
  const darkModeLocalStorage = () => {
    return JSON.parse(localStorage.getItem("dakrMode"));
  };

  const [toggleDarkMode, setToggleDarkMode] = useState(darkModeLocalStorage());

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(toggleDarkMode));
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

        <Route path="/adventure">
          <Adventure />
        </Route>

        <Route path="/bestsellers">
          <BestSellers />
        </Route>

        <Route path="/fiction">
          <Fiction />
        </Route>

        <Route path="/history">
          <History />
        </Route>

        <Route path="/horror">
          <Horror />
        </Route>

        <Route path="/newbooks">
          <NewBooks />
        </Route>

        <Route path="/philosophy">
          <Philosophy />
        </Route>

        <Route path="/romance">
          <Romance />
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
