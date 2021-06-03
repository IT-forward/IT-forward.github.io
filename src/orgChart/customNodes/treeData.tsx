import bahriddin from './images/bahriddin.png';
import otabek from './images/otabek.png';
import eldor from './images/eldor.png';
import husan from './images/husan.png';
import oybek from './images/oybek.png';
import '../OrgChart.css';

export const treeData = {
    mentor: {
      name: "Bahriddin Abdiev",
      image: <img className={"image"} src={bahriddin} alt={bahriddin} />,
      students: [
        {
          name: "Eldor Ergashov",
          image: <img className={"image"} src={eldor} alt={eldor} />,
        },
        {
          name: "Otabek Kadirov",
          image: <img className={"image"} src={otabek} alt={otabek} />,
        },
        {
          name: "Husan Ehsonqulov",
          image: <img className={"image"} src={husan} alt={husan} />,
        },
        {
          name: "Oybek Turaev",
          image: <img className={"image"} src={oybek} alt={oybek} />,
        },
      ],
    },
  };