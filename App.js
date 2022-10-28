import { render } from "react-dom";
// import Pet from './Pet';
import SearchParams from "./SearchParams";

var App = function App() {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            "Adopt Me!"
        ),
        React.createElement(SearchParams, null)
    );
};

render(React.createElement(App, null), document.getElementById("root"));