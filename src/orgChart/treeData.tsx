import bahriddin from "./images/bahriddin.png";
import otabek from "./images/otabek.png";
import eldor from "./images/eldor.png";
import husan from "./images/husan.png";
import oybek from "./images/oybek.png";
import "./OrgChart.css";

const people = {
  "bahriddin-abdiev": {
    fullName: "Bahriddin Abdiev",
    image: bahriddin,
    finished: true,
    students: [
      "eldor-ergashov",
      "otabek-kadirov",
      "husan-eshonqulov",
      "oybek-turaev",
    ],
  },
  "eldor-ergashov": {
    fullName: "Eldor Ergashov",
    image: eldor,
    finished: true,
    students: ["shohrux-kazakoff"],
  },
  "otabek-kadirov": {
    fullName: "Otabek Kadirov",
    image: otabek,
    finished: true,
    students: [],
  },
  "husan-eshonqulov": {
    fullName: "Husan Eshonqulov",
    image: husan,
    finished: true,
    students: [],
  },
  "oybek-turaev": {
    fullName: "Oybek Turaev",
    image: oybek,
    finished: true,
    students: [],
  },
  "shohrux-kazakoff": {
    fullName: "Shohrux Kazakoff",
    image: otabek,
    finished: false,
    students: [],
  },
};

Object.keys(people).forEach((personId) => {
  // @ts-ignore
  const person = people[personId];

  setMentor(people, personId, person.students);
});

// @ts-ignore
function setMentor(people, personId, students) {
  // @ts-ignore
  students.forEach((studentId) => {
    // @ts-ignore
    const student = people[studentId];
    student.mentorId = personId;
  });
}

export default people;
