import React from "react";
import NetworkGraph from "./networkGraph";
import exampleData from "./exampleData";

function App() {
    return <NetworkGraph id="example-graph" data={exampleData} />;
}

export default App;
