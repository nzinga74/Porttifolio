import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import Home from "./Pages/Home";
import { GlobalStyle } from "./styles";
ReactDOM.render(
  <React.StrictMode>
    <Home />
    <GlobalStyle />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
