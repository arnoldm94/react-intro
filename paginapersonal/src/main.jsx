import React from "react";
import ReactDOM from "react-dom/client";
import TheHome from "./components/TheHome.jsx";
import TheHeader from "./components/TheHeader.jsx";
import ListTecnologies from "./components/ListTecnologies.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TheHeader name="Arnold" surname="Melet" />
    <TheHome age="29" />
    <ListTecnologies />
  </React.StrictMode>
);
