import ReactDOM from "react-dom";
// import LandingPage from './LandingPage/LandingPage';
import MemberAccount from "./memberAccounts/MemberAccount";
import MemAccount from "./memberAccounts/MemAccount";
import "bootstrap/dist/css/bootstrap.css";

import memImg from "./memberAccounts/memImages/husan-img.jpg";
import { BsFillPersonFill } from "react-icons/bs";

const memberInfo = {
  memberFullName: "Husan Eshonqulov",
  memberProfession: "Web Developer",
  about: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Inventore itaque architecto ea labore veniam!`,
  emphasisedInfo: {
    City: "something",
    Phone: "something",
    Email: "something",
    Degree: "something",
    Freelance: "something",
    Website: "something",
  },
  extraInfo: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
  Consectetur molestiae, alias explicabo consequuntur itaque quisquam repellat eos magnam doloremque, 
  maxime possimus amet nulla et quia non at ad. Reprehenderit enim molestias.`,
  memberImage: "memImg",
  students: {
    group1: {
      icon: <BsFillPersonFill />,
      numbers: "90+",
      name: "Users",
    },
    group2: {
      icon: <BsFillPersonFill />,
      numbers: "90+",
      name: "Users",
    },
    group3: {
      icon: <BsFillPersonFill />,
      numbers: "90+",
      name: "Users",
    },
  },
  skills: {
    skill1: {
      skill: "HTML",
      level: "level",
      percent: 77,
    },
    skill2: {
      skill: "CSS",
      level: "level",
      percent: 60,
    },
    skill3: {
      skill: "JAVASCRIPT",
      level: "level",
      percent: 74,
    },
    skill4: {
      skill: "BOOTSTRAP",
      level: "level",
      percent: 55,
    },
    skill5: {
      skill: "REACT JS",
      level: "level",
      percent: 64,
    },
    skill6: {
      skill: "REDUX",
      level: "level",
      percent: 34,
    },
  },
  projects: {
    project1: {
      projectName: "Rock Paper Scissors game",
      projectImg: "",
      deployPath: "https://rock-paper-scissors-game-00.netlify.app/",
      sourcePath: "https://github.com/Husan-Eshonqulov/rock-paper-scissors",
    },
    project2: {
      projectName: "Rock Paper Scissors game",
      projectImg: "",
      deployPath: "https://rock-paper-scissors-game-00.netlify.app/",
      sourcePath: "https://github.com/Husan-Eshonqulov/rock-paper-scissors",
    },
    project3: {
      projectName: "Rock Paper Scissors game",
      projectImg: "",
      deployPath: "https://rock-paper-scissors-game-00.netlify.app/",
      sourcePath: "https://github.com/Husan-Eshonqulov/rock-paper-scissors",
    },
    project4: {
      projectName: "Rock Paper Scissors game",
      projectImg: "",
      deployPath: "https://rock-paper-scissors-game-00.netlify.app/",
      sourcePath: "https://github.com/Husan-Eshonqulov/rock-paper-scissors",
    },
    project5: {
      projectName: "Rock Paper Scissors game",
      projectImg: "",
      deployPath: "https://rock-paper-scissors-game-00.netlify.app/",
      sourcePath: "https://github.com/Husan-Eshonqulov/rock-paper-scissors",
    },
    project6: {
      projectName: "Rock Paper Scissors game",
      projectImg: "",
      deployPath: "https://rock-paper-scissors-game-00.netlify.app/",
      sourcePath: "https://github.com/Husan-Eshonqulov/rock-paper-scissors",
    },
  },
};

ReactDOM.render(
  <MemAccount memberInfo={memberInfo} />,
  document.getElementById("root")
);
// ReactDOM.render(<MemberAccount />, document.getElementById('root'));
