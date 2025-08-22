

        const parent = React.createElement("div",{id:"parent"},[
            React.createElement("div",{id:"child"},[
            React.createElement("h1",{},"Hello I am Ramesh"),
            React.createElement("h2",{},"Hello I am Rakesh")
        ]),
        React.createElement("div",{id:"child2"},[
            React.createElement("h1",{},"Hello I am Rajesh"),
            React.createElement("h2",{},"Hello I am Rakey")
        ])
        ])

        const heading = React.createElement("h1", {}, "Hello World");
        const root = ReactDOM.createRoot(document.getElementById("root"));

        root.render(parent);