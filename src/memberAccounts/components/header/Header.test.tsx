import Header from "./Header";
import { render, screen } from "@testing-library/react";
import husanImg from "../../memberImages/husan-img.jpg";
import { HeaderType } from "./Header";

describe("<Header />", () => {
  test("component textContent should be correct", () => {
    const headerInfo: HeaderType = {
      fullName: "Husan Eshonqulov",
      profession: "Web Developer",
      summary: "good",
      separated: [
        { City: "Kitob" },
        { Phone: "+998 90 006 65 06" },
        { Website: "it-forward.github.io" },
      ],
      about:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos, ratione",
      image: husanImg,
    };
    render(<Header {...headerInfo} />);
    const container = screen.getByTestId("header");

    expect(container.textContent).toBe(
      "Husan EshonqulovWeb DevelopergoodCity: KitobPhone: +998 90 006 65 06Website: it-forward.github.ioLorem, ipsum dolor sit amet consectetur adipisicing elit. Quos, rationeLorem, ipsum dolor sit amet consectetur adipisicing elit. Quos, ratione"
    );
  });
});
