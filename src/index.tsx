import ReactDOM from "react-dom";
//import LandingPage from "./LandingPage/LandingPage";
import "bootstrap/dist/css/bootstrap.css";
import ReactRouter from "./ReactRouter/ReactRouter";
import React from "react";

ReactDOM.render(
  <React.StrictMode>
    <ReactRouter />
  </React.StrictMode>,
  document.getElementById("root")
);
