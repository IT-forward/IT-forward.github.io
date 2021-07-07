import Facts from "./Facts";
import { render, screen } from "@testing-library/react";
import { AiFillAlert } from "react-icons/ai";
import { BiAddToQueue } from "react-icons/bi";
import { DiBackbone } from "react-icons/di";
import { FiAperture } from "react-icons/fi";

describe("<Facts />", () => {
  const factsInfo = [
    {
      icon: <AiFillAlert />,
      numbers: "147",
      type: "Students",
    },
    {
      icon: <BiAddToQueue />,
      numbers: "90+",
      type: "Users",
    },
    {
      icon: <DiBackbone />,
      numbers: "100",
      type: "Waitings",
    },
    {
      icon: <FiAperture />,
      numbers: "90+",
      type: "users",
    },
  ];

  test("component textContent should be correct", () => {
    render(<Facts factsInfo={factsInfo} />);
    const container = screen.getByTestId('facts');

    expect(container.textContent).toBe('147Students90+Users100Waitings90+users');
  });
});
