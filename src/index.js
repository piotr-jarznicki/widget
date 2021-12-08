import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

const widgetDiv = document.getElementById("schedule-widget");

ReactDOM.render(<App symbol={widgetDiv.dataset.symbol} />, widgetDiv);