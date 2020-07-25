import React from "react";
import JSNetworkGraph from "./JSNetworkGraph";
import IGraphConfig from "./models/configs/IGraphConfig";
import IGraphData from "./models/IGraphData";
import { SizeMe } from "react-sizeme";
import parseData from "./utils/parseData";

interface IProps<T> {
    id: string;
    data: IGraphData<T>;
    config?: IGraphConfig<T>;
}

export default function NetworkGraph<T>(props: IProps<T>) {
    // console.log("NetworkGraph");

    const { id, data, config = {} } = props;
    const parsedData = parseData(data);

    return (
        <SizeMe refreshMode="debounce" refreshRate={100}>
            {({ size }) => {
                const { width } = size;
                const _width = width === null ? undefined : width;

                return (
                    <JSNetworkGraph
                        id={id}
                        data={parsedData}
                        config={{
                            ...config,
                            width: _width,
                            // The following line seems to be the source of the unexpected behaviour
                            d3: {}
                        }}
                    />
                );
            }}
        </SizeMe>
    );
}
