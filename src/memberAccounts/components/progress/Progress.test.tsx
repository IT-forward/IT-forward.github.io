import Progress from "./Progress";
import { render, screen } from "@testing-library/react";

describe("<Progress />", () => {
  const skillsInfo = [
    {
      name: "photoshop",
      level: "beginner",
      percent: 7,
    },
    {
      name: "Figma",
      level: "Beginner",
      percent: 20,
    },
    {
      name: "JS",
      level: "expert",
      percent: 100,
    },
  ];

  test("component textContent should be correct", () => {
    render(<Progress skillsInfo={skillsInfo} />);
    const container = screen.getByTestId('progress-div');

    expect(container.textContent).toBe('photoshopbeginnerFigmaBeginnerJSexpert');
  });
});
