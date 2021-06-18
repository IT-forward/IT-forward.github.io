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
      name: 'Users',
    },
    group2: {
      icon: <BsFillPersonFill />,
      numbers: "90+",
      name: 'Users',
    },
    group3: {
      icon: <BsFillPersonFill />,
      numbers: "90+",
      name: 'Users',
    },
  },
};

ReactDOM.render(
  <MemAccount memberInfo={memberInfo} />,
  document.getElementById("root")
);
// ReactDOM.render(<MemberAccount />, document.getElementById('root'));
