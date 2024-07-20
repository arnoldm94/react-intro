import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Person from "./components/Person.jsx";
import "./index.css";
import PersonClass from "./components/PersonClass.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Person name="Arnold" surname="Melet" age="29" />
    <Person name="Jose" surname="Parada" age="30" />
    <Person name="Stephane" surname="Lapo" age="26" />

    <PersonClass name="PEPE" surname="GRILLO con clase" age="55" />
    <PersonClass name="Felix" surname="PRime con clase" age="12" />
    <PersonClass name="laura" surname="Denver con clase" age="25" />
  </React.StrictMode>
);
