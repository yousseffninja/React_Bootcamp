var Pet = function Pet(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            props.name
        ),
        React.createElement(
            "h1",
            null,
            props.animal
        ),
        React.createElement(
            "h1",
            null,
            props.breed
        )
    );
};

// const Pet = (props) => {
//     return React.createElement("div", {}, [
//         React.createElement("h1", {}, props.name),
//         React.createElement("h2", {}, props.animal),
//         React.createElement("h2", {}, props.breed),
//     ]);
// };

export default Pet;