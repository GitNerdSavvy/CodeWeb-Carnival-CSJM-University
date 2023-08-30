import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/csjm.png";


export const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <Container>
        <Row className="align-items-center">
         
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          
          <Col size={12} sm={6} className="text-center text-sm-end">
            
            <p>Copyright &copy; {new Date().getFullYear()}</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
