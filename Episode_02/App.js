
import React from "react";
import ReactDOM from "react-dom/client";
        const parent = React.createElement("div",{id:"parent", key: "parent"},[
            React.createElement("div",{id:"child",key: "child1"},[
            React.createElement("h1",{ key: "h1-ramesh" },"Hello I am Ramesh 🚀"),
            React.createElement("h2",{ key: "h2-rakesh" },"Hello I am Rakesh")
        ]),
        React.createElement("div",{id:"child2",key: "child2"},[
            React.createElement("h1",{ key: "h1-rajesh" },"Hello I am Rajesh"),
            React.createElement("h2",{ key: "h2-rakey" },"Hello I am Rakey")
        ])
        ])

        const heading = React.createElement("h1", {}, "Hello World");
        const root = ReactDOM.createRoot(document.getElementById("root"));

        root.render(parent);

// ****************

// import React from "react";
// import ReactDOM from "react-dom/client";

// const parent = (
//   <div id="parent">
//     <div id="child" key="child1">
//       <h1>Hello I am Ramesh</h1>
//       <h2>Hello I am Rakesh</h2>
//     </div>
//     <div id="child2" key="child2">
//       <h1>Hello I am Rajesh</h1>
//       <h2>Hello I am Rakey</h2>
//     </div>
//   </div>
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);
