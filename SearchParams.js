var SearchParams = function SearchParams() {
    var location = "Seattle, WA";
    return React.createElement(
        "div",
        { className: "search-params" },
        React.createElement(
            "form",
            null,
            React.createElement(
                "label",
                { htmlFor: "Location" },
                "Location",
                React.createElement("input", { id: "location", value: location, placeholder: "Location" })
            ),
            React.createElement(
                "button",
                null,
                "Submit"
            )
        )
    );
};

export default SearchParams;