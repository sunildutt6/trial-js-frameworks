import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { NavLink, useHistory } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import Button from "react-bootstrap/Button";
import styled from "styled-components";

const Styles = styled.div`
  .navbar {
    background-color: var(--secondary);
  }
  .navbar-brand,
  .navbar-nav .nav-link {
    color: var(--black);
    margin-right: 1.5rem;
  }
  a.nav-link.active,
  .btn {
    text-transform: uppercase;
  }
  .brand {
    font-size: 1.75rem;
  }
`;

const Navigation = () => {
  const [auth, setAuth] = useContext(AuthContext);
  const history = useHistory();

  function logout() {
    setAuth(null);
    history.push("/");
  }
  return (
    <Styles>
      <Navbar expand="lg">
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
              <NavLink to="/favourites" className="nav-link">
                Favourites
              </NavLink>

              {auth ? (
                <>
                  <NavLink to="/admin" className="nav-link">
                    Admin
                  </NavLink>
                  <Button type="submit" onClick={logout}>
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
    </Styles>
  );
};

export default Navigation;
