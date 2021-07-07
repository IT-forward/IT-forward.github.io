import Projects from "./Projects";
import { render, screen } from "@testing-library/react";

describe("<Projects />", () => {
  const projectsInfo = [
    {
      name: "Rock Paper Scissors game",
      image: 'project_1',
      deployPath: "https://rock-paper-scissors-game-00.netlify.app/",
      sourcePath: "https://github.com/Husan-Eshonqulov/rock-paper-scissors",
    },
    {
      name: "stopwatch",
      image: 'project_2',
      deployPath: "https://stopwatch-00.netlify.app/",
      sourcePath: "https://github.com/Husan-Eshonqulov/stopwatch/",
    },
  ];

  test("component textContent should be correct", () => {
    render(<Projects projectsInfo={projectsInfo} />);
    const container = screen.getByTestId('projects');

    expect(container.textContent).toBe('Rock Paper Scissors gamestopwatch');
  });
});
