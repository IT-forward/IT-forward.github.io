import "bootstrap/dist/css/bootstrap.css";
import ReactDOM from "react-dom";
// import LandingPage from './LandingPage/LandingPage';
import MemAccount from "./memberAccounts/MemAccount";

import { BsFillPersonFill } from "react-icons/bs";
import memberImg from "./memberAccounts/memberImages/husan-img.jpg";
import projectImg from "./memberAccounts/projectImages/project1.png";
import { MemberType } from "./memberAccounts/MemAccount";

const member: MemberType  = {
  memberInfo: {
    fullName: "Husan Eshonqulov",
    profession: "Web Developer",
    summary: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Inventore itaque architecto ea labore veniam!`,
    separated: [
      { City: "something" },
      { City: "something" },
      { City: "something" },
      { City: "something" },
      { City: "something" },
      { Phone: "something" },
    ],
    about: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
  Consectetur molestiae, alias explicabo consequuntur itaque quisquam repellat eos magnam doloremque, 
  maxime possimus amet nulla et quia non at ad. Reprehenderit enim molestias.`,
    image: memberImg,
    facts: [
      {
        icon: <BsFillPersonFill />,
        numbers: "90+",
        type: "Users",
      },
      {
        icon: <BsFillPersonFill />,
        numbers: "90+",
        type: "Users",
      },
      {
        icon: <BsFillPersonFill />,
        numbers: "90+",
        type: "Users",
      },
    ],
    skills: [
      {
        name: "HTML",
        level: "level",
        percent: 77,
      },
      {
        name: "CSS",
        level: "level",
        percent: 60,
      },
      {
        name: "JAVASCRIPT",
        level: "level",
        percent: 74,
      },
      {
        name: "BOOTSTRAP",
        level: "level",
        percent: 55,
      },
      {
        name: "REACT JS",
        level: "level",
        percent: 64,
      },
      {
        name: "REDUX",
        level: "level",
        percent: 34,
      },
    ],
    projects: [
      {
        name: "Rock Paper Scissors game",
        image: projectImg,
        deployPath: "https://rock-paper-scissors-game-00.netlify.app/",
        sourcePath: "https://github.com/Husan-Eshonqulov/rock-paper-scissors",
      },
      {
        name: "Rock Paper Scissors game",
        image: projectImg,
        deployPath: "https://rock-paper-scissors-game-00.netlify.app/",
        sourcePath: "https://github.com/Husan-Eshonqulov/rock-paper-scissors",
      },
      {
        name: "Rock Paper Scissors game",
        image: projectImg,
        deployPath: "https://rock-paper-scissors-game-00.netlify.app/",
        sourcePath: "https://github.com/Husan-Eshonqulov/rock-paper-scissors",
      },
      {
        name: "Rock Paper Scissors game",
        image: projectImg,
        deployPath: "https://rock-paper-scissors-game-00.netlify.app/",
        sourcePath: "https://github.com/Husan-Eshonqulov/rock-paper-scissors",
      },
      {
        name: "Rock Paper Scissors game",
        image: projectImg,
        deployPath: "https://rock-paper-scissors-game-00.netlify.app/",
        sourcePath: "https://github.com/Husan-Eshonqulov/rock-paper-scissors",
      },
      {
        name: "Rock Paper Scissors game",
        image: projectImg,
        deployPath: "https://rock-paper-scissors-game-00.netlify.app/",
        sourcePath: "https://github.com/Husan-Eshonqulov/rock-paper-scissors",
      },
    ],
    testimonials: [
      {
        name: "Husan Eshonqulov",
        profession: "Web Developer",
        image: memberImg,
        opinion:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae accusamus.",
      },
      {
        name: "Husan Eshonqulov",
        profession: "Web Developer",
        image: memberImg,
        opinion:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae accusamus.",
      },
      {
        name: "Husan Eshonqulov",
        profession: "Web Developer",
        image: memberImg,
        opinion:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae accusamus.",
      },
    ],
  },
};

ReactDOM.render(
  <MemAccount {...member} />,
  document.getElementById("root")
);
