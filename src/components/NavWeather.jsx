import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";





const NavWeather = () => {
  const newDate = new Date();
  const currentTime = newDate.getHours();
  console.log(currentTime);


//   const [locationID, setLocationID] = useState('')

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg={currentTime > 16 ? "dark" : "primary"}
      data-bs-theme="dark"
      className="z-index"
    >
      <Container fluid>
        <Navbar.Brand href="#home">EPICODE WEATHER</Navbar.Brand>


        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        {/* <Navbar.Collapse id="responsive-navbar-nav"> */}
          {/* COMPRESS */}
          {/* <Nav className="ms-auto">
          <Link to="/search">

            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                required
                onChange={
                    (e)=>{
                        setLocationID(
                            e.target.value
                        )
                    }
                }
                value={locationID}
              />
              <Button variant="success">Inserisci Località</Button>
            </Form>

</Link>


          </Nav> */}
        {/* </Navbar.Collapse> */}
      </Container>
    </Navbar>
  );
};

export default NavWeather;
