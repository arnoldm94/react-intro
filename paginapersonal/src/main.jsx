import React from "react";
import ReactDOM from "react-dom/client";
import TheHome from "./components/TheHome.jsx";
import TheHeader from "./components/TheHeader.jsx";
import ListTecnologies from "./components/ListTecnologies.jsx";
import TheHeaderClass from "./components/ClassComponents/TheHeaderClass.jsx";
import TheHomeClass from "./components/ClassComponents/TheHomeClass.jsx";
import ListTecnologiesClass from "./components/ClassComponents/ListTecnologiesClass.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TheHeader name="Arnold" surname="Melet" />
    <TheHome age="29" />
    <ListTecnologies />
    <TheHeaderClass name="Arnold" surname="Melet" />
    <TheHomeClass age="29" />
    <ListTecnologiesClass />
  </React.StrictMode>
);
