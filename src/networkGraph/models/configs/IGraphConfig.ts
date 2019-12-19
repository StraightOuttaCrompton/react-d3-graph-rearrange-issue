import ID3Config from "./ID3Config";
import INodeConfig from "./INodeConfig";
import ILinkConfig from "./ILinkConfig";

// Config documentation - https://goodguydaniel.com/react-d3-graph/docs/index.html
// TODO: in this interface all options are optional but that should not be the case
export default interface IGraphConfig<T> {
    automaticRearrangeAfterDropNode?: boolean;
    collapsible?: boolean;
    directed?: boolean;
    focusZoom?: number;
    focusAnimationDuration?: number;
    height?: number;
    nodeHighlightBehavior?: boolean;
    linkHighlightBehavior?: boolean;
    highlightDegree?: 0 | 1 | 2;
    highlightOpacity?: number;
    maxZoom?: number;
    minZoom?: number;
    panAndZoom?: boolean;
    staticGraph?: boolean;
    staticGraphWithDragAndDrop?: boolean;
    width?: number;

    d3?: ID3Config;
    node?: INodeConfig;
    link?: ILinkConfig<T>;
}

// export const defaultConfig: IGraphConfig<T> = {
//     automaticRearrangeAfterDropNode: false,
//     collapsible: false,
//     directed: false,
//     focusZoom: 1,
//     focusAnimationDuration: 0.75,
//     height: 400,
//     nodeHighlightBehavior: true,
//     linkHighlightBehavior: true,
//     highlightDegree: 1,
//     highlightOpacity: 1,
//     maxZoom: 2,
//     minZoom: 0.5,
//     panAndZoom: true,
//     staticGraph: false, // not working when true
//     staticGraphWithDragAndDrop: false, // not working true
//     d3: {
//         alphaTarget: 0.05,
//         gravity: -200,
//         linkLength: 100
//         // linkStrength: 1 // for some reason this breaks the graph when uncommented
//     },
//     node: {
//         color: "red",
//         fontColor: "black",
//         fontSize: 12,
//         fontWeight: "normal",
//         highlightColor: "orange",
//         highlightFontSize: 12,
//         highlightFontWeight: "bold", // nodeHighlightBehavior and linkHighlightBehavior must be true for this to work
//         highlightStrokeColor: "SAME",
//         highlightStrokeWidth: 100,
//         labelProperty: "id",
//         mouseCursor: "pointer",
//         opacity: 1,
//         renderLabel: true,
//         size: 200,
//         strokeColor: "none",
//         strokeWidth: 1.5,
//         svg: "",
//         symbolType: "circle",
//         viewGenerator: null
//     },
//     link: {
//         color: "grey",
//         fontColor: "black",
//         fontSize: 12,
//         fontWeight: "normal",
//         highlightColor: "orange",
//         highlightFontSize: 12,
//         highlightFontWeight: "bold", // nodeHighlightBehavior and linkHighlightBehavior must be true for this to work
//         labelProperty: "id",
//         mouseCursor: "default",
//         opacity: 1,
//         renderLabel: false,
//         semanticStrokeWidth: false,
//         strokeWidth: 1.5,
//         type: "STRAIGHT"
//     }
// };