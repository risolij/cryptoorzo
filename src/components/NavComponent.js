import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GearFill } from 'react-bootstrap-icons';
import '../styles/nav.css';
import { Link } from 'react-router-dom';

export default function NavComponent() {
    return (
        <Navbar bg="primary" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand href="/">Cryptoorzo</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/">Home</Nav.Link>
              </Nav>
              <Nav.Link as={Link} id="gear_link" to="/preferences"><GearFill size={25} className="gear" /></Nav.Link>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    )
}
