import SeparatedInfo from "./SeparatedInfo";
import { render, screen } from "@testing-library/react";

describe("<SeparatedInfo />", () => {
  test("component textContent should be correct", () => {
    const separatedInfo = [
      {
        City: "Kitob",
        Phone: "+998 90 006 65 06",
        Website: "it-forward.github.io",
      },
    ];
    render(<SeparatedInfo separatedInfo={separatedInfo} />);
    const container = screen.getByTestId("separatedInfo");

    expect(container.textContent).toBe(
      `City: KitobPhone: +998 90 006 65 06Website: it-forward.github.io`
    );
    // expect(container.textContent).toBe(
    //   `City: Kitob`
    // );
  });
});
