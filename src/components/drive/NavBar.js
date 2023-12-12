import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function NavBarComponent() {
  const { currentUser, logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error("Error logging out", error);
    }
  };

  return (
    <Navbar bg="light" expand="sm">
      <Navbar.Brand as={Link} to="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/d/da/Google_Drive_logo.png"
          alt="Google Drive"
          style={{ width: "30px", height: "30px" }}
        />
        WDS Drive
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link as={Link} to="/user">
          Profile
        </Nav.Link>
      </Nav>
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
          {currentUser && (
            <Button
              variant="link"
              onClick={handleLogout}
              style={{
                textDecoration: "none",
                fontFamily: "inherit",
                color: "inherit",
              }}
            >
              Sign Out
            </Button>
          )}
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  );
}
