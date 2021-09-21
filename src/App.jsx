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
import BookDetails from "./pages/BookDetails/BookDetails";
import Footer from "./components/Footer/Footer";
import Login from "./authentication/Login";
import SignUp from "./authentication/SignUp";

const App = () => {
  const [toggleDarkMode, setToggleDarkMode] = useState(
    JSON.parse(localStorage.getItem("darkMode"))
  );

  //user authentication
  const [user, setUser] = useState("");
  const [toggleForm, setToggleForm] = useState(true);

  const formMode = () => {
    setToggleForm(!toggleForm);
  };

  const userState = () => {
    const data = localStorage.getItem("user");
    const us = data !== null ? JSON.parse(data) : null;
    setUser(us);
  };

  useEffect(() => {
    userState();
  }, []);

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
    <>
      {user !== null ? (
        <div className={toggleDarkMode ? "DarkMode" : "LightMode"}>
          <Header
            toggleDarkMode={toggleDarkMode}
            setToggleDarkMode={setToggleDarkMode}
            setUserState={() => setUser(null)}
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

            <Route path={`/books/:category/:bookId`} exact>
              <BookDetails />
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
      ) : (
        <>
          {toggleForm ? (
            <Login
              loggedIn={(user) => setUser(user)}
              toggle={() => formMode()}
            />
          ) : (
            <SignUp toggle={() => formMode()} />
          )}
        </>
      )}
    </>
  );
};

export default App;
