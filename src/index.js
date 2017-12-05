import React from "react";
import ReactDOM from "react-dom";

import Page from "./core/page.js";

import "./index.less";

export function render(targetElementId) {
  ReactDOM.render(
    <Page />,
    document.getElementById(targetElementId)
  );
}
