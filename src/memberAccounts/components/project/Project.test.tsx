import Project from "./Project";
import { render, screen } from "@testing-library/react";

describe("<Project />", () => {
  test("component textContent should be correct", () => {
    render(
      <Project
        name="calculator"
        image="calculator.png"
        deployPath="https://calculator-00.netlify.com"
        sourcePath="https://github.com/Husan-Eshonqulov/calculator/"
      />
    );
    const container = screen.getByTestId('project-div');

    expect(container.textContent).toBe('calculator')
  });
});
