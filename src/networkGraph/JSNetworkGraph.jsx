import React from "react";
import { Graph } from "react-d3-graph";

export default function JSNetworkGraph(props) {
    const { id, data, config } = props;
    
    // console.log("JSNetworkGraph");
    // console.log(config)

    return (
        <Graph
            id={id}
            data={data}
            config={config}
        />
    );
}
