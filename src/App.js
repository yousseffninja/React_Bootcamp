import React from "react";
import { render } from "react-dom";
import Pet from './Pet';

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt me !"),
    React.createElement(Pet, {
      name: "Luna",
      animal: "Dog",
      breed: "Havanese",
    }),
    React.createElement(Pet, {
      name: "Pipper",
      animal: "Bird",
      breed: "Cockatiel",
    }),
    React.createElement(Pet, {
      name: "Doink",
      animal: "Cat",
      breed: "Mix",
    }),
  ]);
};

const myRenderApp = React.createElement(App);

render(myRenderApp, document.getElementById("root"));
