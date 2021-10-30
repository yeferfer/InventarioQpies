import { Container, Row, Col, Table, Button } from "react-bootstrap";
import Busqueda from "../components/Busqueda";
import { Link } from "react-router-dom";
import api from "../../api";
import "./Gestion.css";
import React, { useState } from "react";

const Gestion = ({ productos }) => {
  const [productosGestion, setProductosGestion] = useState([...productos]);

  const deleteProduct = (event) => {
    const id = event.target.id;
    api.products.delete(id);
    const newProducts = productosGestion.filter(
      (product) => product._id !== id
    );
    setProductosGestion([...newProducts]);
  };

  return (
    <div>
      <h1 className="text-center mt-5 mb-5">Gestión de productos</h1>
      <Container>
        <Row className="mb-3">
          <Col xs={4}>
            <Busqueda
              productos={productos}
              setProductos={setProductosGestion}
            />
          </Col>
        </Row>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Referencia</th>
              <th>Fecha</th>
              <th>Color</th>
              <th>Material</th>
              <th>Imagen</th>
              <th>Numeracion</th>
              <th>Acción</th>
            </tr>
          </thead>
          <tbody>
            {productosGestion.map((producto) => {
              const d = new Date(producto.fecha);
              const fech =
                d.getFullYear() + "/" + d.getMonth() + "/" + d.getDay();
              return (
                <tr key={producto._id}>
                  <td>{producto.title}</td>
                  <td>{fech}</td>
                  <td>{producto.color}</td>
                  <td>{producto.material}</td>
                  <td>
                    <img
                      className="t-img"
                      src={producto.url}
                      alt={producto.nombre}
                    />
                  </td>
                  <td>
                    <Link to={`/GestionNumeracion/Edit/${producto._id}`}>
                      <Button id={producto._id} className="ms-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          color="black"
                          fill="currentColor"
                          class="bi bi-journal-text"
                          viewBox="0 0 16 16"
                        >
                          <path d="M5 10.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z" />
                          <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z" />
                          <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z" />
                        </svg>
                      </Button>
                    </Link>
                  </td>
                  <td>
                    <Link to={`/Gestion/Edit/${producto._id}`}>
                      <Button variant="warning">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-pencil"
                          viewBox="0 0 16 16"
                        >
                          <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                        </svg>
                      </Button>
                    </Link>

                    <Button
                      variant="danger"
                      onClick={deleteProduct}
                      id={producto._id}
                      className="ms-2"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-trash"
                        viewBox="0 0 16 16"
                      >
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                        <path
                          fillRule="evenodd"
                          d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                        />
                      </svg>
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default Gestion;
