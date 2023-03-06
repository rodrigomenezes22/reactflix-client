import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import SearchList from "./SearchList";

function Header() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const handleInput = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.length !== 0) {
      navigate(`/api/search/${searchTerm}`);
      return () => {
        console.log("Return clear");
      };
    }
  };

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
      <Navbar className="d-flex navbar-fixed-top mt-0" expand="lg">
        <Container>
          <Navbar.Brand id="brand">
            <Link to="/">REACTFLIX</Link>
          </Navbar.Brand>

          <Navbar.Toggle
            aria-controls="navbarScroll"
            className="bg-white"
            // style={{ color: "white", background: "white" }}
          />
          <Navbar.Collapse id="navbarScroll">
            <Nav id="navbar" className="me-auto my-2 my-lg-0 " navbarScroll>
              <NavLink className="text-light" to="/">
                Home
              </NavLink>
              <NavLink className="text-light" to="/api/movies">
                Movies
              </NavLink>
              <NavLink className="text-light" to="/movies/new">
                Add Movie
              </NavLink>
              <NavLink className="text-light" to="/api/search/tv">
                TV Shows
              </NavLink>
            </Nav>
            <Form className="d-flex" onSubmit={handleSearch} id="search-form">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2 search-input"
                aria-label="Search"
                onChange={handleInput}
              />
              <Button
                className="searchButton"
                id="search"
                type="submit"
                value="submit"
                variant="danger"
              >
                <span className="material-symbols-sharp">search</span>
                Search
              </Button>
            </Form>
            <Button className="joinButton" id="join">
              <span className="material-symbols-sharp">login</span>Join Now
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {searchTerm && (
        <h3 className="text-white roboto">
          Searching results for: {searchTerm}
        </h3>
      )}
    </header>
  );
}

export default Header;
