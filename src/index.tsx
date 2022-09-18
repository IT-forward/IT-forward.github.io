import "bootstrap/dist/css/bootstrap.css";
import ReactDOM from "react-dom";
import Screen from "./memberAccounts/Screen";
// import LandingPage from "./LandingPage/LandingPage";

const screen = Screen({id: 0});

ReactDOM.render(screen, document.getElementById("root"));
