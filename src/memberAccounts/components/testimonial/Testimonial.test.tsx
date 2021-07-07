import Testimonial from "./Testimonial";
import { render, screen } from "@testing-library/react";

describe("<Testimonial />", () => {
  test("component textContent should be correct", () => {
    render(
      <Testimonial
        name="abdiev bahriddin"
        profession="software engineer"
        opinion="something"
        image="mentor.png"
      />
    );
    const container = screen.getByTestId('testimonial-div');

    expect(container.textContent).toBe('abdiev bahriddinsoftware engineersomething');
  });
});
