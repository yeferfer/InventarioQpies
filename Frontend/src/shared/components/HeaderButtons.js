import React from "react";
import Button from "react-bootstrap/Button";
import GoogleLogin from "react-google-login";
import { Link } from "react-router-dom";

const HeaderButtons = ({ isLoggedIn, setLogin, cantCarrito }) => {
  const login = (res) => {
    setLogin(true);
    localStorage.setItem("token", res.tokenId);
    console.log(res);
  };

  const logout = () => {
    setLogin(false);
    localStorage.removeItem("token");
  };

  const loginError = (err) => {
    console.log(err);
  };

  if (isLoggedIn) {
    return (
      <React.Fragment>
        {/* <Dropdown>
          <Dropdown.Toggle variant="danger" id="dropdown-basic">
            Venticas
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item Link to="SistemaVentas" >Ingresar Venta</Dropdown.Item>
            <Dropdown.Item href="/SistemaVentas">Consultar Ventas</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Modificar Venta</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown> */}

        <Link to="/SistemaVentas">
          <Button variant="danger" className="me-3">
            Ingresar Ventas
          </Button>
        </Link>

        {/* <Link to="/Carrito">
          <Button variant="danger" className="me-3">
            Carrito <Badge bg="primary">{cantCarrito}</Badge>
          </Button>
        </Link> */}

        <Link to="/VentasRealizadas">
          <Button variant="danger" className="me-3">
            Gestionar Ventas
          </Button>
        </Link>

        <Link to="/CrearProducto">
          <Button variant="danger" className="me-3">
            Ingresar producto
          </Button>
        </Link>

        <Link to="/Gestion">
          <Button variant="danger" className="me-3">
            Gestionar Productos
          </Button>
        </Link>

        <Link to="/ProductosDisponibles">
          <Button variant="danger" className="me-3">
            Productos
          </Button>
        </Link>

        <Link to="/">
          <Button variant="danger" onClick={logout}>
            Logout
          </Button>
        </Link>
      </React.Fragment>
    );
  } else {
    return (
      <div>
        <GoogleLogin
          clientId="938696757526-ue8acoi6elupafmjdh0k7qelebk7e2os.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={login}
          onFailure={loginError}
          cookiePolicy={"single_host_origin"}
        />
        ,
        {/* <Button variant="danger" onClick={login}>
          Login
        </Button> */}
      </div>
    );
  }
};

export default HeaderButtons;
