import Landingpage from "../LandingPage/LandingPage";
import Roadmap from "../Roadmap/Roadmap";
import orgChart from "../orgChart/OrgChartTree";
import Introduction from "../LandingPage/Introduction";
import { HashRouter, Switch, Route } from "react-router-dom";
import LessonPage from "../Roadmap/components/LessonPage";
import Screen from "../memberAccounts/Screen";

function ReactRouter() {
  return (
    <HashRouter>
      <Switch>
        <Route path="/" exact component={Landingpage} />
        <Route path="/roadmap" component={Roadmap} />
        <Route path="/organization-tree" component={orgChart} />
        <Route path="/introduction" component={Introduction} />
        <Route path="/lessons/:id" component={LessonPage} />
        <Route path="/member-account/:id" component={Screen} />
      </Switch>
    </HashRouter>
  );
}

export default ReactRouter;
