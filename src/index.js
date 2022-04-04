import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import './custom.scss';
import reportWebVitals from "./reportWebVitals";
import swal from 'sweetalert';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
