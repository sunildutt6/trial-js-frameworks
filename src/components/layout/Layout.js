import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../../page/home/Home";
import Detail from "../../page/detail/Detail";
import Navigation from "./Navigation";
import Contact from "../../page/contact/Contact";
import Login from "../../page/login/Login";
import Admin from "../../page/admin/Admin";
import { AuthProvider } from "../../context/AuthContext";
import Favourites from "../../page/favourites/Favourites";

function Layout() {
  return (
    <AuthProvider>
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/detail/:id" exact component={Detail} />
          <Route path="/contact" component={Contact} />
          <Route path="/login" component={Login} />
          <Route path="/admin" component={Admin} />
          <Route path="/favourites" component={Favourites} />
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default Layout;
