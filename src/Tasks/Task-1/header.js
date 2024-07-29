import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header(prop) {
  const {count}=prop
  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Nav>
          <button class="fa" style={{fontSize:"30px",color:"white",backgroundColor:"transparent",border:"none"}}>&#xf07a; <sup style={{color:"white",borderRadius:"50%",marginLeft:"-5px",marginTop:"-10px"}}>{count}</sup></button>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;