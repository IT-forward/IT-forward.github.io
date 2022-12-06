import bahriddin from "./images/bahriddin.png";
import otabek from "./images/otabek.png";
import eldor from "./images/eldor.png";
import husan from "./images/husan.png";
import oybek from "./images/oybek.png";
import man from "./images/man.jpg";
import woman from "./images/woman.jpg";
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
      finished: true,
    },
    {
      id: 3,
      fullName: "Otabek Kadirov",
      image: otabek,
      finished: true,
      students: [],
    },
    {
      id: 4,
      fullName: "Husan Eshonqulov",
      image: husan,
      finished: true,
    },
    {
      id: 5,
      fullName: "Oybek Turaev",
      image: oybek,
      finished: true,
    },
    {
      id: 6,
      fullName: "Suhrob Fayz",
      image: man,
      finished: true,
    },
    {
      id: 7,
      fullName: "Hayitbek Mirsoatov",
      image: man,
      finished: false,
    },
    {
      id: 8,
      fullName: "Barchinoy Mirkomilova",
      image: woman,
      finished: false,
    },
  ],
};
