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

  it("contains correct text from todo", function () {
    const result = render(<Todo todo={todo} />);
    expect(result.queryByText("test")).toBeInTheDocument();
    expect(result.queryByText("for editabletodo")).toBeInTheDocument();
    expect(result.queryByText("blah")).not.toBeInTheDocument();
  });
});