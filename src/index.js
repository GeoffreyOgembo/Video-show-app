
  
import React from "react";
// import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";

// State
import ShowsState from "./context/shows/ShowsState";
import AlertsState from "./context/alerts/AlertsState";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ShowsState>
   <AlertsState>
    <App />
    </AlertsState>
   </ShowsState>,
  </React.StrictMode>
);

reportWebVitals();

// const root = ReactDOM.createRoot(document.getElementById('root'),
// root.render(
//   <ShowsState>
//   <AlertsState>
//   <App />
//   </AlertsState>
//   </ShowsState>
// )
// )

// ReactDOM.render(
//   <ShowsState>
//     <AlertsState>
//       <App />
//     </AlertsState>
//   </ShowsState>,
//   document.getElementById("root")
// );

// reportWebVitals();