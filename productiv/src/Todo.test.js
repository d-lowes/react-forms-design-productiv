import React from "react";
import { render } from "@testing-library/react";
import Todo from "./Todo";

const todo = {
  id: 1,
  title: "test",
  description: "for editabletodo",
  priority: 1,
};

describe("Todo component", function () {
  it("Renders the Todo component", function () {
    render (<Todo todo={todo}/>)
  });
});