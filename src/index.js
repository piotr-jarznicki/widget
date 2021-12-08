import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

const widgetDiv = document.getElementById("schedule-widget");


console.log(widgetDiv);
ReactDOM.render(<App/>, widgetDiv);