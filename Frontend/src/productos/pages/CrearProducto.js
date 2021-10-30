import React, { useState, useEffect } from "react";
import { Container, Row, Col, Alert } from "react-bootstrap";
import api from "../../api";
import ProductForm from "../components/ProductForm";
import { useHistory } from "react-router-dom";

const CrearProducto = ({ productos, setProductos }) => {
  const [error, setError] = useState();
  const [success, setSuccess] = useState();
  const history = useHistory();
  const [newProduct, setNewProduct] = useState({
    title: "",
    description: "",
    price: 0,
    url: "",
    categoria: "",
    numeracion: 0,
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

  const handleChange = (event) => {
    setNewProduct({ ...newProduct, [event.target.name]: event.target.value });
  };

  const handleClick = async () => {
    const apiResponse = await api.products.create(newProduct);
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
      <h1 className="text-center mt-5 mb-5">Crear producto</h1>
      <Container>
        <Row className="d-flex justify-content-center align-items-center">
          <Col xs={6}>
            {error && <Alert variant="danger">{error}</Alert>}
            {success && <Alert variant="success">{success}</Alert>}
            <ProductForm
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

export default CrearProducto;
