import React from "react";
import { Button, FormControl, Nav, Navbar, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./nav.css";
import { logout } from "../../JS/actions/user";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import {filterPub} from "../../JS/actions/pub"
const Nave = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  return (
    <div className="all">
      <Navbar className="navbar" bg="light" variant="light" >
        <Navbar.Brand href="/">TuniHotes</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/Home">Home</Nav.Link>
          <Nav.Link href="/AboutUs">About Us</Nav.Link>
          <Nav.Link href="/SignUp">Sing Up</Nav.Link>
          <Nav.Link
            onClick={() => {
              dispatch(logout);
              history.push("/SignUp");
            }}
          >
            Logout
          </Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-primary" onClick={() => {
              dispatch(filterPub); }}>Search for a pub</Button>
        </Form>
      </Navbar>
    </div>
  );
};

export default Nave;
