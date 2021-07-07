import Testimonials from "./Testimonials";
import { render, screen } from "@testing-library/react";

describe("<Testimonials />", () => {
  const testimonialsInfo = [
    {
      name: "Husan Eshonqulov",
      profession: "Web Developer",
      image: "husan.png",
      opinion:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae accusamus.",
    },
    {
      name: "Husan Eshonqulov",
      profession: "Web Developer",
      image: "husan.png",
      opinion:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae accusamus.",
    },
  ];
  test("component textContent should be correct", () => {
    render(<Testimonials testimonialsInfo={testimonialsInfo} />);
    const container = screen.getByTestId("testimonials-div");

    expect(container.textContent).toBe(
      `Husan EshonqulovWeb DeveloperLorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae accusamus.Husan EshonqulovWeb DeveloperLorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae accusamus.`
    );
  });
});
