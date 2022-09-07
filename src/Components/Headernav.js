import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

function Headernav() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="Home">TeeRex Store</Navbar.Brand>
          <Nav>
            <Nav.Link href="/Home">Products</Nav.Link>
            <Nav.Link eventKey={2} href="/Usercart">
            <ShoppingCartOutlinedIcon/>
            </Nav.Link>
          </Nav>
      </Container>
    </Navbar>
    
  );
}

export default Headernav;