import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Container, Row, Col, Alert } from "react-bootstrap";
import api from "../../api";
import NumeracionForm from "../components/NumeracionForm";

const GestionNumeracion = ({ productos, setProductos }) => {
  const history = useHistory();
  const [error, setError] = useState();
  const [success, setSuccess] = useState();
  const { productId } = useParams();

  const [newProduct, setNewProduct] = useState({
    n43: 0,
    n42: 0,
    n41: 0,
    n40: 0,
    n39: 0,
    n38: 0,
    n37: 0,
    n36: 0,
    n35: 0,
    n34: 0,
    n33: 0,
    n32: 0,
    n31: 0,
    n30: 0,
    n29: 0,
    n28: 0,
    n27: 0,
    n26: 0,
    n25: 0,
    n24: 0,
    n23: 0,
    n22: 0,
    n21: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      const response = await api.products.getProduct(productId);
      setNewProduct(response);
    };

    fetchData();
  }, [productId]);

  const handleChange = (event) => {
    setNewProduct({ ...newProduct, [event.target.name]: event.target.value });
  };

  const handleClick = async () => {
    const apiResponse = await api.products.edit(newProduct);
    if (apiResponse.err) {
      setError(apiResponse.err.message);
      console.log(apiResponse.err);
    } else {
      setSuccess(apiResponse);
      setProductos([...productos, newProduct]);
      history.push("/Gestion");
    }
  };

  return (
    <React.Fragment>
      <h1 className="text-center mt-5 mb-5">Editar Numeracion</h1>
      <Container>
        <Row className="d-flex justify-content-center align-items-center">
          <Col xs={23}>
            {error && <Alert variant="danger">{error}</Alert>}
            {success && <Alert variant="success">{success}</Alert>}
            <NumeracionForm
              handleChange={handleChange}
              handleClick={handleClick}
              formValue={newProduct}
            />
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default GestionNumeracion;
