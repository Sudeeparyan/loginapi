import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sucess from "./Success";
import Pay from "./Pay";

const App = () => {
  return(
    <Router>
      <Switch>
        <Route path="/pay">
          <Pay/>
        </Route>
        <Route path="/sucess">
          <Sucess/>
        </Route>
      </Switch>
    </Router>
  ); 
};

export default App;