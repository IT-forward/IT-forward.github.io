
import Landingpage from '../LandingPage/LandingPage';
import Roadmap from '../Roadmap/Roadmap';
import orgChart from '../orgChart/OrgChartTree';
import Introduction from '../LandingPage/Introduction';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LessonPage from '../Roadmap/components/LessonPage';
//import Test from '../Roadmap/testComponent';

function ReactRouter() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/" exact component={Landingpage}/>
                    <Route path="/roadmap" exact  component={Roadmap} />
                    <Route path="/organization-tree" exact component={orgChart} />
                    <Route path="/introduction" exact component={Introduction} />
                    <Route path='/lesson-course' exact component={LessonPage} />
                   
                </Switch>
            </div>
        </Router>
    )
}



export default ReactRouter;