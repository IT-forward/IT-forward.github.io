
import Landingpage from '../LandingPage/LandingPage';
import Roadmap from '../Roadmap/Roadmap';
import orgChart from '../orgChart/OrgChartTree';
import Introduction from '../LandingPage/Introduction';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function ReactRouter() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/" exact component={Landingpage}/>
                    <Route path="/yo'l-xaritasi"  component={Roadmap} />
                    <Route path="/azolar-daraxti"  component={orgChart} />
                    <Route path="/batafsil-malumot"  component={Introduction} />
                </Switch>
            </div>
        </Router>
    )
}



export default ReactRouter;