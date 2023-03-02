import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

function Header() {


  const [isScrolled, setIsScrolled] = useState(false);

  
  const handleScroll = () => {
      const position = window.pageYOffset;
      if (position > 30) {
      setIsScrolled(true);
      } else if (position < 30) {
      setIsScrolled(false);
      }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
    window.removeEventListener("scroll", handleScroll);
    };
}, []);

  return (
    <header className={isScrolled ? "sticky scrolled" : "sticky"}>
    <Navbar className="d-flex navbar-fixed-top mt-0"  expand="lg" >
      <Container>
        
        <Navbar.Brand id="brand"><Link to="/">REACTFLIX</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" >
          <Nav id="navbar"
            className="me-auto my-2 my-lg-0 "
           
            navbarScroll
          >
            <NavLink className="text-light" to="/">Home</NavLink>
            <NavLink className="text-light" to="/api/movies">Movies</NavLink>
            <NavLink className="text-light" to="/movies/new">Add Movie</NavLink>
            <NavLink className="text-light" to="#action2">TV Shows</NavLink>
            <NavLink className="text-light" to="#action2">Categories</NavLink>
            
            
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
    </header>
  );
}

export default Header;