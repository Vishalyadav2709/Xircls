import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import './Navbar.css'
import { Link } from 'react-router-dom';

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home"><img src="data:image/png;base64,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" alt="logo"></img> </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" >
          <NavDropdown title="Products" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#">SuperLeadz</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Infinity
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Semperfi</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Sniper</NavDropdown.Item>
              
            </NavDropdown>
           
            <Nav.Link href="#pricing" className="partner">Partner</Nav.Link>
            <Nav.Link href="#pricing" className="partner">Blog</Nav.Link>
            <NavDropdown title="Company" id="collapsible-nav-dropdown" className="partner">
              <NavDropdown.Item href="#action/3.1">Why Xircls?</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Vision & Mission
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
             
            </NavDropdown>
          </Nav>
          <Nav>
          
  <Button as="a" variant="primary" >
    Signup Free
  </Button>
  <Button as="a" variant="success" className="login">
    Login
  </Button>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;