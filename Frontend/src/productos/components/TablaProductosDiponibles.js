import Zapatos1 from "../components/Zapatos";
import { Container, Row, Col } from "react-bootstrap";

const TablaProductos = () => {
  const Zapatos = [
    {
      //Continiar aqui, estoy tratande de mostrar los zapatos registrados :)
    },
  ];

  return (
    <Container>
      <Row>
        {Zapatos.map((zapato) => (
          <Col xs={4}>
            <Zapatos1 Zapatos={zapato} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default TablaProductos;
