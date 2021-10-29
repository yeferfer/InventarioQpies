import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import React, { useState } from "react";

import Home from "./home/pages/Home";
import Carrito from "./carrito/pages/Carrito";
import Header from "./shared/Header";
import CrearProducto from "./productos/pages/CrearProducto";
import GestorProductos from "./productos/pages/Gestion";
import GestorNumeracion from "./productos/pages/GestionNumeracion";
import EditarProducto from "./productos/pages/EditarProducto";
import ProductosDisponibles from "./productos/pages/ProductosDisponibles";
import SistemaVentas from "./ventas/pages/SistemaVentas";
import VentasRealizadas from "./ventas/pages/VentasRealizadas";
import EditarVenta from "./ventas/pages/EditarVenta";
import api from "./api";
import { useEffect } from "react";

function App() {
  const [logged, setLogged] = useState(false);
  const [carrito, setCarrito] = useState([]);
  const [productos, setProductos] = useState([]);
  const [ventas, setVentas] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const responseProducts = await api.products.list();
      const responseVentas = await api.ventas.list();
      setProductos(responseProducts);
      setVentas(responseVentas);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token === null) {
      setLogged(false);
    } else {
      setLogged(true);
    }
  }, []);

  return (
    <Router>
      <Header
        isLoggedIn={logged}
        login={setLogged}
        cantCarrito={carrito.reduce(
          (total, producto) => total + producto.cantidad,
          0
        )}
      />
      <Switch>
        <Route path="/" exact>
          <Home
            isLoggedIn={logged}
            carrito={carrito}
            setCarrito={setCarrito}
            productos={productos}
            ventas={ventas}
          />
        </Route>

        <Route path="/Carrito" exact>
          <Carrito carrito={carrito} setCarrito={setCarrito} />
        </Route>

        <Route path="/CrearProducto">
          <CrearProducto productos={productos} setProductos={setProductos} />
        </Route>

        <Route path="/Gestion" exact>
          <GestorProductos productos={productos} setProductos={setProductos} />
        </Route>

        <Route path="/GestionNumeracion/Edit/:productId" exact>
          <GestorNumeracion productos={productos} setProductos={setProductos} />
        </Route>

        <Route path="/Gestion/Edit/:productId" exact>
          <EditarProducto productos={productos} setProductos={setProductos} />
        </Route>

        <Route path="/SistemaVentas" exact>
          <SistemaVentas ventas={ventas} setNewVenta={setVentas} />
        </Route>

        <Route path="/VentasRealizadas" exact>
          <VentasRealizadas ventas={ventas} setNewVenta={setVentas} />
        </Route>

        <Route path="/VentasRealizadas/Edit/:ventasId" exact>
          <EditarVenta ventas={ventas} setNewVenta={setVentas} />
        </Route>

        <Route path="/ProductosDisponibles" exact>
          <ProductosDisponibles />
        </Route>

        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
