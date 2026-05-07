import { useContext } from "react";

import {
  Container,
  Nav,
  Navbar as BootstrapNavbar,
  Button,
} from "react-bootstrap";

import {
  NavLink,
  Link,
  useNavigate,
} from "react-router-dom";

import { AuthContext } from "../context/AuthContext";

function Navbar() {
  const { user, logout } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogout = () => {
    logout();

    navigate("/login");
  };

  return (
    <BootstrapNavbar
      bg="dark"
      variant="dark"
      expand="lg"
      className="py-3"
    >
      <Container>
        <BootstrapNavbar.Brand
          as={Link}
          to="/"
          className="fw-bold"
        >
          HackerNews
        </BootstrapNavbar.Brand>

        <BootstrapNavbar.Toggle
          aria-controls="basic-navbar-nav"
        />

        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-lg-center gap-2">
            <Nav.Link as={NavLink} to="/">
              Home
            </Nav.Link>

            {!user ? (
              <>
                <Nav.Link
                  as={NavLink}
                  to="/login"
                >
                  Login
                </Nav.Link>

                <Button
                  as={Link}
                  to="/register"
                  variant="primary"
                >
                  Register
                </Button>
              </>
            ) : (
              <>
                <Nav.Link
                  as={NavLink}
                  to="/bookmarks"
                >
                  ❤️ Bookmarks
                </Nav.Link>

                <Button
                  variant="danger"
                  onClick={handleLogout}
                >
                  Logout
                </Button>
              </>
            )}
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
}

export default Navbar;