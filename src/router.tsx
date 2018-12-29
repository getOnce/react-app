import * as React from "react";
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import Demo from './pages/demo';
import Test from './pages/test';
import Home from './pages/index';
function BasicExample() {
  return (
    <Router>
      <div>
      <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/demo">About</Link>
          </li>
          <li>
            <Link to="/test">Test</Link>
          </li>
        </ul>
        <Route exact={true} path="/" component={Home} />
        <Route path="/test" component={Test} />
        <Route path="/demo" component={Demo} />
      </div>
    </Router>
  );
}



export default BasicExample;