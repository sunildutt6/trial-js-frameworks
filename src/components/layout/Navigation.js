import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { NavLink, useHistory } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import Button from "react-bootstrap/Button";

const Navigation = () => {
  const [auth, setAuth] = useContext(AuthContext);
  const history = useHistory();

  function logout() {
    setAuth(null);
    history.push("/");
  }
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>JS-Frameworks-CA</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <NavLink to="/" exact className="nav-link">
              Home
            </NavLink>
            <NavLink to="/contact" className="nav-link">
              Contact
            </NavLink>

            {auth ? (
              <>
                <NavLink to="/admin" className="nav-link">
                  Admin
                </NavLink>
                <Button variant="secondary" type="submit" onClick={logout}>
                  Logout
                </Button>
              </>
            ) : (
              <NavLink to="/login" className="nav-link">
                Login
              </NavLink>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
