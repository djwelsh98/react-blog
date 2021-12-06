import { useState } from 'react';
import { Navbar, Container, Nav, NavDropdown, Button } from "react-bootstrap";
import { Link, useRouteMatch } from "react-router-dom";
import Admin from "./Admin.jsx";
import content from "../content";

function MenuNav() {
  const { url, path } = useRouteMatch();
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(true);
  }

  return (
    <Navbar variant="dark" bg="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand>
          <Link to='/'>
            Home Page
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-dark-example" />
        <Navbar.Collapse id="navbar-dark-example">
          <Nav>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Character Profile Blogs"
              menuVariant="dark"
            >
              <NavDropdown.Item> Konan </NavDropdown.Item>
              <NavDropdown.Item > <Link to="/card/1"> Nagato </Link> </NavDropdown.Item>
              <NavDropdown.Item > <Link to="/card/2"> Pain </Link> </NavDropdown.Item>
              <NavDropdown.Item > <Link to="/card/3"> Orochimaru </Link> </NavDropdown.Item>
              <NavDropdown.Item > <Link to="/card/4"> Itachi Uchiha </Link> </NavDropdown.Item>
              <NavDropdown.Item > <Link to="/card/5"> Kisame Hoshigaki </Link> </NavDropdown.Item>
              <NavDropdown.Item > <Link to="/card/6"> Hidan </Link> </NavDropdown.Item>
              <NavDropdown.Item > <Link to="/card/7"> Kakuzu </Link> </NavDropdown.Item>
              <NavDropdown.Item > <Link to="/card/8"> Sasori </Link> </NavDropdown.Item>
              <NavDropdown.Item > <Link to="/card/9"> Deidara </Link> </NavDropdown.Item>
              <NavDropdown.Item > <Link to="/card/10"> Tobi </Link> </NavDropdown.Item>
              <NavDropdown.Item > <Link to="/card/11"> Obito Uchiha </Link> </NavDropdown.Item>
              <NavDropdown.Item > <Link to="/card/12"> Madara Uchiha </Link> </NavDropdown.Item>
              <NavDropdown.Item > <Link to="/card/13"> Zetsu </Link> </NavDropdown.Item>
              <NavDropdown.Item > <Link to="/card/14"> Taka/Hebi </Link> </NavDropdown.Item>
              <NavDropdown.Item > <Link to="/card/15"> The Organization </Link> </NavDropdown.Item>
            </NavDropdown>
            <Navbar.Brand>
              <Link to='/authors'>
                About the Authors
              </Link>
            </Navbar.Brand>
            <Navbar.Brand>
              <Link to='/contact'>
                Contact
              </Link>
            </Navbar.Brand>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <Button onClick = {handleShow}>Admin</Button>
      <Admin defaultContent = {content} setShow={setShow} show={show}/>
    </Navbar>
  )
}

export default MenuNav