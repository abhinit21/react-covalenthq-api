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
    <Navbar className="px-4 mx-5 mb-4 bg-dark rounded" variant="dark">
      <Navbar.Brand>Address Scanner</Navbar.Brand>
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
        <Form.Control placeholder="search by address" />
        <Button className="mx-2">Search</Button>
      </Form>
    </Navbar>
  );
}

export default NavBar;
