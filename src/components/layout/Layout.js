import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../../page/home/Home";
import Detail from "../../page/detail/Detail";
import Navigation from "./Navigation";
import Contact from "../../page/contact/Contact";

function Layout() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/detail/:id" exact component={Detail} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </Router>
  );
}

export default Layout;
