import React from "react";
import ReactDOM from "react-dom/client";

// React Element

const elem = <span>React Element</span>

const heading = (
    <h1>Namaste react using JSX</h1>
);
// React Element
const title = (
    
    <p>{elem} This is Title</p>
)


// React Components
// Class Based Component - OLD
// Functional Component - NEW

// React functional component

// Normal functional component
const Title = function() {
    return (
        <h1 className="title">
        Title Component
    </h1>
    )
}

// Component Composition

const number = 10000;
const HeadingComponent = () =>(
    <div className="container">
        {title}
        <h1>{number}</h1>
        <h1>{console.log("Hello")}</h1>
        <Title/>
        <Title></Title>
        {Title()}
        <h1 className="">Namaste React Functional Component 🚀</h1>
    </div>
    
)

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading); // Element Render
root.render(<HeadingComponent/>)