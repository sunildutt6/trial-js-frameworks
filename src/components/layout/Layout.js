import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../../page/home/Home";
import Detail from "../../page/detail/Detail";
import Navigation from "./Navigation";

function Layout() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/detail/:id" exact component={Detail} />
      </Switch>
    </Router>
  );
}

export default Layout;
