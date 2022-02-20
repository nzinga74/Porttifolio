import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import Home from "./Pages/Home";
import { GlobalStyle } from "./styles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
ReactDOM.render(
  <React.StrictMode>
    <Home />
    <GlobalStyle />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
