import bahriddin from "./images/bahriddin.png";
import otabek from "./images/otabek.png";
import eldor from "./images/eldor.png";
import husan from "./images/husan.png";
import oybek from "./images/oybek.png";
import "./OrgChart.css";

export const treeData = {
  id: 1,
  fullName: "Bahriddin Abdiev",
  image: bahriddin,
  students: [
    {
      id: 2,
      fullName: "Eldor Ergashov",
      image: eldor,
      finished: false,
    },
    {
      id: 3,
      fullName: "Otabek Kadirov",
      image: otabek,
      finished: false,
      students: [],
    },
    {
      id: 4,
      fullName: "Husan Eshonqulov",
      image: husan,
      finished: false,
    },
    {
      id: 5,
      fullName: "Oybek Turaev",
      image: oybek,
      finished: true,
    },
  ],
};
