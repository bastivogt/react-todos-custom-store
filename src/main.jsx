import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { store } from "./store.js";

/*ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)*/

const app = ReactDOM.createRoot(document.getElementById("root"));
app.render(<App />);

store.onUpdate = function () {
  app.render(<App />);
};
