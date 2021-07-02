
import Landingpage from '../LandingPage/LandingPage';
import Roadmap from '../Roadmap/Roadmap';
import orgChart from '../orgChart/OrgChartTree';
import Introduction from '../LandingPage/Introduction';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LessonPage from '../Roadmap/components/LessonPage';


function ReactRouter() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/" exact component={Landingpage}/>
                    <Route path="/roadmap"   component={Roadmap} />
                    <Route path="/organization-tree"  component={orgChart} />
                    <Route path="/introduction"  component={Introduction} />
                    <Route path="/lessons/:id"  component={LessonPage} />
                    
                </Switch>
            </div>
        </Router>
    )
}



export default ReactRouter;