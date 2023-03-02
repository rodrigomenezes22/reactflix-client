import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Header() {
  return (
    <Navbar className="d-flex navbar-fixed-top mt-0"  expand="lg" >
      <Container fluid>
        
        <Navbar.Brand id="brand" href="#">REACTFLIX</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" >
          <Nav id="navbar"
            className="me-auto my-2 my-lg-0 "
           
            navbarScroll
          >
            <Nav.Link className="text-light" href="#action1">Home</Nav.Link>
            <Nav.Link className="text-light" href="#action2">Movies</Nav.Link>
            <Nav.Link className="text-light" href="#action2">Series</Nav.Link>
            <Nav.Link className="text-light" href="#action2">TV Shows</Nav.Link>
            <Nav.Link className="text-light" href="#action2">Categories</Nav.Link>
            
            
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button className="searchButton" id="search" variant="danger" >Search</Button>
          </Form>
          <Button className="joinButton" id="join" >Join Now</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;