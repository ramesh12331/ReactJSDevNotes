
import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement =>ReactElement-JS Object => HTMLElement(render)

// const heading = React.createElement("h1",{id:"heading"},"Namaste React🚀");
// console.log(heading); // its get object

// JSX - HTML - like or XML - like syntax

//JSX ==> Babel transpiles it to React.createElement =>ReactElement-JS Object => HTMLElement(render)
const jsxHeading = <h1>Namaste React Using JSX 🚀</h1>;
console.log(jsxHeading); // its get object


const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);
root.render(jsxHeading);