import React from "react";
import {
  Container,
  Navbar,
  Nav,
  Form,
  Button,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand>Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/profile">
            Profile
          </Nav.Link>
          <Nav.Link as={Link} to="/requested">
            Class B
          </Nav.Link>
        </Nav>
        <DropdownButton title="Filter">
          <Dropdown.Item>ETH</Dropdown.Item>
          <Dropdown.Item>Polygon</Dropdown.Item>
          <Dropdown.Item>Something else</Dropdown.Item>
        </DropdownButton>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="contract address"
            className="me-2"
            aria-label="Search"
          />
          <Button>Search</Button>
        </Form>
      </Container>
    </Navbar>
  );
}

export default NavBar;
